from django.urls import path
from .views import AuthorView, CategoryView, BookView, CheckoutView
from .dashboard import LibraryDashboardView
app_name='library'
urlpatterns = [
   # Library APIs
   # path('/list',DepartmentView.as_view({'get':'list'}),name='department-list'),
   # path('/create',DepartmentView.as_view({'post':'create'}),name='department-create'),
   # path('/retrieve/<str:pk>/',DepartmentView.as_view({'get':'retrieve'}),name='department-retrieve'),
   # path('/delete/<str:pk>/',DepartmentView.as_view({'delete':'delete'}),name='department-delete'),
   # path('/update/<str:pk>/',DepartmentView.as_view({'put':'update'}),name='department-create'),

   # Author APIs
    path('author/list/', AuthorView.as_view({'get': 'list'}), name='author-list'),
    path('author/create/', AuthorView.as_view({'post': 'create'}), name='author-create'),
    path('author/retrieve/<str:pk>/', AuthorView.as_view({'get': 'retrieve'}), name='author-retrieve'),
    path('author/delete/<str:pk>/', AuthorView.as_view({'delete': 'delete'}), name='author-delete'),
    path('author/update/<str:pk>/', AuthorView.as_view({'put': 'update'}), name='author-update'),


    # Category APIs
    path('category/list/', CategoryView.as_view({'get': 'list'}), name='category-list'),
    path('category/create/', CategoryView.as_view({'post': 'create'}), name='category-create'),
    path('category/retrieve/<str:pk>/', CategoryView.as_view({'get': 'retrieve'}), name='category-retrieve'),
    path('category/delete/<str:pk>/', CategoryView.as_view({'delete': 'delete'}), name='category-delete'),
    path('category/update/<str:pk>/', CategoryView.as_view({'put': 'update'}), name='category-update'),

    # Book APIs
    path('book/list/', BookView.as_view({'get': 'list'}), name='book-list'),
    path('book/create/', BookView.as_view({'post': 'create'}), name='book-create'),
    path('book/retrieve/<str:pk>/', BookView.as_view({'get': 'retrieve'}), name='book-retrieve'),
    path('book/delete/<str:pk>/', BookView.as_view({'delete': 'delete'}), name='book-delete'),
    path('book/update/<str:pk>/', BookView.as_view({'put': 'update'}), name='book-update'),

    # Checkout APIs
    path('checkout/list/', CheckoutView.as_view({'get': 'list'}), name='checkout-list'),
    path('checkout/create/', CheckoutView.as_view({'post': 'create'}), name='checkout-create'),
    path('checkout/retrieve/<str:pk>/', CheckoutView.as_view({'get': 'retrieve'}), name='checkout-retrieve'),
    path('checkout/delete/<str:pk>/', CheckoutView.as_view({'delete': 'delete'}), name='checkout-delete'),
    path('checkout/update/<str:pk>/', CheckoutView.as_view({'put': 'update'}), name='checkout-update'),

    # Library Dashboard API
    path('library-dashboard/', LibraryDashboardView.as_view(), name='library-dashboard'),


]

