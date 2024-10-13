// Include libraries
#include <iostream>
#include <fstream>
#include <vector>
#include <sstream>
#include <string>
#include <cmath>

using namespace std;

// Structure to hold item data
struct AISType
{
    string MMSI;                // 0
    string baseDateTime;        // 1
    double  lattitude;          // 2
    double longitude;           // 3
    double sog;                 // 4
    double cog;                 // 5
    double heading;             // 6
    string vesselName;          // 7
    string imo;                 // 8
    string callSign;            // 9
    string vesselType;          // 10
    string status;              // 11
    double length;              // 12
    double width;               // 13
    double draft;               // 14
    string cargo;               // 15
    string transceiverClass;    // 16
};

// Prototypes for functions
void readFile( ifstream & inFile, vector<AISType> &item, int& count);
bool openInputFile( ifstream & inFile );
string makeStringUpper( string s);
int searchForVesselByName( vector<AISType> & dataBase,  string vesselName,
                    vector<string> & s );
void printRecord( AISType & item );
bool getNextField(string &line, int &index, string &subString);
double stringConvert(string);
int findLastOccurrance(string mmsi, vector<AISType> &d);
int findFirstOccurrance(string mmsi, vector<AISType> &d);
void addUniqueString( vector<string> &s, string value);
void saveField( int fieldNumber, string subString,  AISType &tempItem );
double distanceTraveled( vector<AISType> & dataBase, int first, int last );

int main()
{
    // number of records read into the dataBase
    int count=0;

    // the dataBase
    // vector type is used because it's too big for an array.
    // (on my computer anyway)
    vector<AISType> dataBase;
    vector<string> mmsi;

    // input file
    ifstream inFile;

    // temporary strings
    string temp;
    string ansYN;

    int found=0;
    string stars="";
    int first =0, last =0;

    // open the input file
    if (openInputFile( inFile ) )
           cout << "File opened correctly " << endl;
    else{
        cout << "Error opening file"<< endl << "Existing...." << endl;
        return 0;
    }

    // read the entire file into the dataBase
    readFile( inFile, dataBase, count);

    cout << count << " records read "<<endl;

    cin.ignore( 40, '\n');

    // user interaction loop
    do{

        // prompt the user for the input to search for.  q to quit
        temp.clear();
        mmsi.clear();

        cout << "Enter vessel name: ";

        // read the user input.  getline is used so that spaces may be included
        // in the input
        getline(cin, temp, '\n');

        // check to see if the user wants to exit the program. 
        // If not exiting, output the search string.
        if ( temp != "q" or temp == "Q" ){
            cout << endl<< "Searching for records with names containing \"" 
                 << temp << "\"" << endl;
        }else
            return 0;

        // search for the number of items that contain the name/phrase
        // All names in the vessel dataBase are upper case, so make the search
        // string upper.  MMSI is built by the function and contains the vector
        // of unique vessels that contain the name searched for. 
        found = searchForVesselByName( dataBase,  makeStringUpper(temp), mmsi );

        // Let the user know if any ships were found with the name
        if( found <= 0) {
            cout << "Vessel \"" << temp << "\" not found" << endl;
            continue;
        }else{
            // output the results of the search
            cout << stars << endl;
            cout << found << " vessels found with name containing \"" << temp 
                 << "\", ";
            cout <<  "Unique vessels: " <<  mmsi.size()  << endl;
            cout << stars << endl;

            // ships were found, see if the user wants to display them
            cout << mmsi.size() << " vessels found. Would you like to see their"
                << " first records? [y/n] " ;
            cin >> ansYN;

            if (ansYN =="y" or ansYN == "Y"){

                // print all the first records for the ships found
                for (unsigned int i=0; i<mmsi.size(); i++){

                    // find the vessels using MMSI and print the records
                    int index = findFirstOccurrance( mmsi[i], dataBase );

                    // verify that a valid record was found, print the record
                    if ( index != -1)
                     printRecord( dataBase[index]);
                }
            
     
                // Ask user if they want to calculate the distance traveled for
                // the vessel.
                cout << "Would you like to find the distance traveled for a vessel?"
                        " [y/n] " ;
                cin >> ansYN;

                if (  ansYN == "y" or ansYN == "Y"){
                    cout <<  "MMSI for vessel: ";
                    cin >> temp;
                    cout << stars << endl;

                    // locate the index value of the first and last record
                    first = findFirstOccurrance( temp, dataBase);
                    last = findLastOccurrance( temp, dataBase);

                    //output the sitances and miles traveled
                    cout << "Vessel: \"" << dataBase[first].vesselName;
                    cout << "\" MMSI: " << dataBase[first].MMSI;
                    cout << " Trip Starting time: " << dataBase[first].baseDateTime;
                    cout << endl;
                    cout << "Distance Traveled from (" << dataBase[first].lattitude;
                    cout << ", " << dataBase[first].longitude << ") to (";
                    cout << dataBase[last].lattitude << ", ";
                    cout << dataBase[last].longitude << ") ";
                    cout << distanceTraveled(dataBase, first, last);
                    cout << " Miles" << endl;
                    cout << endl;
                }    
            }
        }
        cin.ignore( 40, '\n');

    }  while ( true );

}

/*  distanceTraveled - 
        calculates the distance travelled by the vessel based on its first and last 
        recorded longitude and lattitude, using index values to find the values.
    parameters-
        vector<AISType>& dataBase - collection of vessels in time sequential order according to .csv inputted
        int first - index of the first occurrance of the requested vessel's MMSI
        int last - index of the last occurrance of the requested vessel's MMSI
    return value - 
        distance travelled based on haversine equation as a double
    Algorithm -
        Calculate the distance in three steps: Solve for a, then using the value assigned to a, solve for c. 
        Finally, using the value assigned to c, solve for d, and return d.
*/
double distanceTraveled( vector<AISType> & dataBase, int first, int last ){
   
    if (static_cast<unsigned int>(first) >= dataBase.size() || static_cast<unsigned int>(last) >= dataBase.size() || first < 0 || last < 0)
      return 0.0; //if any of these terms are met, at least one index is bad
    
    const double R = 3958.8; //mean radius of the Earth in miles
    const double PI = 3.14159; 
    double latStart = dataBase[first].lattitude;
    double latEnd = dataBase[last].lattitude;
    double longStart = dataBase[first].longitude;
    double longEnd = dataBase[last].longitude;
    double a, c, d;

    a = pow( sin( ((latEnd - latStart)*PI/180)/2), 2) + cos(latStart*PI/180)*cos(latEnd*PI/180)*pow( sin( ((longEnd - longStart)*PI/180)/2), 2); //calculation for a
    c = 2 * atan2(sqrt(a), sqrt(1-a)); //calculation for c
    d = R*c; //calculation for d: distance traveled
    return d;
}

/* findLastOccurrance - finds the last occurrance of an entry in the dataBase 
   using the MMSI as the matching criterion. The vector is search from the 
   last entry forward.  The vector  data is in time sequential order.
   string mmsi - the MMSI of the desired vessel.
   vector<AISType & d - the dataBase of vessels.  This is passed by reference
            for efficiency.

    return value - the index of the last record in the dataBase for the vessel
            with the matching MMSI.  If the MMSI is not found, return -1.

    Algorithm
        Use a for loop the to seach from the last element of the vecotor toward
        the first. Since the data is time ordered, oldest first, search the 
        vector from the bottom towards the top. This is a linear search and
        returns as soon as a match is found.  

*/
int findLastOccurrance(string mmsi, vector<AISType> &d)
{
  for(int i = d.size()-1; i > 0; i--){ //linear search backwards through the vector of vessels
        if(mmsi == d[i].MMSI) //if the matching mmsi is found, indicate which vessel by returning its index
          return i;
    }
  return -1; //if the MMSI could not be found
}

/*  findFirstOccurrance - 
        finds the first occurrance of an entry in the dataBase
        using passed MMSI as reference. Linear search is done from the first
        entry to the last entry. The vector data is in time sequential order.
    parameters - 
        string mmsi - the MMSI of the vessel requested
        vector<AISType &d> - data base of the vessels as according to the .csv
        file passed
    return value - 
        the index of the first occurrance of the vessel with the
        passed MMSI. If the MMSI cannot be found, return -1                                             //deleted content: returns 0 //delet
    Algorithm - 
        Use a for-loop to iterate through the vector database. Since the data is
        time ordered, search front to back. If the matching MMSI is found, return
        the current index. If it isn't found, the for-loop will be naturally left
        and return -1                                                                                   //deleted content: return 0 //delet
*/
int findFirstOccurrance(string mmsi, vector<AISType> &d)
{
    for(int i = 0; static_cast<unsigned int>(i) < d.size(); i++){ //linear search forwards through the vector of vessels
        if(mmsi == d[i].MMSI) //if the matching mmsi is found, indicate which vessel by returning its index
          return i;
    }
  return -1; //if the MMSI could not be found
}

/*  searchForVesselByName - 
        searches for vessels containing the user-inputted string in the vector.
    parameters - 
        vector<AISType> &dataBase - database of the vessels as according to the .csv
        file passed
        string vesselName - user-inputted string that will be matched through the function
        vector<string> &s - list of uniquely named ships that contain the user-inputted string
    return -
        total number of vessels containing the string found as an int
    Algorithm - 
        Since the vessel names are fully in upper case, change the passed string to full caps
        using makeStringUpper() function. Use a for-loop to iterate through the database to look
        for vessels that contain the string. If the string is found in the vessel name, increment
        the vessel count and check if the ship was already found by passing in that vessel's 
        MMSI and checking it against vector<string> s into addUniqueString() function.
*/
int searchForVesselByName( vector<AISType> & dataBase, string vesselName, vector<string> &s)
{
    int size = dataBase.size();
    int numberOfVesselsFound = 0;
    string temp = makeStringUpper(vesselName); //makes search term in all caps since the vector of vessel names is in all caps

    for(int i = 0; i < size; i++){
        if(dataBase[i].vesselName.find(temp) != string::npos){ //checks if the search term exists in the vessel's vesselName field
            addUniqueString(s, dataBase[i].MMSI); //checks to see if the vesselName has already been recorded
            numberOfVesselsFound++;
        }
    }
    return numberOfVesselsFound; 

}

/*  addUniqueString - 
        checks if the passed vessel name already exists in the vector of uniquely named
        vessels
    parameters - 
        vector<string> &s - list of uniquely named vessels
        string value - the vessel name being compared against existing names
    return value - 
        void. passes the vector by reference whether something was added or not
    Algorithm -
        Test if the vector is empty. If it is, add the passed name because if there's
        nothing in the vector, the passed name must be unique. Otherwise, use a for-loop
        to iterate through the list of unique names to check if the passed value already
        exists. If found, end function. If value was not found, let for-loop naturally end
        and add the vessel name to the end of the vector.
    
*/
void addUniqueString( vector<string> &s, string value){
    int size = s.size();

    if (s.empty()){ //if the vector is empty, then the value must be unique, so add it into the vector
        s.push_back(value);
        return;
    }

    for(int i = 0; i < size; i++){ //iterate through the vector of recorded unique vessel names
        if(s[i] == value) //if the matching value is found, do not add it to the vector, then end function
            return;
        
    }
    s.push_back(value); //if the matching value was not found, it must be unique, so add it into the vector
}

/*  stringConvert - 
        converts a passed string to a double
    parameters -
        string s - string composed solely of numeric characters
    return value - 
        returns the string converted to a double as a double
    Algorithm - 
        Use stringstream to hold the string in the buffer. Use stringstream to convert
        the held string into a double. Return the value
*/
double stringConvert(string s){
    double value;
    stringstream ss; 

    ss << s; //store the string into the buffer
    ss >> value; //convert the stored string into a double
    return value;  // the string passed as a double
}


/*  printRecord -
        prints the 17 member fields of the vessel passed into the function
    paramaters -
        AISType &item - a vessel that is printed if user wants to read the data
        of the unique vessels
    return value - 
        void. The vessel is passed by referencem but is only accessed and not mutated
    Algorithm - 
        Print a line of asterisks to distinguish the data from previous entries. Print the
        17 member fields of the vessel with a label and line breaks. Print two additional
        line breaks to distinguish the data from future entries
*/
void printRecord( AISType &item )
{
    cout << "************************" << '\n' //dividing asterisk line
         << "MMSI:         " << item.MMSI << '\n'
         << "Base Date Time: " << item.baseDateTime << '\n'
         << "Lattitude: " << item.lattitude << " Longitude: " << item.longitude << '\n'
         << "SOG: " << item.sog << '\n'
         << "COG: " << item.cog << '\n'
         << "Heading: " << item.heading << '\n'
         << "Vessel Name: " << item.vesselName << '\n'
         << "imo: " << item.imo << '\n'
         << "Call Sign: " << item.callSign << '\n'
         << "Vessal Type: " << item.vesselType << '\n' //typo known: to match example output
         << "Status: " << item.status << '\n'
         << "Length: " << item.length << '\n'
         << "Width: " << item.width << '\n'
         << "Draft: " << item.draft << '\n'
         << "Cargo: " << item.cargo << '\n'
         << "Transceiver Class: " << item.transceiverClass << "\n\n\n"; //extra linebreaks in accordance to example output

}

/*  openInputfile - 
        Prompts user for an input file name and tries to open it
    parameters - 
        ifstream &inFile - input file stream that will hold the data from an expected .csv file
    return value - 
        opened file stream is passed by reference. If the user inputted file name could not be 
        opened or user inputs "q" or "Q", return false, which will result in program exiting. 
        If file could be opened, return true.
    Algorithm - 
        Prompt user for an input file name. If the user inputs a "q" or "Q" return false. Convert the
        user input into a c-string and attempt to open the file with it. If it could not be opened, return
        false. If it could be opened, return true.
*/
bool openInputFile( ifstream & inFile )
{
    string fileName;
    cout << "Enter input File Name/(q-quit): ";
    cin >> fileName;

    if (fileName == "q" || fileName == "Q")  //if user wants to quit
        return false;
    
    inFile.open(fileName.c_str()); //open the c-string of the file name
    if (!inFile.is_open()) //if the file could not be opened
         return false;
    return true; //if user's file could be opened
}

/*  readFile - 
        reads from the .csv file and enters the values into an AISType vector
    parameters -
        ifstream &inFile - input .csv file that contains vessel data in time sequential order
        vector<AISType> &item - database of vessels in time sequential order as per .csv file
        int &count - total number of vessels read through by the program
    return value - 
        void. passes count of vessels read by reference
    Algorithm - 
        Since the number of vessel entries is unknown, use a while-loop to iterate through the file. Read
        the file line by line, until the end of file is reached, in which case, break. Reset the index and
        number of fields to zero to prepare for this line. Use a for-loop within the while-loop to parse
        through the line being read. Call getNextField() to modify local subString variable to hold the value
        found between the commas. Call saveFiled() to send the substring into its AISType record object. Increment
        the field number and empty the subString in preparation for the next entry value. Iterate through the
        line until the end of line is reached, and then exit the for-loop. The vessel should be fully read into the
        file, so add it to the end of the vector database. Increment the count. Keeping iterating through until
        end of file is reached.
*/
void readFile( ifstream & inFile, vector<AISType> &item, int& count)
{
    //variables
    AISType tempItem;
    string line, subString;
    int index, fieldNumber; //controls parsing and assigning
    const int fieldTotal = 17; //total number of fields

    cout << "----------------------" << '\n'; //this line is added to match example output

    while(true){ //exit condition is in body: inFile.eof()
        getline(inFile, line); //gets the entry of the vessel
        if(inFile.eof()) //if the end of file is reached, the file is done being read, so break
            break;
        index = 0; 
        fieldNumber = 0; 
        for(int i = 0; i < fieldTotal; i++){ 
            getNextField(line, index, subString); //parse for each value
            saveField(fieldNumber, subString, tempItem); //send parsed value into the vector
            fieldNumber++;
            subString = "";

            // Output the number processed. If the number update stops, then
            // their may be problem with the program.
            char eraseLine[]={'\r',27,'[','1','K'};
            if( (count % 100000 ) == 0){
                cout << eraseLine << count;
                cout.flush();
            }

        }
        item.push_back(tempItem); //send the filled vessel object into the database
        count++;
    }
   cout << "--- End of file reached ---Items read: " << count << '\n';	//this code had been added to match the example output
}

/*  saveField - 
        Enters the passed substring into the vessel record, converting it if necessary.
    parameters - 
        int fieldNumber - the count of field number used to determine which member field will be filled by the 
        substring
        string subString - the value to be entered into the vessel record as a string
        AISType &tempItem - vessel record object that the function will read into
    return - 
        void. returns the modified vessel record by reference
    Algorithm - 
        Use a switch case to determine which field member the passed substring will assign to. Call stringConvert()
        function to cast the string into a double if needed. If an unknown field number has been passed, output an
        error message
*/
void saveField( int fieldNumber, string subString,  AISType &tempItem ){        
    switch (fieldNumber){
        case 0:
            tempItem.MMSI = subString; break;
        case 1:
            tempItem.baseDateTime = subString; break;
        case 2:
            tempItem.lattitude = stringConvert(subString); break;
        case 3:
            tempItem.longitude = stringConvert(subString); break;
        case 4:
            tempItem.sog = stringConvert(subString); break;
        case 5:
            tempItem.cog = stringConvert(subString); break;
        case 6:
            tempItem.heading = stringConvert(subString); break;
        case 7:
            tempItem.vesselName = subString; break;
        case 8:
            tempItem.imo = subString; break;
        case 9:
            tempItem.callSign = subString; break;
        case 10:
            tempItem.vesselType = subString; break;
        case 11:
            tempItem.status = subString; break;
        case 12:
            tempItem.length = stringConvert(subString); break;
        case 13:
            tempItem.width = stringConvert(subString); break;
        case 14:
            tempItem.draft = stringConvert(subString); break;
        case 15:
            tempItem.cargo = subString; break;
        case 16:
            tempItem.transceiverClass = subString; break;
        default :
            cout << "Error unknown field number\n";
    }

}


/*  getNextField -
        Parses through the line of comma separated values for the next value and storing it as a substring
    parameters - 
        string &line - line of comma separated values containing data to be put in field members of vessel
        int &index - tells the function where to look in the line for the value
        string &subString - holds each character read through until a comma or the line length is found
    return values - 
        return the modified index by reference so the next time the function is called, it will know where
        to start looking in the line. return the subString by reference to be saved into the vessel's record.
        return false if a comma is found and the line is not done being parsed. return true if the line is 
        done being parsed.
    Algorithm - 
        Use a while-loop to parse through the line. If the character of the current index is not a comma (the 
        delimiter) and is not the last index of the line, then the character must be part of the current value
        being read. Concatenate the substring with the character. Otherwise, if the current character is a comma,
        incremement the index to prepare for the next function call and return false to indicate the line still
        needs to be parsed. If the end of the line is reached, exit the while-loop and return true to indicate the 
        line is finished being parsed.
*/
bool getNextField(string &line, int &index, string &subString)
{
    char delimiter = ','; //because it is a .csv

    while(static_cast<unsigned int>(index) != line.length()){
        if (line[index] != delimiter){ //if the character isn't a comma, it must be part of the value being parsed
            subString += line[index];
            index++;

        } else {
            index++;
            return false; //comma found and there is still more to parse out of the line
        }
    }
	return true; //end of line reached
}



/*  makeStringUpper - 
        takes the passed string and converts it so that every alphabetical letter is changed to its uppercase version
    parameters - 
        string s - the string to be changed into all capital letters, barring characters that do not have a capital version
    return value - 
        return the string in all capital letters
    Algorithm - 
        Use a for-loop to parse through the string from the start of the string to the end of it. For every character, use 
        library function toupper() to attempt to capitalize it to its capital version. Concatenate the result to the temporary
        string. Once the end of the string has been reached, return the resulting string.
*/
string makeStringUpper(string s)
{
    string temp;

    for(unsigned int i = 0; i < s.length(); i++){ //go through the entire string
        temp += toupper(s[i]); //concatenate attempted capitalized character into the temporary string 
    }

    return temp; //the string with all lowercase letters changed to capital letters 
}