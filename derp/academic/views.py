from django.shortcuts import render
from .models import Department
from .serializers import DepartmentSerializer
from rest_framework import viewsets
from rest_framework.response import Response
from userauth.permissions import isPrincipal,isTeacher,isTechSupport

class DepartmentView(viewsets.ViewSet):
    def list(self,request):
        queryset=Department.objects.all()
        serializer=DepartmentSerializer(queryset,many=True)
        return Response(serializer.data)
    
    def retrive(self ,request,pk):
        department=Department.objects.get(pk=pk)
        serializer=DepartmentSerializer(department)
        return Response(serializer.data)
    
    def create(self,request):
        serializer=DepartmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        return Response(serializer.errors,status=400)
    
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