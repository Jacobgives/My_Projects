from django.db import models

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class Book(models.Model):
    name = models.CharField(max_length=255)
    userlikes = models.ManyToManyField(User, related_name="booklikes")
    desc = models.TextField(default="This is a happy and cool book.")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    Uploaded_by_id=models.ForeignKey(User, related_name='uploader')
