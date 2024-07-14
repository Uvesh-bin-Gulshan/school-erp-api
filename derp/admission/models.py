from django.db import models
import uuid
from academic.models import Course, Department
from students.models import Grade
from django.db.models.signals import post_save
from django.dispatch import receiver

from django.dispatch import receiver

def shortuuid():
   return str(uuid.uuid4().hex)[:6]

from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

class Admission(models.Model):
    RESULT_STATUS = (
        ('pass', 'PASS'),
        ('fail', 'FAIL')
    )

    ADMISSION_STATUS = (
        ('approved', 'Approved'),
        ('pending', 'Pending'),
        ('left', 'Left'),
        ('graduated', 'Graduated')
    )

    id = models.AutoField(primary_key=True)
    admission_id=models.CharField(shortuuid,max_length=6,editable=False)
    student_name = models.CharField(max_length=200)
    guardian_name = models.CharField(max_length=40)
    profile_image = models.ImageField(
    upload_to='admission_images/',
    default='admission_images/default_profile.png',
    blank=True,
    null=True,
)   
    applied_for = models.ForeignKey(Grade,max_length=100,on_delete=models.PROTECT)
    date_of_birth = models.DateField()
    state = models.CharField(max_length=100)
    district = models.CharField(max_length=100)  # Changed from District to district
    locality = models.CharField(max_length=100)
    pincode = models.CharField(max_length=6)
    mobile_number = models.CharField(max_length=12)
    addhar_number = models.CharField(max_length=12, unique=True)
    previous_result_status = models.CharField(choices=RESULT_STATUS, default='pass', max_length=10)  # Changed default value
    admission_status = models.CharField(choices=ADMISSION_STATUS, default='pending', max_length=50)  # Changed default value
    previous_institution = models.CharField(max_length=200, null=False, blank=False)
    previous_education = models.CharField(max_length=200, null=False, blank=False)
    worldly_studies = models.CharField(max_length=200, null=False, blank=False)
    lc_given = models.BooleanField(default=False)
    donation = models.BooleanField(default=False)
    donation_amount = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    require_donation = models.BooleanField(default=False)
    created_at = models.DateField()
    updated_at = models.DateField()
    date_of_admission = models.DateField()  

    def __str__(self):
        return self.student_name
    
    class Meta:
        ordering = ['id']

class Student(models.Model):
         admission = models.OneToOneField(Admission,on_delete=models.CASCADE)
        

         class Meta:
           ordering = ['id']

    
    
@receiver(post_save, sender=Admission)
def create_student(sender, instance, created, **kwargs):
    if created and instance.admission_status == 'approved':
        Student.objects.create(basic_detail=instance)
    elif not created and instance.admission_status != 'approved':
        try:
            student = Student.objects.get(basic_detail=instance)
            student.delete()
        except Student.DoesNotExist:
            pass
