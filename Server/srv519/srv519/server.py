# all the imports
from flask import (Flask, request, session,
                   render_template, redirect, 
                   url_for, json, jsonify)
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

@app.route("/", methods=['GET','POST'])
def main_page():
    print(request.method)
    if request.method == 'POST':
        return redirect(url_for('database'))
    else:
        return render_template('client.html')

@app.route('/file_loaded', methods=['POST'])
def load_data():
    print(request.files['excel'].filename)
    df = pd.read_excel(request.files['excel'])
    members = sorted(list(set([xx for xx in df['MemberNum']])))

    event_data = []
    eds = []
    for eventid in range(1,11):
        eds.append(program_graph(eventid, df))

    master_index = sorted(list(set.union(*[set(ed.index) for ed in eds])))

    for ed in eds:
        ed = ed.loc[master_index[:-1]].fillna(0)
        event_dict = {col: ed[col].tolist() for col in ed.columns}
        event_dict.update({'month': [MONTHS[dd.month] for dd in ed.index]})
        event_data.append(event_dict)

    session['event_data'] = event_data
    session['df_dict'] = df_to_dict(df)

    return render_template('client.html', 
                           filename = request.files['excel'].filename)

@app.route('/get_graph', methods=['GET'])
def get_graphs():
    return json.dumps({'event_graph': session['event_data']})

def df_to_dict(df):
    df_dict = {}
    for col in df.columns:
        df_dict[col] = df[col].tolist()
    return df_dict

if __name__ == "__main__":
    app.run()
