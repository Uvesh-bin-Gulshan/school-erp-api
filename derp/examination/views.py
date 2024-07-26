from django.shortcuts import render,get_object_or_404
from admission.models import Student
from .models import ExamType, ExamTimeTable, Marksheet, ResultSheet
from .serializers import ExamTypeSerializer, ExamTimeTableSerializer, MarksheetSerializer, ResultSheetSerializer
from rest_framework.response import Response
from django.http import JsonResponse
from django.db.models import Sum, F



def generate_result_sheet(student_id):
    student=get_object_or_404(Student,student_id=student_id)
    marksheets=Marksheet.objects.filter(student=student)

    result_sheet={
        'student_id':student.student_id,
        'student_name':student.name,
        'exams':[]
    }
    total_marks_obtained=0
    for marksheet in marksheets:
        exam_detail=marksheets.exam_detail
        result_sheet['exams'].append({
            'exam_type': exam_detail.exam_type.name,
            'subject': exam_detail.subject.name,
            'total_marks': exam_detail.total_marks,
            'passing_marks': exam_detail.passing_marks,
            'marks_obtained': marksheet.marks_obtained,
            'result': marksheet.result,
            'exam_time': exam_detail.time,
            'effective_date': exam_detail.exam_type.effective_date
            
         })
        total_marks_obtained+=marksheet.marks_obtained
   
    result_sheet['total_marks_obtained']=total_marks_obtained


    #save result sheet to database

    result_sheet_instance,created=ResultSheet.objects.update_or_create(
        student=student,
        defaults={'result_data':result_sheet,'total_marks_obtained':total_marks_obtained}
    )
    return result_sheet

def result_sheet_view(request,student_id):
    result_sheet=generate_result_sheet(student_id)
    return JsonResponse(result_sheet)

def assign_rank():
    result_sheets=ResultSheet.objects.all().order_by('-total_marks')

    for rank,result_sheet in enumerate(result_sheets,start=1):
        result_sheet.rank=rank
        result_sheet.save

        


class ExamTypeView(viewsets.ViewSet):
    def list(self, request):
        queryset = ExamType.objects.all()
        serializer = ExamTypeSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = ExamTypeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def retrieve(self, request, pk=None):
        try:
            exam_type = ExamType.objects.get(pk=pk)
        except ExamType.DoesNotExist:
            return Response(status=404)
        serializer = ExamTypeSerializer(exam_type)
        return Response(serializer.data)

    def update(self, request, pk=None):
        try:
            exam_type = ExamType.objects.get(pk=pk)
        except ExamType.DoesNotExist:
            return Response(status=404)
        serializer = ExamTypeSerializer(exam_type, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=400)

    def delete(self, request, pk=None):
        try:
            exam_type = ExamType.objects.get(pk=pk)
        except ExamType.DoesNotExist:
            return Response(status=404)
        exam_type.delete()
        return Response(status=204)

class ExamTimeTableView(viewsets.ViewSet):
    def list(self, request):
        queryset = ExamTimeTable.objects.all()
        serializer = ExamTimeTableSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = ExamTimeTableSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def retrieve(self, request, pk=None):
        try:
            exam_time_table = ExamTimeTable.objects.get(pk=pk)
        except ExamTimeTable.DoesNotExist:
            return Response(status=404)
        serializer = ExamTimeTableSerializer(exam_time_table)
        return Response(serializer.data)

    def update(self, request, pk=None):
        try:
            exam_time_table = ExamTimeTable.objects.get(pk=pk)
        except ExamTimeTable.DoesNotExist:
            return Response(status=404)
        serializer = ExamTimeTableSerializer(exam_time_table, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=400)

    def delete(self, request, pk=None):
        try:
            exam_time_table = ExamTimeTable.objects.get(pk=pk)
        except ExamTimeTable.DoesNotExist:
            return Response(status=404)
        exam_time_table.delete()
        return Response(status=204)

class MarksheetView(viewsets.ViewSet):
    def list(self, request):
        queryset = Marksheet.objects.all()
        serializer = MarksheetSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = MarksheetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def retrieve(self, request, pk=None):
        try:
            marksheet = Marksheet.objects.get(pk=pk)
        except Marksheet.DoesNotExist:
            return Response(status=404)
        serializer = MarksheetSerializer(marksheet)
        return Response(serializer.data)

    def update(self, request, pk=None):
        try:
            marksheet = Marksheet.objects.get(pk=pk)
        except Marksheet.DoesNotExist:
            return Response(status=404)
        serializer = MarksheetSerializer(marksheet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=400)

    def delete(self, request, pk=None):
        try:
            marksheet = Marksheet.objects.get(pk=pk)
        except Marksheet.DoesNotExist:
            return Response(status=404)
        marksheet.delete()
        return Response(status=204)

class ResultSheetView(viewsets.ViewSet):
    def list(self, request):
        queryset = ResultSheet.objects.all()
        serializer = ResultSheetSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = ResultSheetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def retrieve(self, request, pk=None):
        try:
            result_sheet = ResultSheet.objects.get(pk=pk)
        except ResultSheet.DoesNotExist:
            return Response(status=404)
        serializer = ResultSheetSerializer(result_sheet)
        return Response(serializer.data)

    def update(self, request, pk=None):
        try:
            result_sheet = ResultSheet.objects.get(pk=pk)
        except ResultSheet.DoesNotExist:
            return Response(status=404)
        serializer = ResultSheetSerializer(result_sheet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=400)

    def delete(self, request, pk=None):
        try:
            result_sheet = ResultSheet.objects.get(pk=pk)
        except ResultSheet.DoesNotExist:
            return Response(status=404)
        result_sheet.delete()
        return Response(status=204)
