# -*- coding: utf-8 -*-
from .base import *

# Required function for Heroku to parse the DB variables
DATABASES['default'] =  dj_database_url.config()
