
'''
    Below you will find the instructions of how this code actually works:
1. Import Statements: The game imports math for mathematical calculations, 
    random for generating random numbers, and tkinter for creating the GUI.
2. The odd Function: This helper function determines if a number is odd by 
    using the bitwise AND operator (&). It's used to alternate button colors 
    between green and blue.
3. The color Function: It returns 'green' for odd numbers and 'blue' otherwise, 
    determining the foreground color of the buttons.
4. The Map Class: The core of the game, representing the ocean map.
    - Initialization (__init__): It randomly places a treasure chest within the grid. 
      It also creates a 2D grid of buttons using tkinter, with each button representing 
      a possible location for the sonar to be dropped. The command for each button uses 
      a lambda function capturing the row and column (r, c) so that when clicked, it 
      calls the __call__ method with the button's coordinates.
    - Magic Methods (__bool__ and __call__):
        - __bool__ returns True if the treasure is found, influencing the game's logic 
          flow.
        - __call__ acts as the event handler for button clicks, calculating the distance 
          to the treasure, updating the button's appearance, and checking if the treasure has 
          been found.
5. Distance Calculation: Uses the Euclidean distance formula to calculate the distance 
    from the clicked location to the treasure's location.
6. Gameplay Logic: Upon clicking a button (dropping a sonar device), the game displays 
    the distance to the treasure on that button, changes its background to yellow and 
    text to red, and increments the cost (number of sonar devices used).
7. Win Condition: If the distance is 0 (the button clicked is where the treasure is), 
    it prints a victory message with the cost and stops accepting further input.
8. The main Function: Creates the tkinter root window, initializes the Map object 
    (starting the game), and cleans up after the game window is closed.

'''