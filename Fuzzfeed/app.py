from flask import Flask, render_template, send_from_directory

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('startpage.html')


@app.route('/static/<path:filename>')
def serve_static(filename):
    return send_from_directory('templates', filename)

if __name__ == '__main__':
    app.run(debug=True)

@app.route('/<path:filename>')
def serve_page(filename):
    print(filename)
    return render_template(filename)

if __name__ == '__main__':
    app.run(debug=True)
