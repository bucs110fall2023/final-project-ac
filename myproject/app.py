from flask import Flask, render_template
import random

app = Flask(__name__)


@app.route("/")
def hello_world():
    var = random.choice(["Hello", "Goodbye"])
    return render_template("questionone.html", value=var)


@app.route("/two")
def two():
    return render_template("questiontwo.html")