from django.db import models
from academic.models import TimeTable
from admission.models import Student

def shortuuid():
    return str(uuid.uuid4().hex)[:6]
class Attendance(models.Model):
    attendance_id=models.CharField(default=shortuuid,max_length=6,editable=False,primary_key=True)
    time_table=models.ForeignKey(TimeTable,on_delete=models.CASCADE)
    student=models.ForeignKey(Student,on_delete=models.CASCADE)
    date=models.DateField()
    time=models.TimeField(auto_now=True)
    status=models.BooleanField(default=False)

    class Meta:
        unique_together = ('time_table', 'student', 'date')

    def __str__(self):
        return f"{self.student} - {self.time_table} on {self.date}"

class FingerRecord(models.Model):
    record_id=models.CharField(default=shortuuid,max_length=6,editable=False,primary_key=True)
    student=models.ForeignKey(Student,on_delete=models.CASCADE)
    fingerprint_data=models.BinaryField()

    def __str__(self):
        return f"Fingerprint for {self.student}"