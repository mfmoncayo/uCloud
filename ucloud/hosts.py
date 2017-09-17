from django.conf import settings
from django_hosts import patterns, host

host_patterns = patterns('ucloud.apps',
    host(r'www', 'welcome.urls', name='www'),
    host(r'discover', 'discover.urls', name='discover'),
    #host(r'(?!www).*', 'ucloud.settings.hosts.urls', name='wildcard_redirect'),
)
