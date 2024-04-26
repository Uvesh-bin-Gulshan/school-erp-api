from django.contrib import admin
from django.urls import path
from .views import ListEmployeeData
app_name='students'
urlpatterns = [
   path('list-employee/',ListEmployeeData.as_view(),name='list-employee')
]
