from django.urls import path
from .views import DepartmentView
app_name='academic'
urlpatterns = [
    
   path('/department/list',DepartmentView.as_view({'get':'list'}),name='department-list')

]

