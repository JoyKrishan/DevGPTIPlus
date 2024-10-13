import sys

def get_change(amount, denomination):
    count = 0
    if denomination >= 1:
        while amount >= denomination:
            amount -= denomination
            count += 1
    else:
        while amount >= denomination:
            amount -= denomination
            count += 1
    return count, amount

if __name__ == '__main__':
    try:
        changeStr = input("Provide an amount in change (<= $100): $")
        change = float(changeStr)
    except ValueError:
        print("Error: Please provide a valid numerical input.")
        sys.exit()

    if change > 100:
        print("Error: Amount too large")
        sys.exit()

    # Check if the inputted float value has up to two decimal places
    if not changeStr.replace('.', '', 1).isdigit():
        print("Error: Please provide a valid monetary format.")
        sys.exit()

    denominations = [
        (20, "Twenties($20)"), 
        (10, "Tens($10)"), 
        (5, "Fives($5)"), 
        (1, "Ones($1)"), 
        (0.25, "Quarters(25¢)"), 
        (0.10, "Dimes(10¢)"), 
        (0.05, "Nickels(5¢)"), 
        (0.01, "Pennies(1¢)")
    ]

    print("Change to give back:")
    for denomination, name in denominations:
        count, change = get_change(change, denomination)
        print(f"\t{name}: {count}")