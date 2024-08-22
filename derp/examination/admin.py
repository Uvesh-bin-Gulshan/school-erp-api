from django.contrib import admin
from .models import ExamType, ExamTimeTable, HallTicket, MarkSheet, ResultSheet
# Register your models here.

admin.site.register(ExamType)
admin.site.register(ExamTimeTable)
admin.site.register(HallTicket)
admin.site.register(MarkSheet)
admin.site.register(ResultSheet)