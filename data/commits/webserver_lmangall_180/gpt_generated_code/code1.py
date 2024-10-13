from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def index():
    request_id = request.args.get('request_id', 'Unknown')
    return f"Received request with ID: {request_id}"

if __name__ == "__main__":
    app.run(debug=True)