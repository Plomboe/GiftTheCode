# all the imports
from flask import Flask, request, session, render_template, url_for, json
from werkzeug.utils import secure_filename

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
        print('hello!!!')
        print(request.method)
        #print(request)
        #print(request.files)
        print("It's me!!!")
        print(request.files.to_dict())
        print(pd.read_excel(request.files['excel']))

    print(request.method)
    return render_template('client.html')

if __name__ == "__main__":
    app.run()
