# all the imports
from flask import Flask, request, session, render_template, url_for, json

app = Flask(__name__) # create the application instance :)
app.config.from_object(__name__) # load config from this file , server.py

#---ROUTES----
@app.route("/")
def movie_rater():
    # session['user_choices'] = list(np.zeros(len(content_mat)))
    # initialize random y-coordinate:
    # session['ratings_y'] = list(2.0*np.random.sample(len(content_mat)) - 1.0)
    return render_template('client.html')

if __name__ == "__main__":
    app.run()
