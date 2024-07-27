from rest_framework import serializers
from .models import Admission, Student, Alumni


class AdmissionSerializer(serializers.ModelSerializer):
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


