from flask_cors import cross_origin
from flask_restful import Resource
from flask import make_response, jsonify


class StartPage(Resource):

    @cross_origin()
    def get(self):
        data = jsonify({"test": 1})
        response = make_response(data, 200)
        # response.headers.add('Access-Control-Allow-Origin', '*')
        return response
