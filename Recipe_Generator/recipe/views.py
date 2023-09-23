from rest_framework.permissions import IsAuthenticated
from rest_framework import mixins, viewsets
from .serializers import *
from .models import * 


class RecipeViewset(mixins.CreateModelMixin, 
                    mixins.ListModelMixin, 
                    mixins.RetrieveModelMixin,
                    mixins.DestroyModelMixin,
                    viewsets.GenericViewSet):
    serializers = {
        'list': RecipeGetSerializer,
        'retrieve': RecipeGetSerializer,
        'create': RecipeCreateSerializer,
        'destroy': RecipeDestroySerializer
    }
    permission_classes = [IsAuthenticated]
    # filter_backends = (filters.SearchFilter, )
    # search_fields = ('title', 'brand')
    
    def get_serializer_class(self):
        return self.serializers.get(self.action)
    def get_queryset(self):
        print(self.request.user.id)
        return Recipe.objects.filter(profile=self.request.user)