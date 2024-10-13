from flask import Flask, request, make_response

app = Flask(__name__)

@app.route('/')
def index():
    request_id = request.headers.get('X-Request-ID', 'Unknown')
    response = make_response(f"Handled request with ID: {request_id}")
    response.headers['X-Response-ID'] = request_id  # Echoing back the Request ID in the response header
    return response

if __name__ == "__main__":
    app.run(debug=True)