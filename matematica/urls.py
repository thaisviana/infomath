from django.conf.urls import patterns, url

from matematica import views

urlpatterns = patterns('',
    url(r'^$', views.index, name='index'),
	url(r'^/add/$', views.add, name='add'),
	url(r'^/sub/$', views.sub, name='sub'),
	url(r'^/mcdu/$', views.mcdu, name='mcdu'),
	url(r'^/money/$', views.money, name='money')
)