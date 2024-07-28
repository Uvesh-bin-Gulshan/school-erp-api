from django.shortcuts import render
from .models import Admission, Student, Alumni
from .serializers import AdmissionSerializer, StudentSerializer, AlumniSerializer
from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response


class AdmissionView(viewsets.ViewSet):
    def list(self, request):
        queryset = Admission.objects.all()
        serializer = AdmissionSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk):
        try:
            admission = Admission.objects.get(pk=pk)
        except Admission.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = AdmissionSerializer(admission)
        return Response(serializer.data)

    def create(self, request):
        serializer = AdmissionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk):
        try:
            admission = Admission.objects.get(pk=pk)
        except Admission.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = AdmissionSerializer(admission, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            admission = Admission.objects.get(pk=pk)
        except Admission.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

class StudentView(viewsets.ViewSet):
    def list(self, request):
        queryset = Student.objects.all()
        serializer = StudentSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk):
        try:
            student = Student.objects.get(pk=pk)
        except Student.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = StudentSerializer(student)
        return Response(serializer.data)

    def create(self, request):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk):
        try:
            student = Student.objects.get(pk=pk)
        except Student.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = StudentSerializer(student, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            student = Student.objects.get(pk=pk)
        except Student.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        student.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class AlumniView(viewsets.ViewSet):
    def list(self, request):
        queryset = Alumni.objects.all()
        serializer = AlumniSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk):
        try:
            alumni = Alumni.objects.get(pk=pk)
        except Alumni.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = AlumniSerializer(alumni)
        return Response(serializer.data)

    def create(self, request):
        serializer = AlumniSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk):
        try:
            alumni = Alumni.objects.get(pk=pk)
        except Alumni.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = AlumniSerializer(alumni, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            alumni = Alumni.objects.get(pk=pk)
        except Alumni.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        alumni.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)