from typing import Any
from django.db import models
from .utils import generate_custom_id
import uuid

def shortuuid():
    return str(uuid.uuid4().hex)[:6]

def course_custom_id():
    return generate_custom_id(Course, prefix='course')

def subject_custom_id():
    return generate_custom_id(Subject, prefix='sub')

def department_custom_id():
    return generate_custom_id(Department, prefix='dept')

class Department(models.Model):
    department_id = models.CharField(primary_key=True, default=shortuuid, max_length=6, editable=False)
    name = models.CharField(max_length=70)

class Course(models.Model):
    course_id = models.CharField(primary_key=True, default=shortuuid, max_length=6, editable=False)
    name = models.CharField(max_length=70)
    department = models.ForeignKey(Department, on_delete=models.CASCADE, null=False, blank=False, to_field='department_id')
    effective_date = models.DateField()

class SyllabusType(models.Model):
    type_id = models.CharField(default=shortuuid, max_length=6, editable=False, primary_key=True)
    name=models.CharField(max_length=50)

class Subject(models.Model):
    subject_id = models.CharField(primary_key=True, default=shortuuid, max_length=6, editable=False)
    name = models.CharField(max_length=70)
    syllabus_count = models.IntegerField(default=0)
    syllabus_type=models.ForeignKey(SyllabusType,on_delete=models.CASCADE, to_field='type_id')
    description = models.TextField(max_length=200, null=True, blank=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, null=False, blank=False, to_field='course_id')
class AnnuallySubjectSyllabusStatus(models.Model):
    annual_status_id = models.CharField(default=shortuuid, max_length=6, editable=False, primary_key=True)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, to_field='subject_id')

    teacher = models.CharField(max_length=20)
    yearly_status = models.IntegerField()
    yearly_summary = models.CharField(max_length=300)


    def update_yearly_status(self):
        monthly_statuses=self.monthly_statuses.all()
        self.yearly_status = sum(monthly_status.count for monthly_status in monthly_statuses)
        self.save()


class MonthlySubjectSyllabusStatus(models.Model):
    month_status_id = models.CharField(default=shortuuid, max_length=6, editable=False, primary_key=True)
    month = models.DateField()
    annual_status = models.ForeignKey(AnnuallySubjectSyllabusStatus, on_delete=models.CASCADE, to_field='annual_status_id',related_name='monthly_statuses')
    target_type = models.ForeignKey(SyllabusType, on_delete=models.CASCADE, to_field='type_id')  # Added foreign key to SyllabusType

    count=models.IntegerField(default=0)
    monthly_summary = models.CharField(max_length=300)

    def save(self,*args,**kwargs):
        super().save(*args,**kwargs)
        self.annual_status.update_yearly_status()

    def delete(self,*args,**kwargs):
        annual_status=self.annual_status
        super().delete(*args,**kwargs)
        annual_status.update_yearly_status()


    


class SyllabusStatusVerification(models.Model):
    status_verification_id = models.CharField(default=shortuuid, max_length=6, editable=False, primary_key=True)
    monthly_syllabus_approval = models.ForeignKey(MonthlySubjectSyllabusStatus, on_delete=models.CASCADE, to_field='month_status_id')
    feedback = models.TextField(max_length=300, null=True, blank=True)
    is_approved = models.BooleanField(default=False)
    approved_date = models.DateTimeField()





# Signals to handle update on create and delete
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver

@receiver(post_save, sender=MonthlySubjectSyllabusStatus)
def update_annual_status_on_save(sender, instance, **kwargs):
    instance.annual_status.update_yearly_status()

@receiver(post_delete, sender=MonthlySubjectSyllabusStatus)
def update_annual_status_on_delete(sender, instance, **kwargs):
    instance.annual_status.update_yearly_status()