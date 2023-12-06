from flask import Flask, render_template, send_from_directory, abort

app = Flask(__name__, template_folder='templates')

@app.route('/')
def index():
    return render_template('startpage.html')

@app.route('/static/<path:filename>')
def serve_static(filename):
    return send_from_directory('static', filename)

@app.route('/<path:filename>')
def serve_page(filename):
    try:
        return render_template(filename)
    except:
        abort(404)  

if __name__ == '__main__':
    app.run(debug=True)
