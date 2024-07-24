from django.db import models
import uuid
from io import BytesIO
from django.core.files import File
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType

def shortuuid():
    return str(uuid.uuid4().hex)[:6]
class Author(models.Model):
    Author_id = models.CharField(primary_key=True, default=shortuuid, max_length=6, editable=False)
    first_name=models.CharField(max_length=100)
    last_name=models.CharField(max_length=100)
    short_bio=models.TextField(max_length=300)
    date_of_birth=models.DateField(null=True,blank=True)
    date_of_death=models.DateField(null=True,blank=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    


class Category(models.Model):
    name = models.CharField(max_length=200, help_text="Enter a book category (e.g. Hadith)")

    def __str__(self):
        return self.name


class Book(models.Model):
    title=models.CharField(max_length=200)
    author=models.ForeignKey(Author,on_delete=models.SET_NULL,null=True)
    summary = models.TextField(max_length=1000, help_text="Enter a brief description of the book")
    isbn =models.CharField('ISBN',max_length=13,unique=True)
    category = models.ManyToManyField(Category, help_text="Select a genre for this book")


    def __str__(self):
        return self.title
    
 


class Checkout(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField()
    member = GenericForeignKey('content_type', 'object_id')
    due_date = models.DateField()
    checkout_date = models.DateField(auto_now_add=True)
    returned = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.book.title} checked out by {self.member}"
