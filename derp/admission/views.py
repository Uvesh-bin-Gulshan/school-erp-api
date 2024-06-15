from django.shortcuts import render
from .models import Admission
from .serializers import AdmissionSerializer
from rest_framework import viewsets
from rest_framework.response import Response
class AdmissionView(viewsets.ViewSet):
    def list(self,request):
        queryset=Admission.objects.all()
        serializer=AdmissionSerializer(queryset,many=True)
        return Response(serializer.data)
    
    def retrive(self ,request,pk):
        department=Admission.objects.get(pk=pk)
        serializer=AdmissionSerializer(department)
        return Response(serializer.data)
    
    def create(self,request):
        serializer=AdmissionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        return Response(serializer.errors,status=400)
    
    def update(self,request,pk):
        department=Admission.objects.get(pk=pk)
        serializer=AdmissionSerializer(department,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        return Response(serializer.errors,status=400)
    
    def delete(self,request,pk):
        department=Admission.objects.get(pk=pk)
        department.delete()
        return Response(status=204)