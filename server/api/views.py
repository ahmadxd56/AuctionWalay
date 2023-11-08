from django.shortcuts import render
from rest_framework.decorators import api_view
from api.models import Item,User,Usage
from rest_framework.response import Response


#token authentication
from rest_framework.authtoken.models import Token
#session auth validation
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import authentication_classes, permission_classes
from django.contrib.auth.decorators import login_required

#default login authentication
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
 


@api_view(['POST'])
def loginUser(request):
    user = request.data['email']
    password = request.data['password']
    print(user)
    print(password)
    fetch = authenticate(username=user,password=password)
    if fetch is not None:
        print("User logged in")
        user = User.objects.get(email=user)
        print("Reading token")
        token = Token.objects.get(user=user)
        print("Printing token:{}".format(token))
        print(token.key)
        user = Token.objects.get(key=token.key).user
        print("Welcome {}".format(user))

    else:
        print("User not logged in")
    
    return Response({"message":"User logged in","token":token.key})



@api_view(['POST'])
def registerUser(request):
    print("Printing request data")
    print(request.data)
    email = request.data['email']  
    username = request.data['username']
    data_array = request.data 
    # serializer = UserSerializer(data=request.data)
    try:
        u = User.objects.get(email= email)
        print("GET user result:{}".format(u))
        if(u):
            #user exists already-> DO NOT CREATE NEW
            print("User already exists")
            return Response("User not registered, email already exists")
    except:
        print("Printing the serializer")
        user = User.objects.create_user(data_array['email'], data_array['email'],data_array['password'])
        print(user)
        user.save()

        user_token = User.objects.get(email=user)
        token = Token.objects.create(user=user_token)
        print(token.key)

    
    return Response({"message":"User Registered","token":token.key})




@api_view(['GET'])
def logoutUser(request):
    try:
        user_object = get_user_from_token(request)
        print("User received. Logging out")
        return Response("True")
    except:
        print("Could not get user")
        return Response("False")


