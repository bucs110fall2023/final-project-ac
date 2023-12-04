from flask import Flask, render_template, send_from_directory
import os
import logging

app = Flask(__name__)
logging.basicConfig(level=logging.DEBUG)

# Route to serve the HTML page
@app.route('/')
def index():
    return render_template('startpage.html')

# Route to serve static files (CSS, JS, images)
@app.route('/questionone')
def question_one():
    #src_folder = os.path.join(os.getcwd(), 'template')
    return render_template('templates/questionone.html')

if __name__ == '__main__':
    app.run(debug=True)