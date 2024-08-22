from django.urls import path
from .views import DepartmentView, SubjectView, CourseView, AnnuallySubjectSyllabusStatusView, MonthlySubjectSyllabusStatusView, SyllabusStatusVerificationView, TimeTableView, VacationPeriodView
from .dashboard import AcademicDashboardView
app_name='academic'
urlpatterns = [
   # Department APIs
   path('department/list',DepartmentView.as_view({'get':'list'}),name='department-list'),
   path('department/create',DepartmentView.as_view({'post':'create'}),name='department-create'),
   path('department/retrieve/<str:pk>/',DepartmentView.as_view({'get':'retrieve'}),name='department-retrieve'),
   path('department/delete/<str:pk>/',DepartmentView.as_view({'delete':'delete'}),name='department-delete'),
   path('department/update/<str:pk>/',DepartmentView.as_view({'put':'update'}),name='department-create'),

   # Subject APIs
   path('subject/list',SubjectView.as_view({'get':'list'}),name='Subject-list'),
   path('subject/create',SubjectView.as_view({'post':'create'}),name='Subject-create'),
   path('subject/retrieve/<str:pk>/',SubjectView.as_view({'get':'retrieve'}),name='Subject-retrieve'),
   path('subject/delete/<str:pk>/',SubjectView.as_view({'delete':'delete'}),name='Subject-delete'),
   path('subject/update/<str:pk>/',SubjectView.as_view({'put':'update'}),name='Subject-create'),

   # Course APIs
   path('course/list',CourseView.as_view({'get':'list'}),name='Course-list'),
   path('course/create',CourseView.as_view({'post':'create'}),name='Course-create'),
   path('course/retrieve/<str:pk>/',CourseView.as_view({'get':'retrieve'}),name='Course-retrieve'),
   path('course/delete/<str:pk>/',CourseView.as_view({'delete':'delete'}),name='Course-delete'),
   path('course/update/<str:pk>/',CourseView.as_view({'put':'update'}),name='Course-create'),

   # AnnuallySubjectSyllabusStatus APIs
   path('annuallySubjectSyllabusStatus/list',AnnuallySubjectSyllabusStatusView.as_view({'get':'list'}),name='AnnuallySubjectSyllabusStatus-list'),
   path('annuallySubjectSyllabusStatus/create',AnnuallySubjectSyllabusStatusView.as_view({'post':'create'}),name='AnnuallySubjectSyllabusStatus-create'),
   path('annuallySubjectSyllabusStatus/retrieve/<str:pk>/',AnnuallySubjectSyllabusStatusView.as_view({'get':'retrieve'}),name='AnnuallySubjectSyllabusStatus-retrieve'),
   path('annuallySubjectSyllabusStatus/delete/<str:pk>/',AnnuallySubjectSyllabusStatusView.as_view({'delete':'delete'}),name='AnnuallySubjectSyllabusStatus-delete'),
   path('annuallySubjectSyllabusStatus/update/<str:pk>/',AnnuallySubjectSyllabusStatusView.as_view({'put':'update'}),name='AnnuallySubjectSyllabusStatus-create'),

   # MonthlySubjectSyllabusStatus APIs
   path('monthlySubjectSyllabusStatus/list',MonthlySubjectSyllabusStatusView.as_view({'get':'list'}),name='MonthlySubjectSyllabusStatus-list'),
   path('monthlySubjectSyllabusStatus/create',MonthlySubjectSyllabusStatusView.as_view({'post':'create'}),name='MonthlySubjectSyllabusStatus-create'),
   path('monthlySubjectSyllabusStatus/retrieve/<str:pk>/',MonthlySubjectSyllabusStatusView.as_view({'get':'retrieve'}),name='MonthlySubjectSyllabusStatus-retrieve'),
   path('monthlySubjectSyllabusStatus/delete/<str:pk>/',MonthlySubjectSyllabusStatusView.as_view({'delete':'delete'}),name='MonthlySubjectSyllabusStatus-delete'),
   path('monthlySubjectSyllabusStatus/update/<str:pk>/',MonthlySubjectSyllabusStatusView.as_view({'put':'update'}),name='MonthlySubjectSyllabusStatus-create'),

   # SyllabusStatusVerification APIs
   path('verification/list',SyllabusStatusVerificationView.as_view({'get':'list'}),name='verification-list'),
   path('verification/create',SyllabusStatusVerificationView.as_view({'post':'create'}),name='verification-create'),
   path('verification/retrieve/<str:pk>/',SyllabusStatusVerificationView.as_view({'get':'retrieve'}),name='verification-retrieve'),
   path('verification/delete/<str:pk>/',SyllabusStatusVerificationView.as_view({'delete':'delete'}),name='verification-delete'),
   path('verification/update/<str:pk>/',SyllabusStatusVerificationView.as_view({'put':'update'}),name='verification-create'),
   
   # TimeTable APIs
   path('timetable/list/', TimeTableView.as_view({'get': 'list'}), name='timetable-list'),
   path('timetable/create/', TimeTableView.as_view({'post': 'create'}), name='timetable-create'),
   path('timetable/retrieve/<str:pk>/', TimeTableView.as_view({'get': 'retrieve'}), name='timetable-retrieve'),
   path('timetable/update/<str:pk>/', TimeTableView.as_view({'put': 'update'}), name='timetable-update'),
   path('timetable/delete/<str:pk>/', TimeTableView.as_view({'delete': 'delete'}), name='timetable-delete'),

   #VacationPeriod APIs
   path('vacationperiod/list/', VacationPeriodView.as_view({'get': 'list'}), name='vacationperiod-list'),
   path('vacationperiod/create/', VacationPeriodView.as_view({'post': 'create'}), name='vacationperiod-create'),
   path('vacationperiod/retrieve/<str:pk>/', VacationPeriodView.as_view({'get': 'retrieve'}), name='vacationperiod-retrieve'),
   path('vacationperiod/update/<str:pk>/', VacationPeriodView.as_view({'put': 'update'}), name='vacationperiod-update'),
   path('vacationperiod/delete/<str:pk>/', VacationPeriodView.as_view({'delete': 'delete'}), name='vacationperiod-delete'),

    # Dashboard APIs
    path('academic-dashboard/', AcademicDashboardView.as_view(), name='academic-dashboard'),  # Done Alhamdulillah

]