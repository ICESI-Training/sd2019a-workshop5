
from flask import Flask
app = Flask(__name__)

@app.route('/health')
def health():
    return 'Microservice a is ready!'

@app.route('/')
def microservice_a():
    return 'Jonathan'

if __name__ == "__main__":
    app.run(host='0.0.0.0',port=8080,debug='True')
    from flask import Flask
    app = Flask(__name__)
