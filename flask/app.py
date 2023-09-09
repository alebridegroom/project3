import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, text

from flask import Flask, jsonify, Response, request


import json


#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///election.sqlite")



#################################################
# Flask Setup
#################################################
app = Flask(__name__)



#################################################
# Flask Routes
#################################################


@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/federal2<br/>"

    )




@app.route("/api/v1.0/federal2")
def type2():

    alabama = text("SELECT * FROM state order by state")
    data = engine.execute(alabama)
    result = {}




    for record in (data):


        
        if record.state not in result: 
            result[record.state] = {}
        result[record.state][record.candidate]=record.votes

      

        

    

    # Convert list of tuples into normal list
    

    return make_json_response(result)


def make_json_response(content) -> Response:
    """Turns a piece of content into a json Response with CORS"""
    response = jsonify(content)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


if __name__ == '__main__':
    app.run(debug=True)
