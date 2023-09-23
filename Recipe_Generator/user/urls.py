from django.urls import path
from rest_framework.routers import SimpleRouter
from .views import *

router = SimpleRouter()

urlpatterns = [
    path('signup/', SignUp.as_view()),
    path('login/', UserLoginApiview.as_view()),
]

urlpatterns += router.urls