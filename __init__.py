from flask import * 

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html') 

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/posts')
def posts():
    return render_template('posts.html')

if __name__ == '__main__':
    app.run(port=5000, debug=True)