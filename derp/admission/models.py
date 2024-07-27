from django.db import models
import uuid
from academic.models import Course, Department

from django.db.models.signals import post_save
from django.dispatch import receiver

def shortuuid():
   return str(uuid.uuid4().hex)[:6]



class Admission(models.Model):

    id=models.CharField(shortuuid,max_length=6,editable=False)
    admission_id = models.CharField(primary_key=True, default=shortuuid, max_length=6)
    student_name = models.CharField(max_length=200)
    father_name = models.CharField(max_length=50)
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

    RESULT_STATUS = (
        ('pass', 'PASS'),
        ('fail', 'FAIL')
    )
    previous_result_status = models.CharField(choices=RESULT_STATUS, default='pass', max_length=10)  # Changed default value
    
    previous_institution = models.CharField(max_length=200, null=False, blank=False)
    previous_education = models.CharField(max_length=200, null=False, blank=False)
    school_education = models.CharField(max_length=200, null=False, blank=False)
    applied_for = models.CharField(max_length=200, null=False, blank=False)
    lc_given = models.BooleanField(default=False)

    pay_fees = models.BooleanField(default=False) 
    fees_amount = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    required_donation = models.BooleanField(default=False)

    ADMISSION_STATUS = (
        ('approved', 'Approved'),
        ('pending', 'Pending'),
        ('left', 'Left'),
    )
    admission_status = models.CharField(choices=ADMISSION_STATUS, default='pending', max_length=50)  # Changed default value 
    def __str__(self):
        return self.student_name
    
    class Meta:
        ordering = ['id']

class Student(models.Model):
    student_id = models.CharField(default=shortuuid, max_length=6, editable=False, primary_key=True)
    admission = models.OneToOneField(Admission,on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, null=False, blank=False, to_field='course_id')
    department = models.ForeignKey(Department, on_delete=models.CASCADE, null=False, blank=False, to_field='department_id')
    STUDENT_STATUS = (
        ('pursuing', 'Pursuing'),
        ('completed', 'Completed'),
        ('left', 'Left'),
    )
    student_status = models.CharField(choices=STUDENT_STATUS, default='pursuing', max_length=50)  # Changed default value 

    def __str__(self):
        return f"{self.student} - {self.student_status}"


@receiver(post_save, sender=Admission)
def create_student(sender, instance, created, **kwargs):
    if created and instance.admission_status == 'approved':
        Student.objects.create(admission=instance)
    elif not created and instance.admission_status != 'approved':
        try:
            student = Student.objects.get(admission=instance)
            student.delete()
        except Student.DoesNotExist:
            pass



class Alumni(models.Model):

    alumni_id = models.CharField(default=shortuuid, max_length=6, editable=False, primary_key=True)

    student= models.OneToOneField(Student,on_delete=models.CASCADE)

    occupation = models.CharField(max_length=200) 
    work_place=models.CharField(max_length=200) 
    residence = models.TextField(max_length=200)

    def __str__(self):
        return f"{self.alumni_student} - {self.alumni_status}"
    
@receiver(post_save, sender=Alumni)
def create_alumni(sender, instance, created, **kwargs):
    if created and instance.student_status == 'completed':
        Alumni.objects.create(alumni=instance)
    elif not created and instance.student_status != 'completed':
        try:
            alumni_student = Alumni.objects.get(alumni=instance)
            alumni_student.delete()
        except Alumni.DoesNotExist:
            pass



