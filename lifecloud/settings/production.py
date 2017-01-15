# -*- coding: utf-8 -*-
from .base import *

import dj_database_url
# Required function for Heroku to parse the DB variables
DATABASES['default'] =  dj_database_url.config()
