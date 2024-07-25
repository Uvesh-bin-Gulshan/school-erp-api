from django.shortcuts import render,get_object_or_404
from admission.models import Student
from .models import *
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

        


