from rest_framework import serializers
from .models import Admission, Student, Alumini


class AdmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model= Admission
        fields='__all__'

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model= Student
        fields='__all__'


class AluminiSerializer(serializers.ModelSerializer):
    class Meta:
        model= Alumini
        fields='__all__'


