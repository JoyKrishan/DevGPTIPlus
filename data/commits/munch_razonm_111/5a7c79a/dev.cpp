#include <algorithm>
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
	// Convert the vessel name to uppercase before searching
	transform(temp.begin(), temp.end(), temp.begin(), ::toupper);
	// Search for the number of items that contain the name/phrase
	// All names in the vessel dataBase are upper case, so make the search
	// string upper. MMSI is built by the function and contains the vector
	// of unique vessels that contain the name searched for. 
	found = searchForVesselByName(dataBase, temp, mmsi);
int searchForVesselByName(vector<AISType> &dataBase, string vesselName, vector<string> &s) {
    
    // Convert the search string to uppercase
    string temp = vesselName;
    transform(temp.begin(), temp.end(), temp.begin(), ::toupper);
    for (int i = 0; i < size; i++) {
        if (dataBase[i].vesselName.find(temp) != string::npos) {
            addUniqueString(s, dataBase[i].MMSI);
    return numberOfVesselsFound;
     while (true) {
        getline(inFile, line);
        if (inFile.eof())

        index = 0;
        fieldNumber = 0;

        for (int i = 0; i < fieldTotal; i++) {
            string subString = "";
            while (static_cast<unsigned int>(index) != line.length()) {
                if (line[index] != ',') {
                    subString += line[index];
                    index++;
                } else {
                    index++;
                    break;
                }
            }

            saveField(fieldNumber, subString, tempItem);
            char eraseLine[] = {'\r', 27, '[', '1', 'K'};
            if ((count % 100000) == 0) {

        item.push_back(tempItem);