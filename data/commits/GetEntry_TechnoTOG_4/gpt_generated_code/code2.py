   from flask import request

   @app.route('/generate_ticket', methods=['POST'])
   def generate_ticket():
       data = request.get_json()
       x = data.get('x')
       # Use the 'x' parameter in your code
       # ...