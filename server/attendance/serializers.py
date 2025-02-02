from rest_framework import serializers
from .models import Attendance, FingerRecord

class AttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attendance
        fields = '__all__'

class FingerRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = FingerRecord
        fields = '__all__'
