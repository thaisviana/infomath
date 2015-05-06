from django.conf.urls import patterns, url

from matematica import views

urlpatterns = patterns('',
    url(r'^$', views.index, name='index')
)