from django.urls import path
from .views import *
app_name='academic'
urlpatterns = [
   # Departtment APIs
   path('/department/lists',DepartmentView.as_view({'get':'list'}),name='department-list'),
   path('/department/create',DepartmentView.as_view({'post':'create'}),name='department-create'),
   path('/department/retrieve/<str:pk>/',DepartmentView.as_view({'get':'retrieve'}),name='department-retrieve'),
   path('/department/delete/<str:pk>/',DepartmentView.as_view({'delete':'delete'}),name='department-delete'),
   path('/department/update/<str:pk>/',DepartmentView.as_view({'put':'update'}),name='department-create'),

   # Subject APIs
   path('/Subject/list',SubjectView.as_view({'get':'list'}),name='Subject-list'),
   path('/Subject/create',SubjectView.as_view({'post':'create'}),name='Subject-create'),
   path('/Subject/retrieve/<str:pk>/',SubjectView.as_view({'get':'retrieve'}),name='Subject-retrieve'),
   path('/Subject/delete/<str:pk>/',SubjectView.as_view({'delete':'delete'}),name='Subject-delete'),
   path('/Subject/update/<str:pk>/',SubjectView.as_view({'put':'update'}),name='Subject-create'),

   # Course APIs
   path('/Course/list',CourseView.as_view({'get':'list'}),name='Course-list'),
   path('/Course/create',CourseView.as_view({'post':'create'}),name='Course-create'),
   path('/Course/retrieve/<str:pk>/',CourseView.as_view({'get':'retrieve'}),name='Course-retrieve'),
   path('/Course/delete/<str:pk>/',CourseView.as_view({'delete':'delete'}),name='Course-delete'),
   path('/Course/update/<str:pk>/',CourseView.as_view({'put':'update'}),name='Course-create'),

   # AnnuallySubjectSyllabusStatus APIs
   path('/AnnuallySubjectSyllabusStatus/list',AnnuallySubjectSyllabusStatusView.as_view({'get':'list'}),name='AnnuallySubjectSyllabusStatus-list'),
   path('/AnnuallySubjectSyllabusStatus/create',AnnuallySubjectSyllabusStatusView.as_view({'post':'create'}),name='AnnuallySubjectSyllabusStatus-create'),
   path('/AnnuallySubjectSyllabusStatus/retrieve/<str:pk>/',AnnuallySubjectSyllabusStatusView.as_view({'get':'retrieve'}),name='AnnuallySubjectSyllabusStatus-retrieve'),
   path('/AnnuallySubjectSyllabusStatus/delete/<str:pk>/',AnnuallySubjectSyllabusStatusView.as_view({'delete':'delete'}),name='AnnuallySubjectSyllabusStatus-delete'),
   path('/AnnuallySubjectSyllabusStatus/update/<str:pk>/',AnnuallySubjectSyllabusStatusView.as_view({'put':'update'}),name='AnnuallySubjectSyllabusStatus-create'),

   # MonthlySubjectSyllabusStatus APIs
   path('/MonthlySubjectSyllabusStatus/list',MonthlySubjectSyllabusStatusView.as_view({'get':'list'}),name='MonthlySubjectSyllabusStatus-list'),
   path('/MonthlySubjectSyllabusStatus/create',MonthlySubjectSyllabusStatusView.as_view({'post':'create'}),name='MonthlySubjectSyllabusStatus-create'),
   path('/MonthlySubjectSyllabusStatus/retrieve/<str:pk>/',MonthlySubjectSyllabusStatusView.as_view({'get':'retrieve'}),name='MonthlySubjectSyllabusStatus-retrieve'),
   path('/MonthlySubjectSyllabusStatus/delete/<str:pk>/',MonthlySubjectSyllabusStatusView.as_view({'delete':'delete'}),name='MonthlySubjectSyllabusStatus-delete'),
   path('/MonthlySubjectSyllabusStatus/update/<str:pk>/',MonthlySubjectSyllabusStatusView.as_view({'put':'update'}),name='MonthlySubjectSyllabusStatus-create'),

   # SyllabusStatusVerification APIs
   path('/verification/list',SyllabusStatusVerificationView.as_view({'get':'list'}),name='verification-list'),
   path('/verification/create',SyllabusStatusVerificationView.as_view({'post':'create'}),name='verification-create'),
   path('/verification/retrieve/<str:pk>/',SyllabusStatusVerificationView.as_view({'get':'retrieve'}),name='verification-retrieve'),
   path('/verification/delete/<str:pk>/',SyllabusStatusVerificationView.as_view({'delete':'delete'}),name='verification-delete'),
   path('/verification/update/<str:pk>/',SyllabusStatusVerificationView.as_view({'put':'update'}),name='verification-create'),

]

