
#loosely following this guide
# https://towardsdatascience.com/the-right-way-to-build-an-api-with-python-cd08ab285f8f

from flask import Flask, jsonify, make_response
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS, cross_origin
import pandas as pandas
import ast
import psycopg2

apikeys = None

app = Flask(__name__)
cors = CORS(app)
api = Api(app)


class Connection:

    def __init__(self, apikeys):

        #connection info
        self.database='hackathonapp'
        self.host='127.0.0.1'
        self.port = '5432'
        #read API keys
        self.user = 'postgres'
        self.password = 'docker'

        self.conn_handle = psycopg2.connect(
            database=self.database,
            user=self.user,
            password=self.password,
            host=self.host,
            port=self.port
        )

class AircraftRef(Resource):

    #get data from aircraft reference table
    #required args: 
    #   none
    #optional args:
    #   airframe
    #   year
    #returned JSON fields:
        #rows: number of rows found
        #data:
            #data found for each row
    def get(self):

        parser = reqparse.RequestParser()
        parser.add_argument('airframe', required = False)
        parser.add_argument('year', required=False)
        parser.add_argument('num', required=False)

        n_acft_offset = 2 #row containing price is 2 + (n_aircraft)
        args = parser.parse_args()
        print(args)

        query = "select * from aircraft_annual_reference"
        watoken = ' where ' #where or and, used to chain params
        if args['airframe'] != None:
            query += watoken + 'airframe = '+ args['airframe'] 
            watoken = ' and '
        if args['fiscal_year'] != None:
            query += watoken + 'year = ' + args['year']
            watoken = ' and '
        #pretty sure this isn't needed
        #if args['num'] != None:
        #    query += watoken + 'num = ' + args['num'] + 'acft'
        #    watoken = ' and '


        query += ';'
        print(query)
        
        cursor = connect_info.conn_handle.cursor()
        cursor.execute(query)
        data = cursor.fetchall()
        #filter data for a specific number of aircraft
        if args['num'] != None:
            pass


        #No data found
        if(len(data)) == 0:
            msg = jsonify({"rows":"0"})
            return msg


        msg_dict = {}
        nrow = 0
        for row in data:
            msg_dict[str(nrow)] = str(row)
            nrow += 1
        msg_dict['rows'] = str(nrow)
        print(msg_dict)
        
    #Edit the aircraft reference
    #only PACAF sessions
    def post(self):

        pass


#Send and get exercise wing requests
class WingRequest(Resource):

    #See wing requests for an exercise
    def get(self):
        pass

    #Submit a wing request for an exercise
    def post(self):
        pass

#Get info from per diem chart
class PerDiem(Resource):
    def get(self):
        pass

#TODO:
    #submit an exercise
    #view an exercise
class Exercises(Resource):
    
    #Get exercises from the exercise table
    def get(self):
        pass
    
    #Insert an exercise into the exercise table
    def post(self):

        parser = reqparse.RequestParser()
        parser.add_argument("", required=True)
        parser.add_argument("", required=True)
        parser.add_argument("", required=True)

        pass

#Login to site
#Required args:
#   username (email)
#   password (hashed password)
#TODO: return username+rank
class Login(Resource):

    #Attempt to login
    def post(self):

        parser = reqparse.RequestParser() 

        #add arguments
        parser.add_argument('username', required=True)
        parser.add_argument('password', required=True)
        args = parser.parse_args()
        username = args['username']
        password = args['password']

        cursor = connect_info.conn_handle.cursor()
        query = 'select * from users where email_addy = \''+username +'\';'
        cursor.execute(query)
        logindata = cursor.fetchall() # returns list of tuples

        if(len(logindata)) == 0: #bad username/password
            msg = jsonify({"response":"failure"})
            msg.headers['Access-Control-Allow-Origin']='*'
            msg.headers['Access-Control-Request-Method']='POST, GET'
            msg.headers['Access-Control-Request-Headers']="Content-Type"
            return msg

        pass_db = logindata[0][6]
        permissions = logindata[0][7]
        username = logindata[0][5]
        rank = logindata[0][2]
        org = logindata[0][1]

        if pass_db == password:
            print("login success!")
            msg = jsonify({"result":"success", 
            "access":permissions,
            "username":username,
            "rank":rank,
            "org":org
            })
        else:
            print("login failed: password incorrect")
            msg = jsonify({"result":"failure"})
            #make data to return call failure 

        msg.headers['Access-Control-Allow-Origin']='*'
        msg.headers['Access-Control-Request-Method']='POST, GET, OPTIONS'
        msg.headers['Access-Control-Request-Headers']="Content-Type"
        return msg





api.add_resource(Login, "/login")
api.add_resource(AircraftRef, "/aircraft_reference")
api.add_resource(Exercises, "/exercises")
api.add_resource(WingRequest, "/wingrequest")
api.add_resource(PerDiem, "/perdiem")

if __name__ == '__main__':
    connect_info = Connection(apikeys)
    app.run()

