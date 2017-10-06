from django.conf import settings
from django_hosts import patterns, host

host_patterns = patterns('ucloud.apps',
    host(r'www', 'welcome.urls', name='www'),
    host(r'discover', 'discover.urls', name='discover'),
    host(r'journey', 'journey.urls', name='journey'),
    host(r'finance', 'finance.urls', name='finance'),
    host(r'health', 'health.urls', name='health'),
    host(r'education', 'education.urls', name='education'),
    host(r'w', 'welcome.urls', name='w'),
    host(r'd', 'discover.urls', name='d'),
    host(r'j', 'journey.urls', name='j'),
    host(r'f', 'finance.urls', name='f'),
    host(r'h', 'health.urls', name='h'),
    host(r'e', 'education.urls', name='e'),
    #host(r'(?!www).*', 'ucloud.settings.hosts.urls', name='wildcard_redirect'),
)
