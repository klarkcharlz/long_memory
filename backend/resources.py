from datetime import datetime

from flask_cors import cross_origin
from flask_restful import Resource
from flask import make_response, jsonify


class StartPage(Resource):

    @cross_origin()
    def get(self):
        data = [{
            'id': 0,
            'title': 'Тестовое напоминание',
            'description': 'Повтори уже что-нибудь!',
            'date': datetime.now()
        }]
        data = jsonify(data)
        response = make_response(data, 200)
        # response.headers.add('Access-Control-Allow-Origin', '*')
        return response
