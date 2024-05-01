from django.db import models
import uuid
# from students.models import StudentDetail
from django.db.models.signals import post_save
from django.dispatch import receiver

from django.dispatch import receiver

def shortuuid():
   return str(uuid.uuid4().hex)[:6]
class Admission(models.Model):
      RESULT_STATUS=(('pass','PASS'),
                     ('fail','FAIL'))
    
      ADMISSION_STATUS=((
           ('approved','Approved'),
           ('pending','Pending'),
           ('left','Left'),
           ('graduated','Graduated')
      ))
      id = models.AutoField(primary_key=True)
      admission_id=models.CharField(shortuuid,max_length=6,editable=False)
      student_name=models.CharField(max_length=200)
      guardian_name=models.CharField(max_length=40)
      profile_image=models.ImageField(upload_to='media',blank=True,null=True)
      applied_for = models.CharField(max_length=100)
      date_of_birth = models.DateField()
      state=models.CharField(max_length=100)
    
      District=models.CharField(max_length=100)
      locality=models.CharField(max_length=100)
      pincode=models.CharField(max_length=6)
      mobile_number=models.CharField(max_length=12)
      addhar_number=models.CharField(max_length=12,unique=True)
      previous_result_status=models.CharField(choices=RESULT_STATUS,default='1',max_length=10)
      admission_status=models.CharField(choices=ADMISSION_STATUS,default='1',max_length=50)
      previous_institution=models.CharField(max_length=200,null=False,blank=False)
      previous_education=models.CharField(max_length=200,null=False,blank=False)
      worldly_studies=models.CharField(max_length=200,null=False,blank=False)
      lc_given=models.BooleanField(default=False)
      donation=models.BooleanField(default=False)
      donation_amount=models.DecimalField(max_digits=10,decimal_places=2,null=True,blank=True)

      
      previous_education = models.CharField(max_length=100, null=True, blank=True)
      school_studies = models.CharField(max_length=100)
      lc_given = models.BooleanField(default=False)
      donation = models.BooleanField(default=False)
      donation_amount = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
      require_donation=models.BooleanField(default=False)        
      created_at=models.DateField()
      updated_at=models.DateField()
      date_of_admisson=models.DateField()
     
      def save(self, *args, **kwargs):
        if self.admission_status == 'approved':
            super(Admission, self).save(*args, **kwargs)  # Call the original save method to save the Admission instance

            # Create associated Student instance
            student = Student.objects.create(admission=self)
            student.save()
        else:
            # If admission status is not approved, don't save anything
            return
        
        def __str__(self):
          return self.student_name

class Student(models.Model):
    id = models.AutoField(primary_key=True)
    admission = models.OneToOneField('Admission', on_delete=models.CASCADE, related_name='student')
    
    # Add other fields related to student information

    def __str__(self):
        return self.admission.student_name