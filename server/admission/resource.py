from import_export import resources
from .models import *



class AdmissionResource(resources.ModelResource):
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


        