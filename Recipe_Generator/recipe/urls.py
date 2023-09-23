from django.urls import include, re_path, path
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register('recipe', RecipeGetViewset, basename="recipe")
# router.register('create_recipe/', RecipeCreateApiView.as_view())

urlpatterns = [
    path('', include(router.urls)), 
    path('create_recipe/', RecipeCreateApiView.as_view())]