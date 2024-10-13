def apply_discount(cost, discount):

weight = 10  # kg
distance = 100  # km
discount = 0.1  # 10% discount

shipping_cost = calculate_shipping_cost(weight, distance)
final_cost = apply_discount(shipping_cost, discount)

print("Shipping cost before discount:", shipping_cost)
print("Final shipping cost after discount:", final_cost)