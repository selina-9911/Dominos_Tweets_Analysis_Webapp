from flask import Flask
from joblib import load
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

@app.route("/userScore", methods = ['GET','POST'])
def getUserScore():
    return "user score"

if __name__ == "__main__":
    app.run()