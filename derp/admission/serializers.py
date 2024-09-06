from django.utils import timezone
from rest_framework import serializers
from .models import Admission, Student, Alumni


class AdmissionSerializer(serializers.ModelSerializer):
   
    class Meta:
        # date_of_admission = serializers.DateField(default=timezone.now)

        model= Admission
        fields = [
            'id', 'admission_id', 'student_name', 'father_name', 'date_of_birth',
            'profile_image', 'state', 'district', 'locality', 'pincode', 'mobile_number',
            'aadhar_number', 'date_of_admission', 'previous_result_status', 'previous_institution',
            'previous_education', 'school_education', 'applied_for', 'lc_given', 'pay_fees',
            'fees_amount', 'required_donation', 'admission_status'
        ]


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model= Student
        fields='__all__'


class AlumniSerializer(serializers.ModelSerializer):
    class Meta:
        model= Alumni
        fields='__all__'


