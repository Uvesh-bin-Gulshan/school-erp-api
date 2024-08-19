from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Count, F, ExpressionWrapper,fields,Sum
from .models import AnnuallySubjectSyllabusStatus
from django.db.models.functions import Coalesce, ExtractYear, ExtractMonth, ExtractWeek, ExtractDay


class AcademicDashboardView(APIView):
    def get(self,request):

        context={
            'subject_completed_count_per_year': self.get_subject_completed_count_per_year(),
       }
        return Response(context)
    

    def get_subject_completed_count_per_year(self,status=None):
        queryset=(AnnuallySubjectSyllabusStatus.objects.select_related('subject__syllabus_count', 'subject__course__department').annotate(
            total_syllabus_count=F('subject__syllabus_count'),
             completed_syllabus_count=Coalesce(Sum
                            ('monthly_statuses__count'),0),
             completed_percentage=ExpressionWrapper(
                    F('completed_syllabus_count') * 100.0 / F('total_syllabus_count'),
                    output_field=fields.FloatField()
                )
        ).values(
          'subject__name',
                'teacher',
                'subject__course__name',
                'subject__course__department__name',
                'total_syllabus_count',
                'completed_syllabus_count',
                'completed_percentage'
            ))
        return list(queryset)   
        

        

