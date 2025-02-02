from rest_framework import serializers
from .models import *

# class DepartmentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model= Department
#         fields='__all__'
        


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class BookSerializer(serializers.ModelSerializer):
    author = AuthorSerializer()
    category = CategorySerializer(many=True)

    class Meta:
        model = Book
        fields = '__all__'

class CheckoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Checkout
        fields = '__all__'
