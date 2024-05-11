from django.contrib import admin
from .models import Grade,TeacherProfile

# class StudentProfileAdmin(admin.ModelAdmin):
#     model=StudentProfile
#     list_display = ['student_id', 'name', 'class_name', 'date_of_birth', 'address', 'adhar_no', 'date_of_admission', 'photo', 'id']
# class StudentDetailAdmin(admin.ModelAdmin):
#     list_display = ['student_detail_id', 'id']

class TeacherProfileAdmin(admin.ModelAdmin):
    list_display = ['teacher_id', 'name', 'address', 'graduated_from', 'subject', 'grade_incharge', 'academic_details', 'joining_date', 'id']
    list_filter=('graduated_from','subject','grade_incharge')
    search_fields=('teacher_id', 'name', 'address', 'graduated_from', 'subject', 'grade_incharge', 'academic_details', 'joining_date', 'id')
    list_display_links=['name']
class GradeAdmin(admin.ModelAdmin):
    list_display = ['grade_id','name' ,'id']
    list_display_links=['name']


# admin.site.register(StudentProfile, StudentProfileAdmin)
# admin.site.register(StudentDetail, StudentDetailAdmin)
admin.site.register(TeacherProfile, TeacherProfileAdmin)
admin.site.register(Grade, GradeAdmin)