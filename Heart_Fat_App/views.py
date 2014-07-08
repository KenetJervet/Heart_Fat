from django.core.serializers import serialize
from django.shortcuts import render
from django.views.generic import TemplateView
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.http import QueryDict
from django.http import HttpResponse
from utils.http import JsonResponse
import json

# Create your views here.


class LoginView(TemplateView):
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, *args, **kwargs):
        return render(request, 'Heart_Fat_App/login.html')


    def post(self, request, *args, **kwargs):
        if request.is_ajax():
            data = json.loads(request.body.decode('utf-8'))
            username, password = data['username'], data['password']
            print(username, password)
            user = authenticate(username=username, password=password)
            if user:
                return JsonResponse({'status': 0, 'user': username})

            return JsonResponse({'status': 404})

        return JsonResponse({'status': 400})
