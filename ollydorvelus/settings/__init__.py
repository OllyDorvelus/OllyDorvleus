__author__ = 'OllyD'
# from .base import *
# from .local import *
# from .base import *
from .production import *
#from .local import *

try:
    from .production import *
except:
    pass