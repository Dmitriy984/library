from django.urls import path
from apps.catalog.view import get_by_id, get_catalog


app_name = 'catalog'

urlpatterns = [
    path('', get_catalog),
    path('<int:id>', get_by_id)
]