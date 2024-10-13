#include <iostream>
#include <cctype> // for toupper()

using namespace std;

int main() {
    char input;
    int Caccounts = 0; // Example initializations
    int Saccounts = 0;
    int count = 0; // Assuming count is required for writeFile()

    void displayMainMenu();

    do {
        displayMainMenu();
        cin >> input;
        input = toupper(input); // Convert input to uppercase for consistency

        switch (input) {
            case 'D':
                // processMoney(Caccounts, Saccounts, true, false);
                break;
            case 'W':
                // processMoney(Caccounts, Saccounts, false, true);
                break;
            case 'Q':
                // writeFile(/* Pass necessary arguments */);
                cout << "Goodbye!" << endl;
                break;
            default:
                cout << "Invalid selection. Please try again." << endl;
                break;
        }
    } while (input != 'Q');


    return 0;
}

void displayMainMenu() {
    cout << "Main Menu" << endl;
    cout << "Please make your selection" << endl;
    cout << "D - Deposit money" << endl;
    cout << "W - Withdraw money" << endl;
    cout << "Q - Quit" << endl;
    cout << "Selection: ";
}