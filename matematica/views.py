from django.http import HttpResponse
from django.template import Context, RequestContext
from django.shortcuts import render, render_to_response, redirect

def index(request):
	ctx = {'message' : 'Informatica aplicada ao ensino'}
	return render(request, 'index.html', ctx)