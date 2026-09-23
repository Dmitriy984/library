from django.db import models
from django.contrib.auth.models import User






class Profile(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name='profile'
    )
    name = models.CharField(max_length=60,              
)
    last_name = models.CharField(max_length=60)
    addres = models.TextField()


class Courier(models.Model):
    """Курьер — отдельная роль пользователя."""
    TRANSPORT_CHOICES = [
    ('foot', 'Пешком'),
    ('bike', 'Велосипед'),
    ('car', 'Автомобиль'),
    ]
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name='courier',

    verbose_name='Пользователь',
    )
    phone = models.CharField(
        max_length=20,
        verbose_name='Рабочий телефон',
    )
    transport = models.CharField(
        max_length=10,
        choices=TRANSPORT_CHOICES,
        default='bike',
        verbose_name='Транспорт',
    )
    is_active = models.BooleanField(
        default=True,
        verbose_name='Работает',
    )
    hired_at = models.DateField(
        auto_now_add=True,
        verbose_name='Дата найма',
    )
    class Meta:
        verbose_name = 'Курьер'
        verbose_name_plural = 'Курьеры'
    def __str__(self):
        return f'Курьер {self.user.get_full_name() or self.user.username}'