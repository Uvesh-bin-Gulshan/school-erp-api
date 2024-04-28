from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny,IsAuthenticated
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token


class LoginView(APIView):
    permission_classes=[AllowAny]
    def post(self,request):
       username=request.data.get(username)
       password=request.data.get(password)

       user=authenticate(request,username=username,password=password)
       if user is not None:
           token, _ =Token.objects.get_or_create(user=user)
           user_roles=[role.name for role in user.userprofile.roles.all()]
           response= Response({
               'token':token.key,
               'role': user_roles

           })
           response.set_cookie('auth_token',token,hhtponly=True)
           return response
       else:
           return Response({'error':'Invalid Credentails'},status=401)
       

class LogoutView(APIView):
    permission_classes=[IsAuthenticated]
    def post(self,request):
        token=Token.objects.get(user=request.user)
        token.delete()
        response= Response({'message':'Logout successfull'})
        response.delete_cookie('auth_token')
        return response
    
    



           



