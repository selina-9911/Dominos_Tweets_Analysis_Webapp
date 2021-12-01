from flask import Flask, request
from joblib import load
import os
import json
import ast
import numpy as np
from models.dataCleaning import clean
from models.userModel import predict
from models.SparkML import sparkPredict


app = Flask(__name__)

@app.route("/dominoScore", methods = ['GET'])
def getScore():
	result = {"score": 4}
	return result

@app.route("/getUserScore", methods = ['GET','POST'])
def userScore():
    if request.method == "POST":
        result = request.data
        result = json.loads(result.decode("utf-8"))
        clean(result) #clean data and send to firebase
        score = str(predict())
        return {"score": score}
    
    return "default"

if __name__ == "__main__":
	app.run(use_reloader=True)
