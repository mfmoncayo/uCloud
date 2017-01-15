# -*- coding: utf-8 -*-
from .base import *

ALLOWED_HOSTS = []

STATIC_ROOT = os.path.join(BASE_DIR, '../staticfiles')
STATIC_URL = '/static/'

#Extra places for collectstatic to find static files.
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, '../static'),
]
