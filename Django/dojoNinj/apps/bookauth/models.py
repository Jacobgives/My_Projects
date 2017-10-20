from __future__ import unicode_literals
from django.db import models
# Create your models here.
class Auth(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    notes = models.TextField(default="This is a swell and neat author")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class Book(models.Model):
    name = models.CharField(max_length=255)
    authors = models.ManyToManyField(Auth, related_name="books")
    desc = models.TextField(default="This is a happy and cool book.")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
