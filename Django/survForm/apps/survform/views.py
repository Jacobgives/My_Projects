# Create your views here.
from django.shortcuts import render, HttpResponse, redirect
# the index function is called when root is visited
def index(request):
    return render(request, "survform/index.html")

def success(request):
    return render(request, "survform/success.html")

def process(request):
    if "count" not in request.session:
        request.session['count']=0
    request.session['count']+=1
    print(request.method)
    if request.method=='POST':
        print request.POST
        request.session['comment']=request.POST['comment']
        return redirect("/success")
    else:
        return redirect(r'^/$')
