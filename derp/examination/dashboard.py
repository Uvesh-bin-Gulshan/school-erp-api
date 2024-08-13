from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Count, F, Sum, Case, When, Value, ExpressionWrapper, fields
from django.db.models.functions import ExtractYear
from .models import MarkSheet, ExamTimeTable

class ResultDashboardView(APIView):
    def get(self, request):
        context = {
            'result_per_year': self.get_result_per_year(),
        }
        return Response(context)

    def get_result_per_year(self):
        queryset = (
            MarkSheet.objects
            .select_related('exam_detail__subject__course', 'exam_detail__subject__course__department')
            .annotate(
                year=ExtractYear('exam_detail__exam_type__effective_date'),
                subject_name=F('exam_detail__subject__name'),
                teacher=F('exam_detail__subject__teacher'),
                course_name=F('exam_detail__subject__course__name'),
                department_name=F('exam_detail__subject__course__department__name'),
                total_students=Count('student', distinct=True),
                passed_students=Sum(
                    Case(
                        When(result='Pass', then=1),
                        default=0,
                        output_field=fields.IntegerField()
                    )
                ),
                passing_ratio=ExpressionWrapper(
                    F('passed_students') * 100.0 / F('total_students'),
                    output_field=fields.FloatField()
                )
            )
            .values(
                'year',
                'subject_name',
                'teacher',
                'course_name',
                'department_name',
                'total_students',
                'passed_students',
                'passing_ratio'
            )
            .order_by('year', 'subject_name', 'teacher', 'course_name')
        )
        return list(queryset)
