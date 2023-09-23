from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import Recipe


class RecipeGetSerializer(ModelSerializer):
    class Meta:
        model = Recipe
        fields = ('id', 'ingredients', 'recipe', 'instruction', 
                  'category', 'created_date')

class RecipeCreateSerializer(ModelSerializer):
    class Meta:
        model = Recipe
        fields = ('ingredients', 'recipe', 
                  'instruction', 'category')