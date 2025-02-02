from django.urls import path # type: ignore
from .views import LoginView
app_name='userauth'
urlpatterns = [
    
   path('login/',LoginView.as_view(),name='login')

]

