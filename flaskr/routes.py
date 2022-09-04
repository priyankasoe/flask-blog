from flask import * 


@app.route('/')
def hello_world():
    return render_template('index.html') 
