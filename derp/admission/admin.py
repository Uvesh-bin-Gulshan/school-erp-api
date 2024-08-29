from django.contrib import admin
from import_export import resources, fields
from import_export.admin import ImportExportModelAdmin
from django.utils.html import format_html
from .models import Admission, Student

class AdmissionResource(resources.ModelResource):

    def get_instance(self, instance_loader, row):
        return self._meta.model.objects.filter(admission_id=row['admission_id']).first()
    class Meta:
        model = Admission
        fields = [
            'id', 'student_name', 'profile_image', 'applied_for', 'date_of_birth', 
            'state', 'district', 'locality', 'pincode', 'mobile_number', 
            'aadhar_number', 'previous_result_status', 'admission_status', 
            'previous_institution', 'previous_education', 'school_education', 
            'lc_given', 'pay_fees', 'fees_amount', 'required_donation', 
            'created_at', 'updated_at'
        ]

@admin.register(Admission)
class AdmissionAdmin(ImportExportModelAdmin):
    resource_class = AdmissionResource
    list_display = [
        'id', 'student_name', 'father_name', 'profile', 'applied_for', 
        'date_of_birth', 'state', 'district', 'locality', 'pincode', 
        'mobile_number', 'aadhar_number', 'previous_result_status', 
        'admission_status', 'previous_institution', 'previous_education', 
        'school_education', 'lc_given', 'pay_fees', 'fees_amount', 
        'required_donation', 'created_at', 'updated_at'
    ]
    list_display_links = ['student_name']
    list_filter = [
        'applied_for', 'state', 'district', 'locality', 'pincode',
        'previous_result_status', 'admission_status', 'previous_institution', 
        'previous_education', 'school_education', 'lc_given', 
        'pay_fees', 'required_donation'
    ]
    search_fields = ('student_name',)

    def profile(self, obj):
        if obj.profile_image:
            return format_html(
                '<img src="{}" style="width:60px; height:60px; border-radius:50%;"/>'.format(obj.profile_image.url)
            )
        else:
            return "No image"
    profile.short_description = 'Profile Image'

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        self.total_count = queryset.count()
        return queryset

    def changelist_view(self, request, extra_context=None):
        response = super().changelist_view(request, extra_context)
        if hasattr(self, 'total_count'):
            response.context_data['total_count'] = self.total_count
        return response


@admin.register(Student)
class StudentAdmin(ImportExportModelAdmin):
    list_display = ('get_student_name', 'profile', 'get_father_name', 'get_applied_for')
    list_display_links = ['get_student_name']
    search_fields = ('admission__student_name', 'admission__father_name')
    list_filter = [
        'admission__applied_for', 'admission__state', 'admission__district', 
        'admission__locality', 'admission__pincode', 'admission__previous_result_status', 
        'admission__admission_status', 'admission__previous_institution', 
        'admission__previous_education', 'admission__school_education', 
        'admission__lc_given', 'admission__pay_fees', 'admission__required_donation'
    ]

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        self.total_count = queryset.count()
        return queryset.select_related('admission')

    def get_student_name(self, obj):
        return obj.admission.student_name
    get_student_name.short_description = 'Student Name'

    def get_father_name(self, obj):
        return obj.admission.father_name
    get_father_name.short_description = 'Father Name'

    def get_applied_for(self, obj):
        return obj.admission.applied_for
    get_applied_for.short_description = 'Applied For'

    def profile(self, obj):
        if obj.admission and obj.admission.profile_image:
            return format_html(
                '<img src="{}" style="width:60px; height:60px; border-radius:50%;"/>'.format(obj.admission.profile_image.url)
            )
        else:
            return "No image"
    profile.short_description = 'Profile Image'
