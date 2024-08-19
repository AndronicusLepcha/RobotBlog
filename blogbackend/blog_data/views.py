from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated
from .serializers import PostDataSerializer, UserSerializer
from .models import PostData


from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from django.core.exceptions import ObjectDoesNotExist

from .models import BlogUsers,PostData,Tag


@api_view(['POST']) 
def register_bloguser(request):
    if request.method == 'POST':
        userSerializedData = UserSerializer(data=request.data)
        if userSerializedData.is_valid():
            userSerializedData.save()
            return Response(userSerializedData.data,status=status.HTTP_201_CREATED)
        return Response(userSerializedData.errors,status=status.HTTP_400_BAD_REQUEST)
    
    
@api_view(['POST'])
def user_login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    
    user = None
    if '@' in username:
        try:
            user = BlogUsers.objects.get(email=username)
        except ObjectDoesNotExist:
            pass
    if not user:
        user = authenticate(username=username,password=password)
        
    if user:
        token, _= Token.objects.get_or_create(user=user)
        return Response({'token':token.key,'userData':request.data},status=status.HTTP_200_OK)
    return Response({'error':'Invalid Credentails'},status=status.HTTP_401_UNAUTHORIZED)



@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def user_logout(request):
    try:
        # Extract the token from the request data
        auth_token = request.data.get('auth_token')

        if not auth_token:
            return Response({'error': 'Token not provided.'}, status=status.HTTP_400_BAD_REQUEST)

        # Retrieve the token from the database and delete it
        try:
            token = Token.objects.get(key=auth_token)
            token.delete()
            return Response({'message': 'Successfully logged out.'}, status=status.HTTP_200_OK)
        except Token.DoesNotExist:
            return Response({'error': 'Invalid token.'}, status=status.HTTP_400_BAD_REQUEST)

    except Exception as e:
        # Log the exception and return a 500 error response
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
def createPost(request):
    try:
        title = request.data.get("title")
        tags = request.data.get("tags")  # Expecting a list of tag names
        description = request.data.get("description")

        tag_objects = []
        for tag_name in tags:
            tag, created = Tag.objects.get_or_create(name=tag_name)
            tag_objects.append(tag)
        
        # Create PostData object
        postObj = PostData(
            title=title,
            description=description
        )
        postObj.save()
        
        # Add tags to the PostData object
        postObj.tags.set(tag_objects)  # ManyToManyField
        postObj.save()
        
        return Response({'message': 'Post successfully created.'}, status=status.HTTP_201_CREATED)

    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
@api_view(['GET'])
def getAllPost(request):
    try:
        if request.method == "GET":
            print("About the fetch tge postdata")
            data=PostData.objects.all()
            print("data is ",data)
            postData = PostDataSerializer(data,many=True)
            return Response(postData.data,status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error":"failed to retrieve the all post {e}"},status=status.HTTP_400_BAD_REQUEST)
        