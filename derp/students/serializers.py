from rest_framework import serializers
from .models import Employee
# from .models import TeacherProfile
# from .models import SoftwareSupport
# from .models import Writer
# from .models import subject
# from .models import Book


class EmployeeSerializer(serializers.ModelSerializer):

    class Meta:
        model=Employee
        fields=['name','date_of_joining','age']


# class StudentProfileSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = StudentProfile
#         fields = ['id', 'name', 'class_name', 'date_of_birth','address','adhar_no','date_of_admission','photo']



# class TeacherProfileSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = TeacherProfile
#         fields = ['id', 'name', 'address', 'graduated_from', 'subject', 'grade', 'academic_details', 'joining_date']        

# class SoftwareSupportSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = TeacherProfile
#         fields = ['id', 'name', 'role', 'password'] 


# class WriterSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Writer
#         fields = ['id', 'name', 'date_of_birth', 'date_of_join', 'role', 'photo']


# class SubjectSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Subject
#         fields = ['id', 'name', 'sub_code', 'description']



# class BookSerializer(serializers.ModelSerializer):
#     subject = SubjectSerializer(read_only=True)

#     class Meta:
#         model = Book
#         fields = ['book_id', 'title', 'author', 'translator', 'publisher', 'num_volumes', 'publication_year', 'subject', 'edition', 'num_copies']


               