from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.

def login(request):
    if request.method == 'GET':
        return render(request, 'Heart_Fat_App/login.html')

    if request.method == 'POST':
        pass
