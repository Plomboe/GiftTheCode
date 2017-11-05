# all the imports
from flask import (Flask, request, session,
                   render_template, url_for, json,
                   jsonify)
from werkzeug.utils import secure_filename

from visualization import *

import sys
import datetime
import os.path
import pandas as pd

UPLOAD_FOLDER = '.'
ALLOWED_EXTENSIONS = set(['xls', 'xlsx', 'csv'])

app = Flask(__name__) # create the application instance :)
app.config.from_object(__name__) # load config from this file , server.py
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

app.secret_key = 'super secret key'

def allowed_file(filename):
    return ('.' in filename
            and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS)

@app.route("/")
def main_page():
    print(request.method)
    return render_template('client.html')

@app.route('/dashboard', methods=['POST'])
def load_data():
    df = pd.read_excel(request.files['excel'])
    members = sorted(list(set([xx for xx in df['Member#']])))

    eventid=6
    event_data = program_graph(eventid, df)

    event_dict = {col: list(event_data[col]) for col in event_data.columns}
    event_dict.update({'month': [dd.month for dd in event_data.index]})

    #session['event_data'] = df.to_json()
    session['event_dict'] = event_dict
    return render_template('charts.html')

@app.route('/get_graph', methods=['GET'])
def get_graph():
    print('getting graph!!!!')
    #print(session['event_dict'].values())
    return json.dumps([session['event_dict']['month'],
                       session['event_dict']['all'],
                       session['event_dict']['reg'],
                       session['event_dict']['attend']])

if __name__ == "__main__":
    app.run()
