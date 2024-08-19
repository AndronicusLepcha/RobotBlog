from django.contrib.auth.models import AbstractUser
from django.db import models

class BlogUsers(AbstractUser):
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.username

class PostData(models.Model):
    title = models.CharField(max_length=100)
    tags = models.ManyToManyField('Tag', blank=True)
    description = models.TextField() 

    def __str__(self):
        return self.title
    
class Tag(models.Model):
    name = models.CharField(max_length=50, unique=True)
    def __str__(self):
        return self.name
