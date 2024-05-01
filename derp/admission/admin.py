from django.contrib import admin
from .models import Admission,Student
# Register your models here.

class AdmissionAdmin(admin.ModelAdmin):
    list_display = ['admission_id', 'student_name', 'guardian_name', 'profile_image', 'applied_for', 'date_of_birth', 'state', 'District', 'locality', 'pincode', 'mobile_number', 'addhar_number', 'previous_result_status', 'admission_status', 'previous_institution', 'previous_education', 'worldly_studies', 'lc_given', 'donation', 
                    'donation_amount', 'created_at', 'updated_at', 'id']
    
admin.site.register(Admission, AdmissionAdmin)

class StudentAdmin(admin.ModelAdmin):
    list_display = [ 'admission', 'id']  # Add other fields as needed

admin.site.register(Student, StudentAdmin)

