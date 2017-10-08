from django.conf.urls import url

from .views import JourneyView

urlpatterns = [
    url(r'^$', JourneyView.as_view(), name='journey'),
    url(r'^$', JourneyView.as_view(), name='j'),
]
