import uuid
from django.db import models
from academic.models import Subject
from admission.models import Student

def shortuuid():
    return str(uuid.uuid4().hex)[:6]
class ExamType(models.Model):
        exam_type_id = models.CharField(default=shortuuid, max_length=6, editable=False, primary_key=True)
        name = models.CharField(max_length=20)
        effective_date = models.DateField()
class ExamTimeTable(models.Model):
        exam_time_table_id = models.CharField(default=shortuuid, max_length=6, editable=False, primary_key=True)
        exam_type=models.ForeignKey(ExamType, on_delete=models.CASCADE, to_field='subject_id')
        subject = models.ForeignKey(Subject, on_delete=models.CASCADE, to_field='subject_id')
        total_marks=models.PositiveIntegerField()
        passing_marks=models.PositiveIntegerField()
        time=models.TimeField()

class Marksheet(models.Model):
         marksheet_id = models.CharField(default=shortuuid, max_length=6, editable=False, primary_key=True)
         exam_detail=models.ForeignKey(ExamTimeTable, on_delete=models.CASCADE, to_field='subject_id')
         student=models.ForeignKey(Student, on_delete=models.CASCADE, to_field='subject_id')
         marks_obtained=models.PositiveIntegerField()
         result=models.CharField(max_length=20,editable=False)


         def save(self,*args,**kwargs):
                if self.marks_obtained>=self.exam_detail.passing_marks:
                       self.result='Pass'
                else:
                    self.result='Fail'
                super().save(*args,**kwargs)

class ResultSheet(models.Model):
    result_sheet_id = models.CharField(default=shortuuid, max_length=6, editable=False, primary_key=True)
    student=models.ForeignKey(Student, on_delete=models.CASCADE, to_field='subject_id')
    result_data=models.JSONField() 
    total_marks_obtained = models.PositiveIntegerField(default=0)
    rank = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)




     