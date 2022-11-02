from flask_restful import Resource, abort
from flask import jsonify, request, make_response
from flask_cors import cross_origin

from . import db
from .models import Notification, User
from .utils import login_required
from .logger import logger


class NotificatorMaster(Resource):

    @login_required(User)
    def get(self, user_id):
        """ Получаем оповещения
        """
        data = Notification.query.filter_by(user_id=user_id).all()
        data = jsonify(data)
        resp = make_response(data, 200)
        return resp

    @login_required(User)
    @cross_origin()
    def post(self, user_id):
        """ Создаем оповещение
        """
        content = request.json
        notification = Notification(**content)
        notification.user_id = user_id
        db.session.add(notification)
        db.session.commit()
        data = jsonify({'status': 'success'})
        resp = make_response(data, 200)

        return resp


class Register(Resource):

    @cross_origin()
    def post(self):
        username = request.json.get('username')
        password = request.json.get('password')
        print(username, password)
        if username is None or password is None:
            logger.error('Register has empty fields')
            abort(400)  # missing arguments
        if User.query.filter_by(username=username).first() is not None:
            logger.error('Register existing user')
            abort(400)  # existing user
        user = User(username=username)
        user.hash_password(password)
        db.session.add(user)
        db.session.commit()

        return (
            jsonify({'status': 'success', 'username': user.username, 'id': user.id}),
            201
        )


class Authorization(Resource):

    @cross_origin()
    def post(self):
        username = request.json.get('username')
        password = request.json.get('password')
        user = User.query.filter_by(
            username=username
        ).first()
        if user:
            is_verify = user.verify_password(password)
            if is_verify:
                auth_token = user.generates_auth_token(user.id)
                responseObject = {
                    'status': 'success',
                    'message': 'Successfully logged in.',
                    'auth_token': auth_token,
                    'user_id': user.id
                }
                return make_response(jsonify(responseObject)), 201
            else:
                logger.error('Authorization Wrong password')
                return jsonify({'status': 'fail', 'message': 'Wrong password'}), 404
        else:
            logger.error('Authorization User not found')
            return jsonify({'status': 'fail', 'message': 'User not found'}), 404
