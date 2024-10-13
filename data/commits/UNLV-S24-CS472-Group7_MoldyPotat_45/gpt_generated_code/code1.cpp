/**
 * @brief Print the current state of the musical chairs game grid.
 * 
 * This function prints out the grid representing the current state of the musical chairs game.
 * Each cell in the grid may contain information about whether it's empty, occupied by a standing person,
 * or occupied by a sitting person.
 * 
 * The grid is printed with borders made of asterisks (*) to enhance readability.
 */
void musicalChairs::printGrid() const {
    string stars(35, '*'); // String to create the border of asterisks

    // Print the top border
    cout << endl << stars << endl;

    // Loop through each row of the grid
    for (int i = 0; i < height; i++) {
        cout << '*'; // Print left border

        // Loop through each column of the grid
        for (int j = 0; j < width; j++) {
            if (grid[j][i].isEmpty()) {
                // If the cell is empty, print spaces to represent it
                cout << "   ";
            } else {
                if (grid[j][i].isThereAPersonStandingHere()) {
                    // If a person is standing in the cell, print their ID surrounded by spaces
                    cout << ' ' << grid[j][i].getPersonID() << ' ';
                } else {
                    if (!(grid[j][i].isThereAPersonSittingHere())) {
                        // If a person is not standing or sitting in the cell, print "c" surrounded by spaces
                        cout << " c ";
                    } else {
                        // If a person is sitting in the cell, print their ID surrounded by square brackets
                        cout << '[' << grid[j][i].getPersonID() << ']';
                    }
                }
            }
        }

        cout << '*' << endl; // Print right border after each row
    }

    // Print the bottom border
    cout << stars << endl << endl;
}