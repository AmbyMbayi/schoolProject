from django.db import models

# Create your models here.
class School(models.Model):
    name = models.CharField(max_length = 100)
    email = models.EmailField(max_length = 100, unique = True)
    message = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

class Teachers(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique= True)
    created_at = models.DateTimeField(auto_now_add = True)

class Students(models.Model):
    name = models.CharField(max_length=100)
    admin_no = models.CharField(max_length = 100)
    created_at = models.DateTimeField(auto_now_add=True)
