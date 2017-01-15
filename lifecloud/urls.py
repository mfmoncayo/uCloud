from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include('lifecloud.apps.welcome.urls')),
    url(r'^dashboard/', include('lifecloud.apps.dashboard.urls')),
]
