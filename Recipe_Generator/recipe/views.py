from rest_framework.permissions import IsAuthenticated
from rest_framework import mixins, viewsets
from .serializers import *
from .models import * 


class RecipeViewset(mixins.CreateModelMixin, 
                    mixins.ListModelMixin, 
                    mixins.RetrieveModelMixin,
                    mixins.DestroyModelMixin,
                    viewsets.GenericViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = [IsAuthenticated]
    # filter_backends = (filters.SearchFilter, )
    # search_fields = ('title', 'brand')