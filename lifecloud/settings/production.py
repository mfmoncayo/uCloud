# -*- coding: utf-8 -*-
from .base import *

ALLOWED_HOSTS = ['lifecloud.herokuapp.com']

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

import dj_database_url
# Required function for Heroku to parse the DB variables
DATABASES['default'] =  dj_database_url.config()

STATIC_ROOT = os.path.join(BASE_DIR, '../staticfiles')
STATIC_URL = '../static/'

#Extra places for collectstatic to find static files.
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, '../static'),
]
