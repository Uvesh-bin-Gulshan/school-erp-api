from django.urls import path
from .views import AttendanceView, FingerRecordView

app_name='attendance'

urlpatterns = [
    # Attendance urls
    path('attendance/list/', AttendanceView.as_view({'get': 'list'}), name='attendance-list'),
    path('attendance/create/', AttendanceView.as_view({'post': 'create'}), name='attendance-create'),
    path('attendance/retrieve/<str:pk>/', AttendanceView.as_view({'get': 'retrieve'}), name='attendance-retrieve'),
    path('attendance/update/<str:pk>/', AttendanceView.as_view({'put': 'update'}), name='attendance-update'),
    path('attendance/delete/<str:pk>/', AttendanceView.as_view({'delete': 'delete'}), name='attendance-delete'),

    # Finger Record urls
    path('fingerrecord/list/', FingerRecordView.as_view({'get': 'list'}), name='fingerrecord-list'),
    path('fingerrecord/create/', FingerRecordView.as_view({'post': 'create'}), name='fingerrecord-create'),
    path('fingerrecord/retrieve/<str:pk>/', FingerRecordView.as_view({'get': 'retrieve'}), name='fingerrecord-retrieve'),
    path('fingerrecord/update/<str:pk>/', FingerRecordView.as_view({'put': 'update'}), name='fingerrecord-update'),
    path('fingerrecord/delete/<str:pk>/', FingerRecordView.as_view({'delete': 'delete'}), name='fingerrecord-delete'),
]
