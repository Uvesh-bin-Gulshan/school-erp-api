from rest_framework.views import APIViews
from rest_framwork.response import Response
from django.db.models import Count
from .models import Admission


class AdmissionDashboardView(APIViews):
    def get(self,request):
        total_admissions_applied=Admission.objects.count(),
        admission_applied_per_year=Admission.objects.values('created_at').annotate(count=Count('created_at')),
        admission_accepted_per_year=Admission.objects.values('created_at').annotate(count=Count('created_at')),
        admission_rejected_per_year=Admission.objects.values('created_at').annotate(count=Count('created_at')),

        
        context={
        'total_admissions_applied':total_admissions_applied,
        'admission_applied_per_year':admission_applied_per_year,
        'admission_accepted_per_year':admission_applied_per_year,
        'admission_rejected_per_year':admission_applied_per_year,
             
                  }
        return Response(context)
    

