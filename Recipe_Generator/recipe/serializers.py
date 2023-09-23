from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import Recipe


class RecipeSerializer(ModelSerializer):
    class Meta:
        model = Recipe
        fields = ('id', 'profile', 'ingredients', 'recipe', 'instruction', 'category', 'created_date')
