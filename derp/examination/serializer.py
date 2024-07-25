from rest_framework import serializers
from .models import ExamTimeTable
from .serializers import ExamTypeSerializer, SubjectSerializer

class ExamTimeTableSerializer(serializers.ModelSerializer):
    exam_type = ExamTypeSerializer(read_only=True)
    subject = SubjectSerializer(read_only=True)

    class Meta:
        model = ExamTimeTable
        fields = '__all__'


class MarksheetSerializer(serializers.ModelSerializer):
    exam_detail = ExamTimeTableSerializer(read_only=True) #why read only
    student = StudentSerializer(read_only=True)

    class Meta:
        model = Marksheet
        fields = '__all__'

        
