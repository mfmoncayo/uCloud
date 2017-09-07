from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def journey(request):
    return render(request, 'journey.html')
