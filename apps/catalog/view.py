
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

from .models import Dish


def get_by_id(request, id: int):

    dish = Dish.objects.filter(pk=id).first()
    # dish = get_object_or_404(Dish, pk=id)
    return render(request, 'catalog/dish_detail.html', 
                        {
                            'dish': dish,
                            
                        }
                        )


def get_catalog(request):
    dishes = Dish.objects.all()
    content = {
        'dishes': dishes
    }
    return render(request, 'catalog/catlist.html', content)


