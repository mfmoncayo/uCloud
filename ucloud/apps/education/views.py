from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def education(request):
    return render(request, 'education.html')

def e(request):
    return render(request, 'education.html')
