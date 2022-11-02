from datetime import date, datetime, timedelta
import json

from flask.json import JSONEncoder
from flask import jsonify, request, make_response
from sqlalchemy.ext.declarative import DeclarativeMeta

from .logger import logger


class CustomJSONEncoder(JSONEncoder):
    def default(self, obj):
        try:
            if isinstance(obj, date):
                return obj.isoformat()
            if isinstance(obj.__class__, DeclarativeMeta):
                fields = {}
                for field in [x for x in dir(obj) if not x.startswith('_') and x != 'metadata']:
                    data = obj.__getattribute__(field)
                    try:
                        json.dumps(data)
                        fields[field] = data
                    except TypeError:
                        fields[field] = None
                return fields
            iterable = iter(obj)
        except TypeError as err:
            logger.exception(err)
        else:
            return list(iterable)
        return JSONEncoder.default(self, obj)


def get_first_date():
    first_date = datetime.now().date() + timedelta(days=1)
    return first_date


def login_required(user_model):
    def outer(view):
        def wrapper(*args, **kwargs):
            auth_header = request.headers.get('Authorization')
            if auth_header:
                auth_token = auth_header.split(" ")[1]
                if auth_token:
                    resp = user_model.decode_auth_token(auth_token)
                    if not isinstance(resp, str):
                        resp = view(*args, **kwargs)
                        return resp
                    else:
                        resp = jsonify({'status': 'fail', 'message': resp}), 401
                        logger.error(resp)
                else:
                    resp = jsonify({'status': 'fail', 'message': 'Empty auth token.'}), 401
                    logger.error('Empty auth token')
            else:
                resp = jsonify({'status': 'fail', 'message': 'Not found Authorization in headers'}), 401
                logger.error('Not found Authorization in headers')
            resp = make_response(*resp)
            return resp
        return wrapper
    return outer
