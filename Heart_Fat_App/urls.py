__author__ = 'kj'

from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.views.generic import TemplateView
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
    url(r'^index', TemplateView.as_view(template_name='Heart_Fat_App/index.html')),
    url(r'^login', 'Heart_Fat_App.views.login'),
)