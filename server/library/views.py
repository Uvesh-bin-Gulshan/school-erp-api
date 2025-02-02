import qrcode
from io import BytesIO
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets

from .models import Author,Category,Book, Checkout
from .serializers import AuthorSerializer,CategorySerializer, BookSerializer, CheckoutSerializer

# Create your views here.
class GenerateQRcode(APIView):
      def generate_qr_code(request, isbn):
        book = get_object_or_404(Book, isbn=isbn)
        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_L,
            box_size=10,
            border=4,
        )
        qr.add_data(f'http://127.0.0.1:8000/admin/library/book/{book.isbn}')
        qr.make(fit=True)

        img = qr.make_image(fill='black', back_color='white')
        buffer = BytesIO()
        img.save(buffer, format="PNG")
        buffer.seek(0)

        return HttpResponse(buffer, content_type='image/png') 


class AuthorView(viewsets.ViewSet):
    def list(self, request):
        queryset = Author.objects.all()
        serializer = AuthorSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = AuthorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def retrieve(self, request, pk=None):
        try:
            author = Author.objects.get(pk=pk)
        except Author.DoesNotExist:
            return Response(status=404)
        serializer = AuthorSerializer(author)
        return Response(serializer.data)

    def update(self, request, pk=None):
        try:
            author = Author.objects.get(pk=pk)
        except Author.DoesNotExist:
            return Response(status=404)
        serializer = AuthorSerializer(author, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=400)

    def delete(self, request, pk=None):
        try:
            author = Author.objects.get(pk=pk)
        except Author.DoesNotExist:
            return Response(status=404)
        author.delete()
        return Response(status=204)


class CategoryView(viewsets.ViewSet):
    def list(self, request):
        queryset = Category.objects.all()
        serializer = CategorySerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def retrieve(self, request, pk=None):
        try:
            category = Category.objects.get(pk=pk)
        except Category.DoesNotExist:
            return Response(status=404)
        serializer = CategorySerializer(category)
        return Response(serializer.data)

    def update(self, request, pk=None):
        try:
            category = Category.objects.get(pk=pk)
        except Category.DoesNotExist:
            return Response(status=404)
        serializer = CategorySerializer(category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=400)

    def delete(self, request, pk=None):
        try:
            category = Category.objects.get(pk=pk)
        except Category.DoesNotExist:
            return Response(status=404)
        category.delete()
        return Response(status=204)


class BookView(viewsets.ViewSet):
    def list(self, request):
        queryset = Book.objects.all()
        serializer = BookSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = BookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def retrieve(self, request, pk=None):
        try:
            book = Book.objects.get(pk=pk)
        except Book.DoesNotExist:
            return Response(status=404)
        serializer = BookSerializer(book)
        return Response(serializer.data)

    def update(self, request, pk=None):
        try:
            book = Book.objects.get(pk=pk)
        except Book.DoesNotExist:
            return Response(status=404)
        serializer = BookSerializer(book, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=400)

    def delete(self, request, pk=None):
        try:
            book = Book.objects.get(pk=pk)
        except Book.DoesNotExist:
            return Response(status=404)
        book.delete()
        return Response(status=204)


class CheckoutView(viewsets.ViewSet):
    def list(self, request):
        queryset = Checkout.objects.all()
        serializer = CheckoutSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = CheckoutSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def retrieve(self, request, pk=None):
        try:
            checkout = Checkout.objects.get(pk=pk)
        except Checkout.DoesNotExist:
            return Response(status=404)
        serializer = CheckoutSerializer(checkout)
        return Response(serializer.data)

    def update(self, request, pk=None):
        try:
            checkout = Checkout.objects.get(pk=pk)
        except Checkout.DoesNotExist:
            return Response(status=404)
        serializer = CheckoutSerializer(checkout, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=400)

    def delete(self, request, pk=None):
        try:
            checkout = Checkout.objects.get(pk=pk)
        except Checkout.DoesNotExist:
            return Response(status=404)
        checkout.delete()
        return Response(status=204)