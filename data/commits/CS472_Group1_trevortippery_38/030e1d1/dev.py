def proper_capitalization():

    selection = input("Choose: rock, paper, or scissors?").lower()

    if selection == "rock":
        return "Rock"
    elif selection == "paper":
        return "Paper"
    elif selection == "scissors":
        return "Scissors"
    else:
        print("Not a valid choice!")
        return "Error"