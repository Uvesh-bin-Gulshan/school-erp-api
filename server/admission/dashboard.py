from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Count, F, ExpressionWrapper,fields
from .models import Admission,Student,Alumni
from django.db.models.functions import ExtractYear
class AdmissionDashboardView(APIView):
    def get(self, request):
        context = {
            'total_admissions_applied': self.get_total_admissions(),
            'admission_applied_per_year': self.get_admissions_per_year(),
            'admission_approved_per_year': self.get_admissions_per_year(status='approved'),
            'admission_pending_per_year': self.get_admissions_per_year(status='pending'),
            'admission_left_per_year': self.get_admissions_per_year(status='left'),
            'admission_filter_by_course': self.get_admissions_grouped_by('applied_for'),
            'admission_filter_by_department': self.get_admissions_grouped_by('previous_education'),
            'admission_filter_by_age': self.get_admissions_grouped_by_age(),
            'admission_filter_by_city': self.get_admissions_grouped_by('district'),
            'admission_filter_by_state': self.get_admissions_grouped_by('state'),
            'admission_filter_by_country': self.get_admissions_grouped_by('locality'),  # Assuming locality as country; adjust as needed
            'age_per_course': self.get_admissions_grouped_by_age('applied_for'),
            'age_per_department': self.get_admissions_grouped_by_age('previous_education'),
        }
        return Response(context)
    
    def get_total_admissions(self):
        return Admission.objects.count()

    def get_admissions_per_year(self, status=None):
        queryset = Admission.objects
        if status:
            queryset = queryset.filter(admission_status=status)
        return queryset.annotate(
            year=ExtractYear('created_at')
        ).values('year').annotate(count=Count('id')).order_by('year')

    def get_admissions_grouped_by(self, field):
        return Admission.objects.values(field).annotate(count=Count('id')).order_by(field)

    def get_admissions_grouped_by_age(self, group_by=None):
        queryset = Admission.objects.annotate(
            age=ExpressionWrapper(
                ExtractYear(F('created_at')) - ExtractYear(F('date_of_birth')),
                output_field=fields.IntegerField()
            )
        )
        if group_by:
            return queryset.values(group_by, 'age').annotate(count=Count('id')).order_by(group_by, 'age')
        return queryset.values('age').annotate(count=Count('id')).order_by('age')


class StudentDashboardView(APIView):
    def get(self, request):
        context = {
            'total_students': self.get_total_students(),
            'student_per_course': self.get_students_grouped_by('course__name'), 
            'student_per_department': self.get_students_grouped_by('department__name'), 
            'student_status_per_year': self.get_students_per_year(),
            'student_status_distribution': self.get_students_grouped_by('student_status'),
            'student_age_distribution': self.get_students_grouped_by_age(),
            'student_per_city': self.get_students_grouped_by('admission__district'),  
            'student_per_state': self.get_students_grouped_by('admission__state'),
            'student_per_country': self.get_students_grouped_by('admission__locality'),  
        }
        return Response(context)
    
    def get_total_students(self):
        return Student.objects.count()

    def get_students_grouped_by(self, field):
        return Student.objects.values(field).annotate(count=Count('student_id')).order_by(field)

    def get_students_per_year(self):
        return Student.objects.annotate(
            year=ExtractYear('admission__created_at')
        ).values('year').annotate(count=Count('student_id')).order_by('year')

    def get_students_grouped_by_age(self):
        current_year = ExtractYear(F('admission__created_at'))
        birth_year = ExtractYear(F('admission__date_of_birth'))
        age = ExpressionWrapper(current_year - birth_year, output_field=fields.IntegerField())
        
        return Student.objects.annotate(age=age).values('age').annotate(count=Count('student_id')).order_by('age')
    


class AlumniDashboardView(APIView):
     def get_alumni_data(self):
        total_alumni = Alumni.objects.count()

        queryset = (
            Alumni.objects
            .select_related('student__course__department')
            .annotate(
                city=F('residence__city'),
                state=F('residence__state'),
                country=F('residence__country'),
                occupation=F('occupation'),
                course_name=F('student__course__name'),
                department_name=F('student__course__department__name'),
                alumni_count=Count('alumni_id'),
                alumni_percentage=ExpressionWrapper(
                    F('alumni_count') * 100.0 / total_alumni,
                    output_field=fields.FloatField()
                )
            )
            .values(
                'city',
                'state',
                'country',
                'occupation',
                'course_name',
                'department_name',
                'alumni_count',
                'alumni_percentage'
            )
            .order_by('city', 'state', 'country', 'occupation', 'course_name')
        )
        return list(queryset)