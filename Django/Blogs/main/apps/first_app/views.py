from django.shortcuts import render,HttpResponse, redirect

def index(request):
    response = "Placeholder to display list of blogs."
    return HttpResponse(response)

def new(request):
    response = "Placeholder for new blog"
    return HttpResponse(response)

def create(request):
    return redirect('/')

def show(request, id):
    response = "Placeholder for show blog at {}".format(id)
    return HttpResponse(response)

def edit(request, id):
    response = "Placeholder for edit at {}".format(id)
    return HttpResponse(response)

def destroy(request, id):
    return redirect('/')
