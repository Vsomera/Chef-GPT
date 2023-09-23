from django.urls import include
from django.conf.urls import url
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(RecipeViewset)
urlpatterns = [url(r'^', include(router.urls))]