from datetime import datetime

# from flask_cors import cross_origin
from flask_restful import Resource
from flask import make_response, jsonify, request

from . import db
from .models import Notification


class NotificatorMaster(Resource):

    def get(self):
        """Получаем оповещения"""
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

    def post(self):
        """Создаем оповещение"""

        content = request.json
        notification = Notification(**content)
        notification.user_id = 1
        db.session.add(notification)
        db.session.commit()

        data = {'status': 'ok'}
        data = jsonify(data)
        response = make_response(data, 200)

        return response
