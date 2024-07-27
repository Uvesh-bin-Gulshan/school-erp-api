# from django.contrib import admin
# from .models import Admission,Student
# from import_export import resources,fields
# from import_export.admin import ImportExportModelAdmin
# from django.utils.html import format_html


# class AdmissionResource(resources.ModelResource):
#     class Meta:
#         model = Admission
#         fields = ['id', 'student_name', 'profile_image','applied_for', 'date_of_birth', 'state', 'district', 'locality', 'pincode', 'mobile_number', ' aadhar_number', 'previous_result_status', 'admission_status', 'previous_institution', 'previous_education', 'worldly_studies', 'lc_given', 'donation', 'donation_amount', 'created_at', 'updated_at']
    

# # Register your models here.

# @admin.register(Admission)
# class AdmissionAdmin(ImportExportModelAdmin):
#     resource_class = AdmissionResource
#     list_display = ['id', 'student_name', 'guardian_name', 'profile', 'applied_for', 'date_of_birth', 'state', 'district', 'locality', 'pincode', 'mobile_number', ' aadhar_number', 'previous_result_status', 'admission_status', 'previous_institution', 'previous_education', 'worldly_studies', 'lc_given', 'donation', 'donation_amount', 'created_at', 'updated_at']
#     list_display_links = ['student_name']
#     list_filter = ('applied_for','state', 'district', 'locality', 'pincode','previous_result_status', 'admission_status', 'previous_institution', 'previous_education', 'worldly_studies', 'lc_given', 'donation')  # Corrected filter fields
#     search_fields =  ('student_name',)  
    
#     def get_queryset(self, request):
#         queryset = super().get_queryset(request)
#         self.total_count = queryset.count()
#         return queryset
#     def profile(self, obj):
#      if obj.profile_image:
#         return format_html('<img src="{}" style="width:60px; height:60px; border-radius:50%;"/>'.format(obj.profile_image.url))
#      else:
#         return "No image"
#     def changelist_view(self, request, extra_context=None):
#         response = super().changelist_view(request, extra_context)
#         if hasattr(self, 'total_count'):
#             response.context_data['total_count'] = self.total_count
#         return response
#     def get_form(self, request, obj=None, **kwargs):
#         form = super().get_form(request, obj, **kwargs)
#         if obj and not obj.profile_image:
#             form.base_fields['profile_image'].initial = 'default_profile.png'
#         return form
# # class AdmissionAdmin(admin.ModelAdmin):
# #     model=Admission
# #     list_display = ['id', 'student_name', 'guardian_name', 'profile_image', 'applied_for', 'date_of_birth', 'state', 'district', 'locality', 'pincode', 'mobile_number', ' aadhar_number', 'previous_result_status', 'admission_status', 'previous_institution', 'previous_education', 'worldly_studies', 'lc_given', 'donation', 
# #                     'donation_amount', 'created_at', 'updated_at']
# #     list_display_links = ['student_name']  # Make the admission_id clickable to view the details

#     def get_readonly_fields(self, request, obj=None):
#         return ['admission_id']
# class StudentResource(resources.ModelResource):
#     profile_image = fields.Field(column_name='admission__profile_image')
#     applied_for = fields.Field(column_name='admission__applied_for')
#     date_of_birth = fields.Field(column_name='admission__date_of_birth')
#     state = fields.Field(column_name='admission__state')
#     district = fields.Field(column_name='admission__district')
#     locality = fields.Field(column_name='admission__locality')
#     pincode = fields.Field(column_name='admission__pincode')
#     mobile_number = fields.Field(column_name='admission__mobile_number')
#     aadhar_number = fields.Field(column_name='admission__aadhar_number')
#     previous_result_status = fields.Field(column_name='admission__previous_result_status')
#     admission_status = fields.Field(column_name='admission__admission_status')
#     previous_institution = fields.Field(column_name='admission__previous_institution')
#     previous_education = fields.Field(column_name='admission__previous_education')
#     worldly_studies = fields.Field(column_name='admission__worldly_studies')
#     lc_given = fields.Field(column_name='admission__lc_given')
#     donation = fields.Field(column_name='admission__donation')
#     donation_amount = fields.Field(column_name='admission__donation_amount')
#     created_at = fields.Field(column_name='admission__created_at')
#     updated_at = fields.Field(column_name='admission__updated_at')

#     class Meta:
#         model = Student
#         fields = ['id', 'student_name', 'guardian_name', 'applied_for', 
#                   'profile_image', 'applied_for', 'date_of_birth',
#                   'state', 'district', 'locality', 
#                   'pincode', 'mobile_number', ' aadhar_number', 
#                   'previous_result_status', 'admission_status', 
#                   'previous_institution', 'previous_education', 
#                   'worldly_studies', 'lc_given', 'donation', 
#                   'donation_amount', 'created_at', 'updated_at']

# @admin.register(Student)
# class StudentAdmin(ImportExportModelAdmin):
#     resource_class = AdmissionResource

#     list_display = ('id', 'student_name','profile', 'guardian_name', 'applied_for')

#      # Add filters based on admission status if needed
#     def profile(self, obj):
#         return format_html('<img src="{}" style="width:60px; height:60px; border-radius:50%;"/>'.format(obj.admission.profile_image.url))
#     # search_fields = ('student_name', 'guardian_name', 'admission_id')  # Add search fields for easy lookup
#     list_display_links = ['student_name']
#     search_fields = ('student_name', 'guardian_name', 'admission__student_name', 'admission__guardian_name', 'admission__applied_for')  # Add search fields for easy lookup
#     list_filter = ('admission__applied_for','admission__state', 'admission__district', 'admission__locality', 'admission__pincode','admission__previous_result_status', 'admission__admission_status', 'admission__previous_institution', 'admission__previous_education', 'admission__worldly_studies', 'admission__lc_given', 'admission__donation')  # Corrected filter fields

#     def get_queryset(self, request):
#         queryset = super().get_queryset(request)
#         self.total_count = queryset.count()
#         return queryset.select_related('admission')

#     def changelist_view(self, request, extra_context=None):
#         response = super().changelist_view(request, extra_context)
#         if hasattr(self, 'total_count'):
#             response.context_data['total_count'] = self.total_count
#         return response
#     def get_queryset(self, request):
#         queryset = super().get_queryset(request)
#         return queryset.select_related('admission')  # Ensure related Admission details are fetched efficiently

#     def admission_id(self, obj):
#         return obj.admission.admission_id
    
#     def profile_image(self, obj):
#         return obj.admission.profile_image
    

#     def student_name(self, obj):
#         return obj.admission.student_name

#     def guardian_name(self, obj):
#         return obj.admission.guardian_name

#     def applied_for(self, obj):
#         return obj.admission.applied_for

#     def admission_status(self, obj):
#         return obj.admission.admission_status
    

#     admission_id.short_description = 'Admission ID'
#     student_name.short_description = 'Student Name'
#     guardian_name.short_description = 'Guardian Name'
#     applied_for.short_description = 'Applied For'
#     admission_status.short_description = 'Admission Status'
