from django.db import models
from academic.models import Course

# Create your models here.


class TeacherProfile(models.Model):
    id = models.AutoField(primary_key=True)
    teacher_id=models.CharField(shortuuid,max_length=6,editable=False)

    name = models.CharField(max_length=100)
    address = models.TextField()
    graduated_from = models.CharField(max_length=200)
    subject = models.CharField(max_length=100)
    grade_incharge = models.ForeignKey(Course,on_delete=models.PROTECT,null=True,blank=True)
    academic_details = models.TextField()
    joining_date = models.DateField()

    def __str__(self):
        return self.name

