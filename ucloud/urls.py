from django.contrib.auth.decorators import login_required
from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include('ucloud.apps.welcome.urls')),
    url(r'^discover/', include('ucloud.apps.discover.urls')),
    url(r'^finance/', include('ucloud.apps.finance.urls')),
    url(r'^education/', include('ucloud.apps.education.urls')),
    url(r'^health/', include('ucloud.apps.health.urls')),
    url(r'^journey/', include('ucloud.apps.journey.urls')),
    url(r'^d/', include('ucloud.apps.discover.urls')),
    url(r'^f/', include('ucloud.apps.finance.urls')),
    url(r'^e/', include('ucloud.apps.education.urls')),
    url(r'^h/', include('ucloud.apps.health.urls')),
    url(r'^j/', login_required(include('ucloud.apps.journey.urls'))),
]
