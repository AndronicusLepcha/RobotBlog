from rest_framework import serializers
from .models import BlogUsers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogUsers
        fields = ['username','email','password']
        extra_kwargs = {'password': {'write_only': True}}
        
    def create(self,validate_data):
        user = BlogUsers(
            username = validate_data['username'],
            email=validate_data['email']
        )
        user.set_password(validate_data['password'])
        user.save()
        return user