from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def health(request):
    return render(request, 'health.html')
