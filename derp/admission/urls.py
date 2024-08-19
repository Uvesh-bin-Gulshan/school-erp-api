from django.urls import path # type: ignore
from .views import AdmissionView, StudentView, AlumniView
from .dashboard import AdmissionDashboardView, StudentDashboardView, AlumniDashboardView
app_name='admission'
urlpatterns = [
    # Admission urls
    path('list/', AdmissionView.as_view({'get': 'list'}), name='admission-list'),
    path('create/', AdmissionView.as_view({'post': 'create'}), name='admission-create'),
    path('retrieve/<str:pk>/', AdmissionView.as_view({'get': 'retrieve'}), name='admission-retrieve'),
    path('update/<str:pk>/', AdmissionView.as_view({'put': 'update'}), name='admission-update'),
    path('delete/<str:pk>/', AdmissionView.as_view({'delete': 'delete'}), name='admission-delete'),

    # Student urls
    path('student/list/', StudentView.as_view({'get': 'list'}), name='student-list'),
    path('student/create/', StudentView.as_view({'post': 'create'}), name='student-create'),
    path('student/retrieve/<str:pk>/', StudentView.as_view({'get': 'retrieve'}), name='student-retrieve'),
    path('student/update/<str:pk>/', StudentView.as_view({'put': 'update'}), name='student-update'),
    path('student/delete/<str:pk>/', StudentView.as_view({'delete': 'delete'}), name='student-delete'),

    # Alumni urls
    path('alumni/list/', AlumniView.as_view({'get': 'list'}), name='alumni-list'),
    path('alumni/create/', AlumniView.as_view({'post': 'create'}), name='alumni-create'),
    path('alumni/retrieve/<str:pk>/', AlumniView.as_view({'get': 'retrieve'}), name='alumni-retrieve'),
    path('alumni/update/<str:pk>/', AlumniView.as_view({'put': 'update'}), name='alumni-update'),
    path('alumni/delete/<str:pk>/', AlumniView.as_view({'delete': 'delete'}), name='alumni-delete'),

    # Dashboard APIs
    path('admission-dashboard/', AdmissionDashboardView.as_view(), name='admission-dashboard'),
    path('student-dashboard/', StudentDashboardView.as_view(), name='student-dashboard'),
    path('alumni-dashboard/', AlumniDashboardView.as_view(), name='alumni-dashboard'),




]

