from django.contrib import admin
from .models import *
from import_export.admin import ImportExportModelAdmin

admin.site.register(Subject)
admin.site.register(Department)
admin.site.register(Course)
admin.site.register(AnnuallySubjectSyllabusStatus)
admin.site.register(MonthlySubjectSyllabusStatus)
admin.site.register(SyllabusStatusVerification)


class YourModelAdmin(ImportExportModelAdmin):
    pass


