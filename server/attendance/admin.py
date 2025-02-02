from django.contrib import admin
from attendance.models import Attendance, FingerRecord

# Register your models here.
admin.site.register(FingerRecord)
admin.site.register(Attendance)
