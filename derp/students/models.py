from django.db import models
import uuid

def shortuuid():
   return str(uuid.uuid4().hex)[:6]


class StudentProfile(models.Model):
    id = models.AutoField(unique=True,primary_key=True)
    student_id=models.CharField(shortuuid,max_length=6,editable=False)
    name = models.CharField(max_length=200)
    class_name = models.CharField(max_length=100)
    date_of_birth = models.DateField()
    address = models.TextField()
    adhar_no = models.CharField(max_length=12, unique=True)
    date_of_admission = models.CharField(max_length=20)
    photo = models.ImageField(upload_to='profile_photos', null=True, blank=True)

    def __str__(self):
        return self.name
    
class StudentDetail(models.Model):
    id = models.AutoField(unique=True,primary_key=True)

    student_detail_id=models.CharField(shortuuid,max_length=6)




class TeacherProfile(models.Model):
    id = models.AutoField(primary_key=True,unique=True,)
    teacher_id=models.CharField(shortuuid,max_length=6,editable=False)

    name = models.CharField(max_length=100)
    address = models.TextField()
    graduated_from = models.CharField(max_length=200)
    subject = models.CharField(max_length=100)
    grade_incharge = models.ForeignKey('Grade',on_delete=models.PROTECT,null=True,blank=True)
    academic_details = models.TextField()
    joining_date = models.DateField()

    def __str__(self):
        return self.name

class Grade(models.Model):
    id=models.AutoField(unique=True,primary_key=True)
    grade_id=models.CharField(shortuuid,unique=True,max_length=6,editable=False)
    name=models.CharField(max_length=25)



    def __str__(self):
        return self.name