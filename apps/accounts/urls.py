from django.contrib import admin
from django.urls import path, include
from .views import register_view
app_name = 'accounts'

urlpatterns = [
path('register/', register_view, name='register'),
path('login/', loginView.as_view(), name='login')
]

