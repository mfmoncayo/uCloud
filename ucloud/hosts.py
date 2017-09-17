from django.conf import settings
from django_hosts import patterns, host

host_patterns = patterns('',
    host(r'www', settings.ROOT_URLCONF, name='www'),
    host(r'discover', 'ucloud.apps.discover.urls', name='discover'),
    #host(r'(?!www).*', 'ucloud.settings.hosts.urls', name='wildcard_redirect'),
)
