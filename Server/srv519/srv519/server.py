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
    members = sorted(list(set([xx for xx in df['MemberNum']])))

    event_data = []
    for eventid in range(1,11):
        ed = program_graph(eventid, df)
        event_dict = {col: list([int(e) for e in ed[col]])
                      for col in ed.columns}
        event_dict.update({'month': [dd.month for dd 
                           in ed.index]})
        event_data.append(event_dict)

    session['event_data'] = event_data
    return render_template('charts.html')

@app.route('/get_graph', methods=['GET'])
def get_graph():
    print('I am STILL HERE!!!')
    print('getting graph!!!!')
    return json.dumps([[session['event_data'][ii]['month'],
                        session['event_data'][ii]['all'],
                        session['event_data'][ii]['reg'],
                        session['event_data'][ii]['attend']]
                        for ii in range(len(session['event_data']))])

if __name__ == "__main__":
    app.run()
