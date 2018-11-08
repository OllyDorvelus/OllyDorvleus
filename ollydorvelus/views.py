from django.shortcuts import render
from django.forms import model_to_dict
from django.http import JsonResponse


def index(request):
    return render(request, "resume.html", {})

def portfolio(request):
    return render(request, "portfolio.html", {})

def about(request):
    return render(request, 'about.html', {})
