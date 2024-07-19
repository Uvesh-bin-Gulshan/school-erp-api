from django.db import models
import uuid
from django.db.models.signals import post_save
from django.dispatch import receiver
from academic.models import *

def shortuuid():
   return str(uuid.uuid4().hex)[:6]

from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

class PersonalDetails(models.Model):
    personal_id = models.AutoField(primary_key=True)
    student_name = models.CharField(max_length=200)
    father_name = models.CharField(max_length=50)
    guardian_name = models.CharField(max_length=50)
    date_of_birth = models.DateField()
    profile_image = models.ImageField(
    upload_to='admission_images/',
    default='admission_images/default_profile.png',
    blank=True,
    null=True,
    ) 
    state = models.CharField(max_length=100)
    district = models.CharField(max_length=100)  # Changed from District to district
    locality = models.CharField(max_length=100)
    pincode = models.CharField(max_length=6)
    mobile_number = models.CharField(max_length=12)
    aadhar_number = models.CharField(max_length=12, unique=True)
    created_at = models.DateField()
    updated_at = models.DateField()
    date_of_admission = models.DateField()

    def __str__(self):
        return self.student_name

class AcademicDetails(models.Model):
    academic_id = models.CharField(primary_key=True, default=shortuuid, max_length=6)
    RESULT_STATUS = (
        ('pass', 'PASS'),
        ('fail', 'FAIL')
    )
    previous_result_status = models.CharField(choices=RESULT_STATUS, default='pass', max_length=10)  # Changed default value
    
    previous_institution = models.CharField(max_length=200, null=False, blank=False)
    previous_education = models.CharField(max_length=200, null=False, blank=False)
    school_education = models.CharField(max_length=200, null=False, blank=False)
    applied_for = models.ForeignKey(Course,max_length=100,on_delete=models.CASCADE)
    lc_given = models.BooleanField(default=False)

    def __str__(self):
        return self.applied_for

class OtherDetails(models.Model):
    other_id = models.CharField(primary_key=True, default=shortuuid, max_length=6)
    pay_fees = models.BooleanField(default=False) 
    fees_amount = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    required_donation = models.BooleanField(default=False)


class AdmissionMaster(models.Model):
    admission_id = models.CharField(primary_key=True, default=shortuuid, max_length=6)
    ADMISSION_STATUS = (
        ('approved', 'Approved'),
        ('pending', 'Pending'),
        ('left', 'Left'),
    )
    admission_status = models.CharField(choices=ADMISSION_STATUS, default='pending', max_length=50)  # Changed default value 
    personal_details = models.ForeignKey(PersonalDetails, to_field='personal_id', on_delete=models.CASCADE, null=False, editable=False)
    academic_details = models.ForeignKey(AcademicDetails, to_field='academic_id', on_delete=models.CASCADE, null=False, editable=False)
    other_details = models.ForeignKey(OtherDetails, to_field='other_id', on_delete=models.CASCADE, null=False, editable=False)

    def __str__(self):
        return self.admission_status

