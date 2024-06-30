from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import viewsets
from rest_framework.response import Response
from userauth.permissions import isPrincipal,isTeacher,isTechSupport

# Department View
class DepartmentView(viewsets.ViewSet):
    def list(self,request):
        queryset=Department.objects.all()
        serializer=DepartmentSerializer(queryset,many=True)
        return Response(serializer.data)
    
    def create(self,request):
        serializer=DepartmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        return Response(serializer.errors,status=400)
    
    def retrieve(self, request, pk=None):
        try:
            department = Department.objects.get(pk=pk)
        except Department.DoesNotExist:
            return Response(status=404)
        serializer = DepartmentSerializer(department)
        return Response(serializer.data)
    
    def update(self,request,pk):
        department=Department.objects.get(pk=pk)
        serializer=DepartmentSerializer(department,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        return Response(serializer.errors,status=400)
    
    def delete(self,request,pk):
        department=Department.objects.get(pk=pk)
        department.delete()
        return Response(status=204)
    
# Subject View
class SubjectView(viewsets.ViewSet):
    def list(self,request):
        queryset=Subject.objects.all()
        serializer=SubjectSerializer(queryset,many=True)
        return Response(serializer.data)
    
    def create(self,request):
        serializer=SubjectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        return Response(serializer.errors,status=400)
    
    def retrieve(self, request, pk=None):
        try:
            subject = Subject.objects.get(pk=pk)
        except Subject.DoesNotExist:
            return Response(status=404)
        serializer = SubjectSerializer(subject)
        return Response(serializer.data)
    
    def update(self,request,pk):
        subject=Subject.objects.get(pk=pk)
        serializer=SubjectSerializer(subject,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        return Response(serializer.errors,status=400)
    
    def delete(self,request,pk):
        subject=Subject.objects.get(pk=pk)
        subject.delete()
        return Response(status=204)
    
# Course View
class CourseView(viewsets.ViewSet):
    def list(self,request):
        queryset=Course.objects.all()
        serializer=CourseSerializer(queryset,many=True)
        return Response(serializer.data)
    
    def create(self,request):
        serializer=CourseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        return Response(serializer.errors,status=400)
    
    def retrieve(self, request, pk=None):
        try:
            course = Course.objects.get(pk=pk)
        except Course.DoesNotExist:
            return Response(status=404)
        serializer = CourseSerializer(course)
        return Response(serializer.data)
    
    def update(self,request,pk):
        course=Course.objects.get(pk=pk)
        serializer=CourseSerializer(course,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        return Response(serializer.errors,status=400)
    
    def delete(self,request,pk):
        course=Course.objects.get(pk=pk)
        course.delete()
        return Response(status=204)
    
# AnnuallySubjectSyllabusStatus View
class AnnuallySubjectSyllabusStatusView(viewsets.ViewSet):
    def list(self,request):
        queryset=AnnuallySubjectSyllabusStatus.objects.all()
        serializer=AnnuallySubjectSyllabusStatusSerializer(queryset,many=True)
        return Response(serializer.data)
    
    def create(self,request):
        serializer=AnnuallySubjectSyllabusStatusSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        return Response(serializer.errors,status=400)
    
    def retrieve(self, request, pk=None):
        try:
            status = AnnuallySubjectSyllabusStatus.objects.get(pk=pk)
        except AnnuallySubjectSyllabusStatus.DoesNotExist:
            return Response(status=404)
        serializer = AnnuallySubjectSyllabusStatusSerializer(status)
        return Response(serializer.data)
    
    def update(self,request,pk):
        status=AnnuallySubjectSyllabusStatus.objects.get(pk=pk)
        serializer=AnnuallySubjectSyllabusStatus(status,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        return Response(serializer.errors,status=400)
    
    def delete(self,request,pk):
        status=AnnuallySubjectSyllabusStatus.objects.get(pk=pk)
        status.delete()
        return Response(status=204)
    
# MonthlySubjectSyllabusStatus View
class MonthlySubjectSyllabusStatusView(viewsets.ViewSet):
    def list(self,request):
        queryset=MonthlySubjectSyllabusStatus.objects.all()
        serializer=MonthlySubjectSyllabusStatusSerializer(queryset,many=True)
        return Response(serializer.data)
    
    def create(self,request):
        serializer=MonthlySubjectSyllabusStatusSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        return Response(serializer.errors,status=400)
    
    def retrieve(self, request, pk=None):
        try:
            status = MonthlySubjectSyllabusStatus.objects.get(pk=pk)
        except MonthlySubjectSyllabusStatus.DoesNotExist:
            return Response(status=404)
        serializer = MonthlySubjectSyllabusStatusSerializer(status)
        return Response(serializer.data)
    
    def update(self,request,pk):
        status=MonthlySubjectSyllabusStatus.objects.get(pk=pk)
        serializer=MonthlySubjectSyllabusStatus(status,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        return Response(serializer.errors,status=400)
    
    def delete(self,request,pk):
        status=MonthlySubjectSyllabusStatus.objects.get(pk=pk)
        status.delete()
        return Response(status=204)
    
# SyllabusStatusVerification View
class SyllabusStatusVerificationView(viewsets.ViewSet):
    def list(self,request):
        queryset=SyllabusStatusVerification.objects.all()
        serializer=SyllabusStatusVerificationSerializer(queryset,many=True)
        return Response(serializer.data)
    
    def create(self,request):
        serializer=SyllabusStatusVerificationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        return Response(serializer.errors,status=400)
    
    def retrieve(self, request, pk=None):
        try:
            verification = SyllabusStatusVerification.objects.get(pk=pk)
        except SyllabusStatusVerification.DoesNotExist:
            return Response(status=404)
        serializer = SyllabusStatusVerificationSerializer(verification)
        return Response(serializer.data)
    
    def update(self,request,pk):
        status=SyllabusStatusVerification.objects.get(pk=pk)
        serializer=SyllabusStatusVerification(status,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        return Response(serializer.errors,status=400)
    
    def delete(self,request,pk):
        status=SyllabusStatusVerification.objects.get(pk=pk)
        status.delete()
        return Response(status=204)
   
