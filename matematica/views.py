from django.http import HttpResponse
from django.template import Context, RequestContext
from django.shortcuts import render, render_to_response, redirect

def index(request):
	ctx = {'message' : 'Informatica aplicada ao ensino'}
	return render(request, 'index.html', ctx)
	
def add(request):
	ctx = {'message' : 'Informatica aplicada ao ensino'}
	return render(request, 'add.html', ctx)
	
def sub(request):
	ctx = {'message' : 'Informatica aplicada ao ensino'}
	return render(request, 'sub.html', ctx)
	
def mcdu(request):
	ctx = {'message' : 'Informatica aplicada ao ensino'}
	return render(request, 'mcdu.html', ctx)
	
def money(request):
	ctx = {'message' : 'Informatica aplicada ao ensino'}
	return render(request, 'money.html', ctx)