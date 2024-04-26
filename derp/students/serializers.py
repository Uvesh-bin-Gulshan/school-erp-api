from rest_framework import serializers
from .models import StudentProfile
from .models import TeacherProfile
from .models import SoftwareSupport

class StudentProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentProfile
        fields = ['id', 'name', 'class_name', 'date_of_birth','address','adhar_no','date_of_admission','photo']



class TeacherProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeacherProfile
        fields = ['id', 'name', 'address', 'graduated_from', 'subject', 'grade', 'academic_details', 'joining_date']        

class SoftwareSupportSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeacherProfile
        fields = ['id', 'name', 'role', 'password'] 
               