import math
import random
import tkinter as tk

def is_odd(number):
    """Check if a number is odd."""
    return number & 1

def get_button_color(cell_position):
    """Return button color based on its position."""
    return 'green' if is_odd(cell_position) else 'blue'

class OceanMap:
    def __init__(self, master, rows=15, columns=60):
        self.master = master
        self.treasure_row = random.randrange(rows)
        self.treasure_col = random.randrange(columns)
        self.sonar_used = 0
        self.treasure_found = False
        self.setup_grid(rows, columns)

    def setup_grid(self, rows, columns):
        """Create a grid of buttons on the tkinter window."""
        for row in range(rows):
            for col in range(columns):
                button = tk.Button(self.master, text='??', font='Courier 14',
                                   fg=get_button_color(row+col),
                                   command=lambda r=row, c=col: self.drop_sonar(r, c))
                button.grid(row=row, column=col)

    def drop_sonar(self, row, col):
        """Handle sonar drop: calculate distance and update button."""
        if self.treasure_found:
            return

        distance = int(round(math.hypot(row - self.treasure_row, col - self.treasure_col)))
        button_text = '0' if distance == 0 else str(distance)
        self.master.grid_slaves(row, col)[0].configure(text=button_text, bg='yellow', fg='red')
        self.sonar_used += 1

        if distance == 0:
            print(f'You win! At the cost of {self.sonar_used} sonar devices.')
            self.treasure_found = True

def main():
    root = tk.Tk()
    game = OceanMap(root)
    root.mainloop()

if __name__ == '__main__':
    main()