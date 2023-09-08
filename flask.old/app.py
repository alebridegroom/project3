import numpy as np
import pandas as pd
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, inspect

from flask import Flask, jsonify
import datetime as dt
from sqlalchemy import Column, Integer, String, Float

from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

# class census(Base):
#     __tablename__ = "census"
#     State = Column(String)
#     County = Column(String, primary_key=True)
#     Women = Column(Float)
#     White= Column(Float)
#     Citizen = Column(Float)
#     IncomePerCap = Column(Float)
#     Poverty = Column(Float)
#     ChildPoverty = Column(Float)
#     Professional = Column(Float)
#     Service = Column(Float)
#     Office = Column(Float)
#     Construction = Column(Float)
#     Production = Column(Float)
#     Drive = Column(Float)
#     Carpool = Column(Float)
#     Transit = Column(Float)
#     Walk = Column(Float)
#     OtherTransp = Column(Float)
#     WorkAtHome = Column(Float)
#     MeanCommute = Column(Float)
#     Employed = Column(Float)
#     PrivateWork = Column(Float)
#     PublicWork = Column(Float)
#     SelfEmployed= Column(Float)
#     FamilyWork = Column(Float)
#     Unemployment = Column(Float)
#     Minority = Column(Float)

# class election(Base):
#     __tablename__ = "election"
#     ID = Column(Integer, primary_key=True)
#     county = Column(String)
#     fips = Column(Integer)
#     candidate = Column(String)
#     state = Column(String)
#     votes = Column(Integer)



# class federal(Base):
#     __tablename__ = "federal"
#     ID = Column(Integer, primary_key=True)
#     candidate = Column(String)
#     votes = Column(Integer)



# class federal(Base):
#     __tablename__ = "federal"
#     ID = Column(Integer, primary_key=True)
#     candidate = Column(String)
#     votes = Column(Integer)


# class state(Base):
#     __tablename__ = "state"
#     ID = Column(Integer, primary_key=True)
#     candidate = Column(String)
#     state = Column(String)
#     votes = Column(Integer)

# class winners(Base):
#     __tablename__ = "winners"
#     ID = Column(Integer, primary_key=True)
#     county = Column(String)
#     fips = Column(Integer)
#     candidate = Column(String)
#     state = Column(String)
#     votes = Column(Integer)
#     total = Column(Integer)
#     pct = Column(Float)
#     Women = Column(Float)
#     White= Column(Float)
#     Citizen = Column(Float)
#     IncomePerCap = Column(Float)
#     Poverty = Column(Float)
#     ChildPoverty = Column(Float)
#     Professional = Column(Float)
#     Service = Column(Float)
#     Office = Column(Float)
#     Construction = Column(Float)
#     Production = Column(Float)
#     Drive = Column(Float)
#     Carpool = Column(Float)
#     Transit = Column(Float)
#     Walk = Column(Float)
#     OtherTransp = Column(Float)
#     WorkAtHome = Column(Float)
#     MeanCommute = Column(Float)
#     Employed = Column(Float)
#     PrivateWork = Column(Float)
#     PublicWork = Column(Float)
#     SelfEmployed= Column(Float)
#     FamilyWork = Column(Float)
#     Unemployment = Column(Float)
#     Minority = Column(Float)
#     mean_income_above_24K = Column(String)

engine = create_engine("sqlite:///election.sqlite")
Base.metadata.create_all(engine)


session = Session(bind=engine)


################################################
# Flask Setup
################################################
app = Flask(__name__)

def welcome():
    """List all available api routes."""
    return (
        f"/api/v1.0/statesum<br/>"
        f"/api/v1.0/stations<br/>"
        f"/api/v1.0/tobs<br/>"
        f"/api/v1.0/start<br/>"
        f"/api/v1.0/start/end note: put date in yyyy-mm-dd"
    )








if __name__ == '__main__':
    app.run(debug=True)