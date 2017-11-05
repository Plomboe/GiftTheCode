# all the imports
from flask import (Flask, request, session,
                   render_template, url_for, 
                   jsonify)
from werkzeug.utils import secure_filename

from visualization import *

import sys
import os.path
import pandas as pd

UPLOAD_FOLDER = '.'
ALLOWED_EXTENSIONS = set(['xls', 'xlsx', 'csv'])

app = Flask(__name__) # create the application instance :)
app.config.from_object(__name__) # load config from this file , server.py
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return ('.' in filename
            and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS)

#---ROUTES----
@app.route("/", methods=['GET', 'POST'])
def main_page():
    if request.method == 'POST':
        df = pd.read_excel(request.files['excel'])
        print(df)
        print(type(df))
        user_id = '16950606-4873'
        user_graph_list = user_graph(user_id, df)
        user_graph_dict = dict(zip(['axis','df_all','df_attend','df_reg','percentile'], user_graph_list))
        print(user_graph_dict)
        return render_template('charts.html', data = df.to_dict())

    print(request.method)
    return render_template('client.html')

if __name__ == "__main__":
    app.run()
