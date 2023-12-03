from flask import Flask, render_template

app = Flask(__name__, static_folder='Fuzzfeed/static', template_folder='Fuzzfeed/templates')

@app.route('/')
def index():
    return render_template('startpage.html')

if __name__ == '__main__':
    app.run(debug=True)

