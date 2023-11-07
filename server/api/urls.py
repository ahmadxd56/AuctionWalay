
from django.contrib import admin
from django.urls import path
from views import *



#server function urls
urlpatterns = [
    path('login/', login()),
    path('signup/',signup()),



]
