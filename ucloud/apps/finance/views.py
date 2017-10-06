from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def finance(request):
    return render(request, 'finance.html');

def f(request):
    return render(request, 'finance.html');
