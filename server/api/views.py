from django.shortcuts import render

# Create your views here.

#POST/GET/DELETE/PATCH
def login(request):


    return render(request, 'login/index.html')