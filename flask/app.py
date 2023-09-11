import numpy as np

from sqlalchemy.orm import Session
from sqlalchemy import create_engine,  text

from flask import Flask, jsonify, Response


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


@app.route("/api/v1.0/federal2")
def type2():


    alabama = text("SELECT * FROM state order by state")
    data = engine.execute(alabama)
    result = {}
    

    for record in (data):


        
        if record.state not in result: 
            result[record.state] = {}
        result[record.state][record.candidate]=record.votes

    

    return make_json_response(result)

@app.route("/api/v1.0/census")
def demographics()-> Response:
    census = text("SELECT * from winners where candidate = 'Hillary Clinton'")
    data = engine.execute(census)
    test = {}
    
    for stats in (data):
        if stats.state not in test:
            test[stats.state]= []
        test[stats.state].append({"county": stats.county, "votes":stats.votes, "Women": stats.Women, "mean_income": stats.IncomePerCap, "employed": stats.Employed, 
                                  "unemployed":stats.Unemployment, "poverty": stats.Poverty,
                                  "drive": stats.Drive})
        
        # test["women"]= stats.Women

    return make_json_response(test)

@app.route("/api/v1.0/census2")
def demographics2()-> Response:
    census = text("SELECT * from winners where candidate = 'Donald Trump'")
    data = engine.execute(census)
    test = {}
    
    for stats in (data):
        if stats.state not in test:
            test[stats.state]= []
        test[stats.state].append({"county": stats.county, "votes":stats.votes, "Women": stats.Women, "mean_income": stats.IncomePerCap, "employed": stats.Employed, 
                                  "unemployed":stats.Unemployment, "poverty": stats.Poverty,
                                  "drive": stats.Drive})
        
        # test["women"]= stats.Women

    return make_json_response(test)



def make_json_response(content) -> Response:
    """Turns a piece of content into a json Response with CORS"""
    response = jsonify(content)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response




if __name__ == '__main__':
    app.run(debug=True)

