__author__ = 'kj'

from django.http import HttpResponse
import json


class JsonResponse(HttpResponse):
    def __init__(self, data={}, *args, **kwargs):
        kwargs = kwargs.copy()
        kwargs.update({'content_type': 'application/json'})
        super().__init__(content=json.dumps(data).encode('utf-8'), *args, **kwargs)
