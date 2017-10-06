from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.education, name='education'),
    url(r'^$', views.education, name='e'),
]
