from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.generics import CreateAPIView
from .serializers import *
from .models import * 


class RecipeGetViewset(ReadOnlyModelViewSet):
    permission_classes = [IsAuthenticated] 
    serializer_class = RecipeGetSerializer
    def get_queryset(self):
        return Recipe.objects.filter(profile_id=self.request.user.id)
        
class RecipeCreateApiView(CreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = RecipeCreateSerializer
    queryset = Recipe.objects.all()
    
    def perform_create(self, serializer):
        serializer.save(profile=(Profile.objects.get(user=self.request.user)))