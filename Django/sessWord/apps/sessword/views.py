from django.shortcuts import render, redirect
from time import strftime, gmtime

def index(request):
    return render(request, "index.html")
def process(request):
    if request.method=="POST":
        x=[]
        if 'words' not in request.session:
            request.session['words']=[]
        x.append(request.POST['word'])
        x.append(request.POST['color'])
        x.append(request.POST['bigword'])
        x.append(strftime("%Y-%m-%d %H:%M %p", gmtime()))
        request.session['words'].append(x)
        return redirect('/')
    else:
        return redirect('/')
