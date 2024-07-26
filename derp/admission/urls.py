from django.urls import path # type: ignore
from .views import AdmissionView, StudentView
app_name='admission'
urlpatterns = [
    # Admission urls
    path('admission/list/', AdmissionView.as_view({'get': 'list'}), name='admission-list'),
    path('admission/create/', AdmissionView.as_view({'post': 'create'}), name='admission-create'),
    path('admission/retrieve/<str:pk>/', AdmissionView.as_view({'get': 'retrieve'}), name='admission-retrieve'),
    path('admission/update/<str:pk>/', AdmissionView.as_view({'put': 'update'}), name='admission-update'),
    path('admission/delete/<str:pk>/', AdmissionView.as_view({'delete': 'delete'}), name='admission-delete'),

    # Student urls
    path('student/list/', StudentView.as_view({'get': 'list'}), name='student-list'),
    path('student/create/', StudentView.as_view({'post': 'create'}), name='student-create'),
    path('student/retrieve/<str:pk>/', StudentView.as_view({'get': 'retrieve'}), name='student-retrieve'),
    path('student/update/<str:pk>/', StudentView.as_view({'put': 'update'}), name='student-update'),
    path('student/delete/<str:pk>/', StudentView.as_view({'delete': 'delete'}), name='student-delete'),




]

