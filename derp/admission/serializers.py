from rest_framework import serializers
from .models import Admission, Student, Alumni


class AdmissionSerializer(serializers.ModelSerializer):
    date_of_birth = serializers.DateField(format="%Y-%m-%d")
    created_at = serializers.DateField(format="%Y-%m-%d")
    updated_at = serializers.DateField(format="%Y-%m-%d")
    date_of_admission = serializers.DateField(format="%Y-%m-%d")
    class Meta:
        model= Admission
        fields='__all__'

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model= Student
        fields='__all__'


class AlumniSerializer(serializers.ModelSerializer):
    class Meta:
        model= Alumni
        fields='__all__'


