from django.urls import path # type: ignore
from .views import ExamTypeView, ExamTimeTableView, MarkSheetView, ResultSheetView
from .dashboard import ResultDashboardView
app_name='examination'

urlpatterns = [
    # ExamType APIs
    path('examtype/list/', ExamTypeView.as_view({'get': 'list'}), name='examtype-list'),
    path('examtype/create/', ExamTypeView.as_view({'post': 'create'}), name='examtype-create'),
    path('examtype/retrieve/<str:pk>/', ExamTypeView.as_view({'get': 'retrieve'}), name='examtype-retrieve'),
    path('examtype/update/<str:pk>/', ExamTypeView.as_view({'put': 'update'}), name='examtype-update'),
    path('examtype/delete/<str:pk>/', ExamTypeView.as_view({'delete': 'delete'}), name='examtype-delete'),

    # ExamTimeTable APIs
    path('examtimetable/list/', ExamTimeTableView.as_view({'get': 'list'}), name='examtimetable-list'),
    path('examtimetable/create/', ExamTimeTableView.as_view({'post': 'create'}), name='examtimetable-create'),
    path('examtimetable/retrieve/<str:pk>/', ExamTimeTableView.as_view({'get': 'retrieve'}), name='examtimetable-retrieve'),
    path('examtimetable/update/<str:pk>/', ExamTimeTableView.as_view({'put': 'update'}), name='examtimetable-update'),
    path('examtimetable/delete/<str:pk>/', ExamTimeTableView.as_view({'delete': 'delete'}), name='examtimetable-delete'),

    # Marksheet APIs
    path('marksheet/list/', MarkSheetView.as_view({'get': 'list'}), name='marksheet-list'),
    path('marksheet/create/', MarkSheetView.as_view({'post': 'create'}), name='marksheet-create'),
    path('marksheet/retrieve/<str:pk>/', MarkSheetView.as_view({'get': 'retrieve'}), name='marksheet-retrieve'),
    path('marksheet/update/<str:pk>/', MarkSheetView.as_view({'put': 'update'}), name='marksheet-update'),
    path('marksheet/delete/<str:pk>/', MarkSheetView.as_view({'delete': 'delete'}), name='marksheet-delete'),

    # ResultSheet APIs
    path('resultsheet/list/', ResultSheetView.as_view({'get': 'list'}), name='resultsheet-list'),
    path('resultsheet/create/', ResultSheetView.as_view({'post': 'create'}), name='resultsheet-create'),
    path('resultsheet/retrieve/<str:pk>/', ResultSheetView.as_view({'get': 'retrieve'}), name='resultsheet-retrieve'),
    path('resultsheet/update/<str:pk>/', ResultSheetView.as_view({'put': 'update'}), name='resultsheet-update'),
    path('resultsheet/delete/<str:pk>/', ResultSheetView.as_view({'delete': 'delete'}), name='resultsheet-delete'),

    # Result Dashboard API
    path('result-dashboard/', ResultDashboardView.as_view(), name='result-dashboard'),
]
