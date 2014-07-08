__author__ = 'kj'

from functools import wraps

def angular(method='POST'):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            return func(*args, **kwargs)

        return wrapper
    return decorator
