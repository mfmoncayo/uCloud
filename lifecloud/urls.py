from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include('lifecloud.apps.welcome.urls')),
    url(r'^dashboard/', include('lifecloud.apps.dashboard.urls')),
    url(r'^finance/', include('lifecloud.apps.finance.urls')),
    url(r'^education/', include('lifecloud.apps.education.urls')),
    url(r'^health/', include('lifecloud.apps.health.urls')),
    url(r'^schedule/', include('lifecloud.apps.schedule.urls')),
]
