from flask import Flask, request
from joblib import load
import os
import json
import ast
import numpy as np
from models.dataCleaning import clean
from models.userModel import predict


app = Flask(__name__)

@app.route("/dominoScore", methods = ['GET'])
def getScore():
    ''' in the model file put: 
    from joblib import dump, load
    dump(model, 'model.joblib')   //put model.joblib to this directory
    '''
    input = np.array([[11]])   #need to change this input to request actual data from database/api
    model = load('sampleModel.joblib')
    predicted = model.predict(input)
    result = {"score": "(ml result" + str(predicted) + ')'}
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