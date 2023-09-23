from django.shortcuts import render
from rest_framework import status
from rest_framework.viewsets import ReadOnlyModelViewSet, ModelViewSet
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.settings import api_settings
from .models import *
from .serializers import *


class SignUp(APIView):
    serializer_class = SignUpSerializer
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(raise_exception=True):
            username = serializer.validated_data.get("username")
            password = serializer.validated_data.get("password")
            try : 
                user = User.objects.create(username = username)
            except Exception as e:
                return Response({"res": "", "error": str(e)}, status=status.HTTP_409_CONFLICT)
            else:
                user.set_password(password)
                token = Token.objects.create(user = user)
                user.save()
                profile = Profile.objects.create(user = user)
                profile.save()
                return Response(data={"res": "Successful Registration", "error": ""}, status=status.HTTP_200_OK)

class UserLoginApiview(ObtainAuthToken):
    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES