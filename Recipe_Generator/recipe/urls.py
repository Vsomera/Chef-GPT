from django.urls import include, re_path, path
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register('recipe', RecipeViewset, basename="recipe")
urlpatterns = [path('', include(router.urls)),]