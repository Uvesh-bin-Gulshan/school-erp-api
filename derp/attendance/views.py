from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .models import Attendance, FingerRecord
from .serializers import AttendanceSerializer, FingerRecordSerializer

class AttendanceView(viewsets.ViewSet):
    def list(self, request):
        queryset = Attendance.objects.all()
        serializer = AttendanceSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk):
        try:
            attendance = Attendance.objects.get(pk=pk)
        except Attendance.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = AttendanceSerializer(attendance)
        return Response(serializer.data)

    def create(self, request):
        serializer = AttendanceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk):
        try:
            attendance = Attendance.objects.get(pk=pk)
        except Attendance.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = AttendanceSerializer(attendance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            attendance = Attendance.objects.get(pk=pk)
        except Attendance.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        attendance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class FingerRecordView(viewsets.ViewSet):
    def list(self, request):
        queryset = FingerRecord.objects.all()
        serializer = FingerRecordSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk):
        try:
            finger_record = FingerRecord.objects.get(pk=pk)
        except FingerRecord.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = FingerRecordSerializer(finger_record)
        return Response(serializer.data)

    def create(self, request):
        serializer = FingerRecordSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk):
        try:
            finger_record = FingerRecord.objects.get(pk=pk)
        except FingerRecord.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = FingerRecordSerializer(finger_record, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            finger_record = FingerRecord.objects.get(pk=pk)
        except FingerRecord.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        finger_record.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
