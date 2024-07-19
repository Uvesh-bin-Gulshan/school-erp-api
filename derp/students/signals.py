from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import StudentPersonalDetails, StudentAcademicDetails, StudentOtherDetails, Student
from admission.models import Admission

@receiver(post_save, sender=Admission)
def create_student_records(sender, instance, created, **kwargs): 
    if instance.admission_status == 'approved':
        # Copy Personal Details
        personal_details = instance.personal_details
        student_personal, created = StudentPersonalDetails.objects.update_or_create(
            student_id=personal_details.personal_id,
            defaults={
                'student_name': personal_details.student_name,
                'father_name': personal_details.father_name,
                'guardian_name': personal_details.guardian_name,
                'date_of_birth': personal_details.date_of_birth,
                'profile_image': personal_details.profile_image,
                'state': personal_details.state,
                'district': personal_details.district,
                'locality': personal_details.locality,
                'pincode': personal_details.pincode,
                'mobile_number': personal_details.mobile_number,
                'aadhar_number': personal_details.aadhar_number,
                'created_at': personal_details.created_at,
                'updated_at': personal_details.updated_at,
                'date_of_admission': personal_details.date_of_admission,
            }
        )

        # Copy Academic Details
        academic_details = instance.academic_details
        student_academic, created = StudentAcademicDetails.objects.update_or_create(
            student_academic_id=academic_details.academic_id,
            defaults={
                'previous_result_status': academic_details.previous_result_status,
                'previous_institution': academic_details.previous_institution,
                'previous_education': academic_details.previous_education,
                'school_education': academic_details.school_education,
                'course': academic_details.applied_for,
            }
        )

        # Copy Other Details
        other_details = instance.other_details
        student_other, created = StudentOtherDetails.objects.update_or_create(
            student_other_id=other_details.other_id,
            defaults={
                'pay_fees': other_details.pay_fees,
                'fees_amount': other_details.fees_amount,
                'required_donation': other_details.required_donation,
            }
        )

        # Create Student Master Record
        student_master, created = Admission.objects.update_or_create(
            student_master_id=instance.admission_id,
            defaults={
                'admission_status': 'studing',
                'personal_details': student_personal,
                'academic_details': student_academic,
                'other_details': student_other,
            }
        )
