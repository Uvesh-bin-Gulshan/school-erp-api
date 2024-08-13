from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Count, F, ExpressionWrapper, fields
from .models import Author, Book, Category, Checkout

class LibraryDashboardView(APIView):
    def get(self, request):
        context = {
            'author_data': self.get_author_data(),
            'book_data': self.get_book_data(),
            'category_data': self.get_category_data(),
            'total_books': self.get_total_books(),
            'checkout_data': self.get_checkout_data(),
        }
        return Response(context)

    def get_author_data(self):
        queryset = (
            Author.objects
            .annotate(
                total_books=Count('book', distinct=True)
            )
            .values(
                'first_name',
                'last_name',
                'total_books'
            )
            .order_by('-total_books')
        )
        return list(queryset)

    def get_book_data(self):
        queryset = (
            Book.objects
            .annotate(
                total_checkouts=Count('checkout', distinct=True)
            )
            .values(
                'title',
                'author__first_name',
                'author__last_name',
                'total_checkouts'
            )
            .order_by('-total_checkouts')
        )
        return list(queryset)

    def get_category_data(self):
        queryset = (
            Category.objects
            .annotate(
                total_books=Count('book', distinct=True)
            )
            .values(
                'name',
                'total_books'
            )
            .order_by('-total_books')
        )
        return list(queryset)

    def get_total_books(self):
        total_books = Book.objects.count()
        return {'total_books': total_books}

    def get_checkout_data(self):
        queryset = (
            Checkout.objects
            .select_related('book__author')
            .annotate(
                book_title=F('book__title'),
                author_name=F('book__author__first_name') + ' ' + F('book__author__last_name'),
                category_names=F('book__category__name'),
                total_checkouts=Count('id'),
                books_checked_out=Count('book', distinct=True)
            )
            .values(
                'book_title',
                'author_name',
                'category_names',
                'total_checkouts',
                'books_checked_out'
            )
            .order_by('-total_checkouts')
        )
        return list(queryset)
