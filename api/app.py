from flask import Flask, request
from joblib import load
import os
import json
import numpy as np

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
        result = json.dumps(result.decode("utf-8"))
        
        # file = request.files['file']
        # filepath = os.path.join('data',file.filenname)
        # file.save(filepath)

        # return {"value": str(file.name)}
        
        return result
    return "default"

if __name__ == "__main__":
    app.run()