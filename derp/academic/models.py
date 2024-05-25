from typing import Any
from django.db import models
from .utils import generate_custom_id
import uuid

def shortuuid():
   return str(uuid.uuid4().hex)[:6]
def course_custom_id():
    return generate_custom_id(Subject,prefix='course')
def subject_custom_id():
    return generate_custom_id(Subject,prefix='sub')
def department_custom_id():
    return generate_custom_id(Subject,prefix='dept')

class Department(models.Model):
        department_id=models.CharField(default=shortuuid,max_length=6,editable=False)
        department_code=models.CharField(primary_key=True,editable=False,max_length=8,default=department_custom_id,unique=True)
        name=models.CharField(max_length=70)


class Course(models.Model):
        course_id=models.CharField(default=shortuuid,max_length=6,editable=False)
        course_code=models.CharField(primary_key=True,editable=False,max_length=8,default=course_custom_id,unique=True)
        name=models.CharField(max_length=70)
        department_id=models.ForeignKey(Department,on_delete=models.PROTECT,null=False,blank=False)
        effective_date=models.DateField()
        

class Subject(models.Model):
        subject_id=models.CharField(default=shortuuid,max_length=6,editable=False)
        subject_code=models.CharField(primary_key=True,editable=False,max_length=8,default=subject_custom_id,unique=True)
        name=models.CharField(max_length=70)
        syllabus_count=models.IntegerField(default=0)
        description=models.TextField(max_length=200,null=True,blank=True)
        course=models.ForeignKey(Course,on_delete=models.PROTECT,null=False,blank=False,default=1)


class AnnuallySubjectSyllabusStatus(models.Model):
      annual_status_id=models.CharField(default=shortuuid,max_length=6,editable=False,primary_key=True)
      subject_code=models.ForeignKey(Subject,on_delete=models.PROTECT)
      teacher=models.CharField(max_length=20)
      yearly_status=models.IntegerField()
      yearly_summary=models.CharField(max_length=300)

            
class MonthlySubjectSyllabusStatus(models.Model):
      month_status_id=models.CharField(default=shortuuid,max_length=6,editable=False,primary_key=True)
      annual_status=models.ForeignKey(AnnuallySubjectSyllabusStatus,on_delete=models.PROTECT)
      month=models.DateField()
      status=models.IntegerField()
      monthly_summary=models.CharField(max_length=300)


class SyllabusStatusVerification(models.Model):
        status_verification_id=models.CharField(default=shortuuid,max_length=6,editable=False,primary_key=True)
        monthly_Syllabus_approval=models.ForeignKey(MonthlySubjectSyllabusStatus,on_delete=models.PROTECT)
        feedback=models.TextField(max_length=300,null=True,blank=True)
        is_approved=models.BooleanField(default=False)
        approved_date=models.DateTimeField()


      





