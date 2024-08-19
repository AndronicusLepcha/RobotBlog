from django.urls import path
from .views import register_bloguser,user_login,user_logout,createPost,getAllPost

urlpatterns = [
    path('registerBlogUser',register_bloguser,name="register"),
    path('loginUser',user_login,name="login"),
    path('userLogout',user_logout,name="userLogout"),
    path('createPost',createPost,name="createPost"),
    path('getAllPost',getAllPost,name="getAllPost"),
]