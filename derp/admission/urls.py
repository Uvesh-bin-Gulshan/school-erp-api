from django.urls import path # type: ignore
from .views import AdmissionView
app_name='admission'
urlpatterns = [
    
   path('admission/list',AdmissionView.as_view({'get':'list'}),name='admission-list')

]

