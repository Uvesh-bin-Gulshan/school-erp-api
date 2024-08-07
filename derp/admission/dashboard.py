from rest_framework.views import APIViews
from rest_framwork.response import Response
from django.db.models import Count, F, ExpressionWrapper,fields
from .models import Admission
from django.db.models.functions import ExtractYear


class AdmissionDashboardView(APIViews):
    def get(self,request):
        total_admissions_applied=Admission.objects.count(),
        admission_applied_per_year=Admission.objects.annotate(year=ExtractYear('created_at')).values('year').annotate(count=Count('id')).order_by('year'),
        admission_accepted_per_year=Admission.objects.annotate(year=ExtractYear('created_at')).values('year').annotate(count=Count('id')).order_by('year'),
        admission_rejected_per_year=Admission.objects.annotate(year=ExtractYear('created_at')).values('year').annotate(count=Count('id')).order_by('year'),
        admission_filter_by_course=Admission.objects.values('created_at').annotate(count=Count('created_at')),
        admission_filter_by_department=Admission.objects.values('created_at').annotate(count=Count('created_at')),
        admission_filter_by_age=Admission.objects.annotate(age=ExpressionWrapper(ExtractYear(F('create_at'))-ExtractYear(F('date_of_birth')),output_field==fields.IntegerField())).values('age').annotate(count=Count('id')).order_by('age'),
        admission_filter_by_city=Admission.objects.values('created_at').annotate(count=Count('created_at')),
        admission_filter_by_state=Admission.objects.values('created_at').annotate(count=Count('created_at')),
        admission_filter_by_country=Admission.objects.values('created_at').annotate(count=Count('created_at')),



        context={
        'total_admissions_applied':total_admissions_applied,
        'admission_applied_per_year':admission_applied_per_year,
        'admission_accepted_per_year':admission_accepted_per_year,
        'admission_rejected_per_year':admission_rejected_per_year,
             
                  }
        return Response(context)
    



class StudentDashboardView(APIViews):
    def get(self,request):
        total_students_till_now=Admission.objects.count(),
        students_per_year=Admission.objects.values('created_at').annotate(count=Count('created_at')),
        students_left_per_year=Admission.objects.values('created_at').annotate(count=Count('created_at')),
        students_filter_by_course=Admission.objects.values('created_at').annotate(count=Count('created_at')),
        students_filter_by_department=Admission.objects.values('created_at').annotate(count=Count('created_at')),
        students_filter_by_age=Admission.objects.values('created_at').annotate(count=Count('created_at')),
        students_filter_by_city=Admission.objects.values('created_at').annotate(count=Count('created_at')),
        students_filter_by_state=Admission.objects.values('created_at').annotate(count=Count('created_at')),
        students_filter_by_country=Admission.objects.values('created_at').annotate(count=Count('created_at')),



        context={
        'total_students_till_now':total_students_till_now,
        'students_per_year':students_per_year,
        'students_left_per_year':students_left_per_year,
        'students_filter_by_course':students_filter_by_course,
        'students_filter_by_department':students_filter_by_department,
        'students_filter_by_age':students_filter_by_age,
        'students_filter_by_city':students_filter_by_city,
        'students_filter_by_state':students_filter_by_state,
        'students_filter_by_country':students_filter_by_country,
             
                  }
        return Response(context)
    

