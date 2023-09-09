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
        f"/api/v1.0/federal<br/>"
        f"/api/v1.0/passengers"
    )


@app.route("/api/v1.0/federal")
def names():

    winners = text("SELECT * FROM state")
    

    data = engine.execute(winners)
    all_names = []
    result = {}
    for record in data:
        precip_dict = {}
        
        
        precip_dict["state"] = record.state
        precip_dict["candidate"] = record.candidate
        precip_dict["votes"] = record.votes
        all_names.append(precip_dict)
        
        
    # fed = {"federal": all_names}
    result["federal"] = all_names

    states = text("select * from unique_state")
    data2 = engine.execute(states)

    all_states = []

    for state in data2:
        # states_dict = {}
        # states_dict["state"]= state.state
        all_states.append(state.state)
    # stat = {"states": all_states}
    result["states"] = all_states


    
    

    # Convert list of tuples into normal list
    

    return make_json_response(result)

@app.route("/api/v1.0/federal2")
def type2():

    alabama = text("SELECT * FROM state order by state")
    data = engine.execute(alabama)
    result = {}
    all_candidates = []
    all_votes = []
    not_list = []
    great_list = []
    precip_dict = {}



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
