from django.db import models

# Create your models here.
class Cloud(models.Model):
    applet = models.CharField(max_length=15)
    entity_id = models.IntegerField()
    view = models.CharField(max_length=30)
    section = models.CharField(max_length=30)

class Directory(models.Model):
    user_id = models.IntegerField()
    applet = models.CharField(max_length=5)
    active = models.BooleanField(default=False)
    viewing = models.BooleanField(default=False)
    position = models.CharField(max_length=5)
    entities = models.CharField(max_length=30)
    clouds = models.CharField(max_length=100)
    favorites = models.CharField(max_length=30)

class Entity(models.Model):
    nature = models.CharField(max_length=25)
    name = models.CharField(max_length=10)
    related_pars = models.CharField(max_length=100)
    related_sibs = models.CharField(max_length=100)
    related_subs = models.CharField(max_length=100)
    story = models.CharField(max_length=30)
    community = models.CharField(max_length=30)
    interest = models.CharField(max_length=30)
    business = models.CharField(max_length=30)

class Favorite(models.Model):
    entity_id = models.IntegerField()
    applet = models.CharField(max_length=15)
    folder = models.CharField(max_length=10)
    name = models.CharField(max_length=30)
