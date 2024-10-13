    @app.route('/generate_qr', methods=['POST'])
    def generate_qr_code():
        data = request.get_json()
        qr_data = data.get("qr_data")
        # Code to generate QR code using qr_data goes here
        return jsonify({"message": "QR code generated successfully"})