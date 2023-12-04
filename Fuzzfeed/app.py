from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

# Route to serve the HTML page
@app.route('/')
def index():
    return render_template('startpage.html')

# Route to serve static files (CSS, JS, images)
@app.route('/src/<path:filename>')
def serve_static(filename):
    src_folder = os.path.join(os.getcwd(), 'src')
    return send_from_directory('src', filename)

if __name__ == '__main__':
    app.run(debug=True)

