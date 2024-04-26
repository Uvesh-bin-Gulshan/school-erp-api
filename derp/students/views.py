from django.shortcuts import render
from .models import Employee
from .serializers import EmployeeSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from rest_framework.views import APIView
# from rest_framework.renderers import TemplateHTMLRenderer

# class ListEmployeeData(APIView):
    

#     def get(self, request):
#         employees = Employee.objects.all()
#         serializer = EmployeeSerializer(employees, many=True)
#         return Response({'employees': serializer.data})

# class ListEmployeeData(generics.ListAPIView):
#      queryset=Employee.objects.all()
#      serializer_class=EmployeeSerializer     
         

# class ListEmployeeData(APIView):
#      def get(self,request):
#           queryset=Employee.objects.all()
#           serializer=EmployeeSerializer(queryset,many=True)
#           return (serializer)

class ListEmployeeData(APIView):
    def get(self, request):
        employee = Employee.objects.all()
        serializer = EmployeeSerializer(employee, many=True)
        return Response(serializer.data)
 


