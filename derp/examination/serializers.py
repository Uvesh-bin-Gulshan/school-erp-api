from rest_framework import serializers
from .models import ExamType, ExamTimeTable, MarkSheet, ResultSheet

class ExamTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExamType
        fields = '__all__'

class ExamTimeTableSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExamTimeTable
        fields = '__all__'

class MarkSheetSerializer(serializers.ModelSerializer):
    class Meta:
        model = MarkSheet
        fields = '__all__'

class ResultSheetSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResultSheet
        fields = '__all__'
