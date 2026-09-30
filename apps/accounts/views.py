from django.shortcuts import render


from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth import login
from django.contrib.auth.views import loginView

from apps.accounts.forms import RegisterForm


def register_view(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user) # сразу логиним
            messages.success(request, f'Добро пожаловать, {user.username}!')
            return redirect('catalog:dish_list')
    else:
        form = RegisterForm()
    return render(request, 'registration/register.html', {'form': form})