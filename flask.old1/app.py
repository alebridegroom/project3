import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, text

from flask import Flask, jsonify

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
    # # Create our session (link) from Python to the DB
    # session = Session(engine)

    # """Return a list of all passenger names"""
    # # Query all passengers
    # results = session.query(Passenger.county).all()

    # session.close()
    winners = text("SELECT * FROM state, unqiue_state")
    

    data = engine.execute(winners)
    all_names = []
    all_states = []
    for record, state in data:
        precip_dict = {}
        state_dict = {}
        state_dict["state"] = state.state
        precip_dict["state"] = record.state
        precip_dict["candidate"] = record.candidate
        all_names.append(precip_dict)
        all_states.append(state_dict.state)
    fed = {"federal": all_names}
    states = {"states": all_states}

    # Convert list of tuples into normal list
    

    return jsonify(fed), jsonify(states)


# @app.route("/api/v1.0/passengers/<passenger_name>")
# def passengers(passenger_name):
#     # Create our session (link) from Python to the DB
#     session = Session(engine)

#     """Return a list of passenger data including the name, age, and sex of each passenger"""
#     # Query all passengers
#     results = session.query(Passenger.name, Passenger.age, Passenger.sex).all()

#     session.close()

#     # Create a dictionary from the row data and append to a list of all_passengers
#     all_passengers = []
#     for name, age, sex in results:
#         passenger_dict = {}
#         if (passenger_name == name):
#             passenger_dict["name"] = name
#             passenger_dict["age"] = age
#             passenger_dict["sex"] = sex
#             all_passengers.append(passenger_dict)

#     return jsonify(all_passengers)


if __name__ == '__main__':
    app.run(debug=True)
