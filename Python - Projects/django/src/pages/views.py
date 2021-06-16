from django.shortcuts import render

from django.http import HttpResponse
# Create your views here.
def home_view(request,*args, **kwargs): # *args, **kwargs - python specifics
    print(args,kwargs)
    print(request.user)
    #return HttpResponse("<h1>Hello World</h1>") #string of HTML code (not an actual HTML code)
    return render(request,"home.html",{})

def contact_view(request,*args,**kwargs):
    return render(request,"contact.html",{})

def about_page(request,*args,**kwargs):
    my_context = {
        "my_text": " This is about us",
        "my_number": 123,
        "my_list": [123,34,5643,"Abc"],
        "my_html": "<h1> Hello Howdy </h1>"
    }

    return render(request,"about.html",my_context)

def social_view(request,*args,**kwargs):
    return HttpResponse("<h1>Hello World</h1>")