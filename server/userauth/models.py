from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    roles=models.ManyToManyField('Role',blank=False)

 


class Role(models.Model):
    name=models.CharField(max_length=30,unique=True)
    permission=models.ForeignKey('Permission',blank=False,on_delete=models.PROTECT)
    
    def __str__(self):
        return self.name
    
class Permission(models.Model):
    name=models.CharField(max_length=100,unique=True)
    description=models.TextField(blank=True)

    def __str__(self):
        return self.name
    
   
    
