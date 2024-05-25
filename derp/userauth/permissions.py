from rest_framework.permissions import BasePermission
from django.contrib.auth.models import User
from .models import User, Role


class isPrincipal(BasePermission):
   def has_permission(self, request, view):
      user=request.user
      return user.User.roles.filter(name='Principal').exists()
   
class isTeacher(BasePermission):
   def has_permission(self, request, view):
      user=request.user
      return user.User.roles.filter(name='Teacher').exists()
   

class isLibrarian(BasePermission):
   def has_permission(self, request, view):
      user=request.user
      return user.User.roles.filter(name='Librarian').exists()
   

class isTechSupport(BasePermission):
   def has_permission(self, request, view):
      user=request.user
      return user.User.roles.filter(name='TechSupport').exists()
   
