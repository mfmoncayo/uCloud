from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def discover(request):
    return render(request, 'discover.html')

def d(request):
    return render(request, 'discover.html')
