# -*- coding: utf-8 -*-
from .base import *

# Required function for Heroku to parse the DB variables
db_from_env = dj_database_url.config(conn_max_age=500)
DATABASES['default'] =  dj_database_url.config()