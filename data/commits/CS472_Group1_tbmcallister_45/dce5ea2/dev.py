def calculate_total_price(products):
    return sum(product['price'] for product in products if product['price'] > 0)