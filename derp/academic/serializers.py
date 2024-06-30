from rest_framework import serializers
from .models import Department,Course,AnnuallySubjectSyllabusStatus,Subject,MonthlySubjectSyllabusStatus,SyllabusStatusVerification


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model= Department
        fields=['department_id','name']
        

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model= Course   
        fields=['course_id','name','department_id','effective_date']

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model= Subject
        fields=['subject_id','name','syllabus_count','description','course_id']

class AnnuallySubjectSyllabusStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model= AnnuallySubjectSyllabusStatus
        fields=['annual_status_id','subject_code','teacher','syllabus_status','yearly_summary']

class MonthlySubjectSyllabusStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model= MonthlySubjectSyllabusStatus
        fields=['month_status_id','annual_status','month','status','monthly_summary']

class SyllabusStatusVerificationSerializer(serializers.ModelSerializer):
    class Meta:
        model= SyllabusStatusVerification
        fields=['status_verification_id','monthly_Syllabus_approval','feedback','is_approved','approved_date']