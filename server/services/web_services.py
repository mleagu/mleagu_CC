from django.http import HttpResponse
from django.db.models.query import QuerySet
import json
import re


def format_response(obj, mode):

    if isinstance(obj, QuerySet):
        obj = list(obj)
    response = HttpResponse(json.dumps(obj), content_type="application/json", status=200)
    return response


def covert_obj(obj_item, mode):

    def convert_to_underscore(item):
        s1 = re.sub('(.)([A-Z][a-z]+)', r'\1_\2', item)
        return re.sub('([a-z0-9])([A-Z])', r'\1_\2', s1).lower()

    def convert_to_camelcase(item):
        return ''.join(word.title() if i else word for i, word in enumerate(item.split('_')))

    def convert_key(current_key, current_item, returned=False):
        new_key = None
        if mode == 'to camelcase':
            new_key = convert_to_camelcase(current_key)
        elif mode == 'to underscore':
            new_key = convert_to_underscore(current_key)
        current_item[new_key] = current_item.pop(current_key)
        if returned:
            return new_key

    for key in obj_item:
        if isinstance(key, dict) or isinstance(key, list):
            covert_obj(key, mode)
        elif isinstance(obj_item, list):
            continue
        elif isinstance(obj_item[key], dict) or isinstance(obj_item[key], list):
            parsed_key = convert_key(key, obj_item, True)
            covert_obj(obj_item[parsed_key], mode)
        else:
            convert_key(key, obj_item)
    return obj_item
