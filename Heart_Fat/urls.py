from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.views.generic import TemplateView
from django.contrib.staticfiles.urls import staticfiles_urlpatterns


admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^blog/', include('blog.urls')),

    url(r'^$', TemplateView.as_view(template_name='Heart_Fat_App/_.html')),
    url(r'^index', TemplateView.as_view(template_name='Heart_Fat_App/index.html')),
    url(r'^login', TemplateView.as_view(template_name='Heart_Fat_App/login.html')),
    url(r'^admin/', include(admin.site.urls)),
) + staticfiles_urlpatterns()
