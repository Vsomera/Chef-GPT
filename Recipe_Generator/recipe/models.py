from django.db import models
from django.contrib.postgres.fields import ArrayField
from user.models import Profile


class Recipe(models.Model):
    profile = models.ForeignKey(Profile, on_delete = models.CASCADE, related_name='profilerecipes', related_query_name='profilerecipe')
    ingredients = ArrayField(models.CharField(max_length=50), blank=True)
    recipe = models.TextField(blank=True, null=True)
    instruction = models.TextField(blank=True, null=True)
    category = models.CharField(max_length=50, blank=True, null=True)
    created_date = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return (self.profile.user.username + " recipes")