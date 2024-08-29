import random
from faker import Faker
from datetime import datetime
import os
import django
from django.db.models.signals import post_save
from django.dispatch import receiver

# Set up Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'derp.settings')  # replace 'your_project' with your project name
django.setup()

from admission.models import Admission,Student  # replace 'your_app' with your app name

faker = Faker()

def generate_and_save_mock_data(num_records):
    statuses = ['approved', 'pending', 'left']
    courses = ['5644', 'H', 'M', 'B']
    previous_educations = ['ARBI HAFTUM', 'DARS', 'HIFZ', 'FAZIL']
    states = ['GUJARAT', 'MAHARASHTRA', 'RAJASTHAN', 'DELHI']
    districts = ['ALWAR', 'BHARUCH', 'MUMBAI', 'DELHI']
    localities = ['ANJAR', 'SURAT', 'BARODA', 'BHAVNAGAR']

    for _ in range(num_records):
        admission = Admission(
            admission_id=faker.uuid4()[:6],
            student_name=faker.first_name(),
            father_name=faker.first_name(),
            date_of_birth=faker.date_of_birth(minimum_age=10, maximum_age=25).strftime('%Y-%m-%d'),
            profile_image=faker.image_url(width=100, height=100),
            state=random.choice(states),
            district=random.choice(districts),
            locality=random.choice(localities),
            pincode=faker.postcode(),
            mobile_number=faker.phone_number(),
            aadhar_number=faker.random_number(digits=12, fix_len=True),
            created_at=faker.date_between(start_date='-5y', end_date='today').strftime('%Y-%m-%d'),
            updated_at=faker.date_between(start_date='-5y', end_date='today').strftime('%Y-%m-%d'),
            date_of_admission=faker.date_between(start_date='-5y', end_date='today').strftime('%Y-%m-%d'),
            previous_result_status=random.choice(['pass', 'fail']),
            previous_institution=faker.company(),
            previous_education=random.choice(previous_educations),
            school_education=str(random.randint(5, 12)),
            applied_for=random.choice(courses),
            lc_given=faker.boolean(),
            pay_fees=faker.boolean(),
            fees_amount=faker.random_number(digits=4, fix_len=True) if faker.boolean() else None,
            required_donation=faker.boolean(),
            admission_status=random.choice(statuses)
        )
        admission.save()


@receiver(post_save, sender=Admission)
def create_student(sender, instance, created, **kwargs):
    if created:
        # Create the Student object with the necessary course_id
        Student.objects.create(admission=instance, course=instance.course)

# Generate and save 50 records to the database
generate_and_save_mock_data(50)
