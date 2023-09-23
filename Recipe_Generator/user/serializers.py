from rest_framework import serializers
from django.utils.translation import gettext_lazy as _
from .models import *

class SignUpSerializer(serializers.Serializer):
    username = serializers.CharField(label=_("Username"), required=True)
    password = serializers.CharField(
        label=_("Password"),
        style={'input_type': 'password'},
        trim_whitespace=False,
        required=True
    )