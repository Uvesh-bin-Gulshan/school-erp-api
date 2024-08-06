from rest_framework import serializers
from .models import Department,Course,AnnuallySubjectSyllabusStatus,Subject,MonthlySubjectSyllabusStatus,SyllabusStatusVerification, TimeTable, VacationPeriod


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model= Department
        fields='__all__'
        

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model= Course   
        fields='__all__'

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model= Subject
        fields='__all__'

class AnnuallySubjectSyllabusStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model= AnnuallySubjectSyllabusStatus
        fields='__all__'

class MonthlySubjectSyllabusStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model= MonthlySubjectSyllabusStatus
        fields='__all__'

class SyllabusStatusVerificationSerializer(serializers.ModelSerializer):
    class Meta:
        model= SyllabusStatusVerification
        fields='__all__'

class TimeTableSerializer(serializers.ModelSerializer):
    class Meta:
        model= TimeTable
        fields='__all__'

class VacationPeriodSerializer(serializers.ModelSerializer):
    class Meta:
        model= VacationPeriod
        fields='__all__'