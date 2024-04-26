from django.db import models
from django.contrib.auth.models import User

class StudentProfile(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    class_name = models.CharField(max_length=100)
    date_of_birth = models.DateField()
    address = models.TextField()
    adhar_no = models.CharField(max_length=12, unique=True)
    date_of_admission = models.CharField(max_length=20)
    photo = models.ImageField(upload_to='profile_photos', default='default.jpg', null=True, blank=True)[1][2][3][4][5]

    def __str__(self):
        return self.name


class TeacherProfile(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    address = models.TextField()
    graduated_from = models.CharField(max_length=200)
    subject = models.CharField(max_length=100)
    grade = models.CharField(max_length=50)
    academic_details = models.TextField()
    joining_date = models.DateField()

    def __str__(self):
        return self.name


class SoftwareSupport(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    password = models.CharField(max_length=128)  # Storing hashed passwords

    def __str__(self):
        return self.name


class Writer(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    date_of_birth = models.DateField()
    date_of_join = models.DateField()
    role = models.CharField(max_length=100)
    photo = models.ImageField(upload_to='writer_photos', default='default.jpg', null=True, blank=True)

    def __str__(self):
        return self.name

class Subject(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    sub_code = models.CharField(max_length=20, unique=True)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name


class Book(models.Model):
    book_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    translator = models.CharField(max_length=100, blank=True, null=True)
    publisher = models.CharField(max_length=100)
    num_volumes = models.PositiveIntegerField()
    publication_year = models.PositiveIntegerField()
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name='books')
    edition = models.CharField(max_length=50, blank=True, null=True)
    num_copies = models.PositiveIntegerField()

    def __str__(self):
        return self.title

# Create your models here.
