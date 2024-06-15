from django.urls import path # type: ignore
from .views import DepartmentView
app_name='academic'
urlpatterns = [
    
   path('department/list',DepartmentView.as_view({'get':'list'}),name='department-list')

]

