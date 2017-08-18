from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include('ucloud.apps.welcome.urls')),
    url(r'^dashboard/', include('ucloud.apps.dashboard.urls')),
    url(r'^finance/', include('ucloud.apps.finance.urls')),
    url(r'^education/', include('ucloud.apps.education.urls')),
    url(r'^health/', include('ucloud.apps.health.urls')),
    url(r'^schedule/', include('ucloud.apps.schedule.urls')),
]
