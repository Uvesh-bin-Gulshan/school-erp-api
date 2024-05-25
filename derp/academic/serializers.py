from rest_framework import serializers
from .models import Department,Course,AnnuallySubjectSyllabusStatus,Subject,MonthlySubjectSyllabusStatus,SyllabusStatusVerification


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model= Department
        fields=['department_id','department_code','name']
        

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model= Department
        fields=['course_id','course_code','name','department_id','effective_date']

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model= Department
        fields=['subject_id','subject_code','name','syllabus_count','description','course_id']

class AnnuallySubjectSyllabusStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model= Department
        fields=['annual_status_id','subject_code','teacher','syllabus_status','yearly_summary']

class MonthlySubjectSyllabusStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model= Department
        fields=['month_status_id','annual_status','month','status','monthly_summary']

class SyllabusStatusVerificationSerializer(serializers.ModelSerializer):
    class Meta:
        model= Department
        fields=['status_verification_id','monthly_Syllabus_approval','feedback','is_approved','approved_date']