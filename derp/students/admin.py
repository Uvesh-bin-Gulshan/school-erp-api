from django.contrib import admin
from .models import *


admin.site.register(StudentPersonalDetails)
admin.site.register(StudentAcademicDetails)
admin.site.register(StudentOtherDetails)
admin.site.register(Student)