from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Count, F, ExpressionWrapper,fields
from .models import Attendance
from django.db.models.functions import ExtractYear, ExtractMonth, ExtractWeek, ExtractDay


class AttendanceDashboardView(APIView):
    def get(self,request):

        context={
            'attendance_per_year': self.get_total_attendance_per_year(),
       }
        return Response(context)

    def get_total_attendance_per_year(self,status=None):
            queryset=Attendance.objects()
            if status:
                queryset = queryset.filter(status=status)
            return queryset.annotate(
                year=ExtractYear('date' and 'time'),
                subject_name=F('time_table__subject_name')
            ).values('year').annotate(count=Count('id')).order_by('year','subject_name')
        
        
    def get_total_attendance_per_month(self, status=None):
        queryset = Attendance.objects.all()
        if status:
            queryset = queryset.filter(status=status)
        
        return queryset.annotate(
            year=ExtractYear('date'),
            month=ExtractMonth('date'),
            subject_name=F('time_table__subject__name')
        ).values('year', 'month', 'subject_name').annotate(
            count=Count('id')
        ).order_by('year', 'month', 'subject_name')

    def get_total_attendance_per_week(self, status=None):
        queryset = Attendance.objects.all()
        if status:
            queryset = queryset.filter(status=status)
        
        return queryset.annotate(
            year=ExtractYear('date'),
            week=ExtractWeek('date'),
            subject_name=F('time_table__subject__name')
        ).values('year', 'week', 'subject_name').annotate(
            count=Count('id')
        ).order_by('year', 'week', 'subject_name')

    def get_total_attendance_per_day(self, status=None):
        queryset = Attendance.objects.all()
        if status:
            queryset = queryset.filter(status=status)
        
        return queryset.annotate(
            year=ExtractYear('date'),
            month=ExtractMonth('date'),
            day=ExtractDay('date'),
            subject_name=F('time_table__subject__name')
        ).values('year', 'month', 'day', 'subject_name').annotate(
            count=Count('id')
        ).order_by('year', 'month', 'day', 'subject_name')




