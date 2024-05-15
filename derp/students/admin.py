from django.contrib import admin
from .models import Grade,TeacherProfile
from import_export import resources,fields
from import_export.admin import ImportExportModelAdmin
# class StudentProfileAdmin(admin.ModelAdmin):
#     model=StudentProfile
#     list_display = ['student_id', 'name', 'class_name', 'date_of_birth', 'address', 'adhar_no', 'date_of_admission', 'photo', 'id']
# class StudentDetailAdmin(admin.ModelAdmin):
#     list_display = ['student_detail_id', 'id']
class TeacherResource(resources.ModelResource):
    class Meta:
        model = TeacherProfile
        fields =['teacher_id', 'name', 'address', 'graduated_from', 'subject', 'grade_incharge', 'academic_details', 'joining_date', 'id']
    

class TeacherProfileAdmin(ImportExportModelAdmin):
    resource_class = TeacherResource

    list_display = ['teacher_id', 'name', 'address', 'graduated_from', 'subject', 'grade_incharge', 'academic_details', 'joining_date', 'id']
    list_filter=('graduated_from','subject','grade_incharge')
    search_fields=('name',)
    list_display_links=['name']
class GradeAdmin(admin.ModelAdmin):
    list_display = ['grade_id','name' ,'id']
    list_display_links=['name']



admin.site.register(TeacherProfile, TeacherProfileAdmin)
admin.site.register(Grade, GradeAdmin)