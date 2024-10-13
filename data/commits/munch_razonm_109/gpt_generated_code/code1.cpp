temp.clear();
mmsi.clear();

cout << "Enter vessel name: ";
getline(cin, temp, '\n');

// Check to see if the user wants to exit the program. 
// If not exiting, output the search string.
if (temp != "q" or temp == "Q") {
    cout << endl << "Searching for records with names containing \"" << temp << "\"" << endl;
} else {
    return 0;
}

// Search for the number of items that contain the name/phrase
// All names in the vessel dataBase are upper case, so make the search
// string upper. MMSI is built by the function and contains the vector
// of unique vessels that contain the name searched for. 
found = searchForVesselByName(dataBase, makeStringUpper(temp), mmsi);