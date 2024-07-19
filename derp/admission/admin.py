from django.contrib import admin
from .models import *

admin.site.register(PersonalDetails)
admin.site.register(AcademicDetails)
admin.site.register(OtherDetails)
admin.site.register(AdmissionMaster)