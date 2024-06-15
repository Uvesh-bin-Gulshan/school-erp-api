from django.contrib import admin
from .models import Role,Permission,User
from django.contrib.auth.admin import UserAdmin

admin.site.register(Role)
admin.site.register(Permission)
admin.site.register(User,UserAdmin)
