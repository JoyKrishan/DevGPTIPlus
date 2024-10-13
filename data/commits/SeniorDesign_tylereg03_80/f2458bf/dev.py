import sys
import random
from random import randint

def pound_to_ounce(weight):
    return weight*16

def pound_to_kilogram(weight):
    return weight/2.205

def pound_to_gram(weight):
    return weight*453.6

def pound_to_ton(weight):
    return weight/2205

def pound_to_stone(weight):
    return weight/14

def ounce_to_pound(weight):
    return weight/16

def ounce_to_kilogram(weight):
    return weight/35.274

def ounce_to_gram(weight):
    return weight*28.35

def ounce_to_ton(weight):
    return weight/35270

def ounce_to_stone(weight):
    return weight/224

def kilogram_to_pound(weight):
    return weight*2.205

def kilogram_to_ounce(weight):
    return weight*35.274

def kilogram_to_gram(weight):
    return weight*1000

def kilogram_to_ton(weight):
    return weight/1000

def kilogram_to_stone(weight):
    return weight/6.35

def gram_to_pound(weight):
    return weight/453.6

def gram_to_ounce(weight):
    return weight/28.35

def gram_to_kilogram(weight):
    return weight*1000

def gram_to_ton(weight):
    return weight/1000000

def gram_to_stone(weight):
    return weight/6350

def ton_to_pound(weight):
    return weight*2205

def ton_to_ounce(weight):
    return weight*35270

def ton_to_kilogram(weight):
    return weight*1000

def ton_to_gram(weight):
    return weight*1000000

def ton_to_stone(weight):
    return weight*157.5

def stone_to_pound(weight):
    return weight*14

def stone_to_ounce(weight):
    return weight*224

def stone_to_kilogram(weight):
    return weight*6.35

def stone_to_gram(weight):
    return weight*6350

def stone_to_ton(weight):
    return weight/157.5

isRandom = False

if len(sys.argv) != 3:
    if len(sys.argv) == 2:
        if sys.argv[1] == "RANDOM":
            isRandom = True
        else:
            print("Welcome to the weight converter!")
            print("To use, either do: ")
            print("python3 TylerGuthrie_weightConverter.py weight unit(CAPITAL) for a specific value")
            print("python3 TylerGuthrie_weightConverter.py RANDOM for a random value")
            sys.exit()

if isRandom:
    units = ["POUND", "OUNCE", "KILOGRAM", "GRAM", "TON", "STONE"]
    weight = float(randint(1, 100))
    unit = random.choice(units)
else:
    try:
        weight = float(sys.argv[1])
        unit = sys.argv[2]
    except ValueError:
        print("Invalid use of RANDOM!\nUsage: python3 TylerGuthrie_weightConverter.py RANDOM")
        sys.exit()

if unit == "POUND":
    print(weight, unit)
    print("Ounce: ", pound_to_ounce(weight))
    print("Kilogram: ", pound_to_kilogram(weight))
    print("Gram: ", pound_to_gram(weight))
    print("Metric Ton: ", pound_to_ton(weight))
    print("Stone: ", pound_to_stone(weight))
elif unit == "OUNCE":
    print(weight, unit)
    print("Pound: ", ounce_to_pound(weight))
    print("Kilogram: ", ounce_to_kilogram(weight))
    print("Gram: ", ounce_to_gram(weight))
    print("Metric Ton: ", ounce_to_ton(weight))
    print("Stone: ", ounce_to_stone(weight))
elif unit == "KILOGRAM":
    print(weight, unit)
    print("Pound: ", kilogram_to_pound(weight))
    print("Ounce: ", kilogram_to_ounce(weight))
    print("Gram: ", kilogram_to_gram(weight))
    print("Metric Ton: ", kilogram_to_ton(weight))
    print("Stone: ", kilogram_to_stone(weight))
elif unit == "GRAM":
    print(weight, unit)
    print("Pound: ", gram_to_pound(weight))
    print("Ounce: ", gram_to_ounce(weight))
    print("Kilogram: ", gram_to_kilogram(weight))
    print("Metric Ton: ", gram_to_ton(weight))
    print("Stone: ", gram_to_stone(weight))
elif unit == "TON":
    print(weight, unit)
    print("Pound: ", ton_to_pound(weight))
    print("Ounce: ", ton_to_ounce(weight))
    print("Kilogram: ", ton_to_kilogram(weight))
    print("Gram: ", ton_to_gram(weight))
    print("Stone: ", ton_to_stone(weight))
elif unit == "STONE":
    print(weight, unit)
    print("Pound: ", stone_to_pound(weight))
    print("Ounce: ", stone_to_ounce(weight))
    print("Kilogram: ", stone_to_kilogram(weight))
    print("Gram: ", stone_to_gram(weight))
    print("Metric Ton: ", stone_to_ton(weight))
else:
    print("Invalid unit entered!\nValid units include POUND, OUNCE, KILOGRAM, GRAM, TON, STONE")


