#include <iostream>
#include <string>

/* ORIGINAL CODE BEFORE CHAT GPT REFACTOR
//takes an index and finds the month of said index
std::string findMonth(int index){
    //12 if else statements
    //each compares indices of month to input
    //if within range for month, return that month
    string month = "\0";
    if(0 <= index && index < 31){
        month = "JAN";
    }
    else if(31 <= index && index < 59){
        month = "FEB";
    }
    else if(59 <= index && index < 90){
        month = "MAR";
    }
    else if(90 <= index && index < 120){
        month = "APR";
    }
    else if(120 <= index && index < 151){
        month = "MAY";
    }
    else if(151 <= index && index < 181){
        month = "JUN";
    }
    else if(181 <= index && index < 212){
        month = "JUL";
    }
    else if(212 <= index && index < 243){
        month = "AUG";
    }
    else if(243 <= index && index < 273){
        month = "SEP";
    }
    else if(273 <= index && index < 304){
        month = "OCT";
    }
    else if(304 <= index && index < 334){
        month = "NOV";
    }
    else if(334 <= index && index < 365){
        month = "DEC";
    }
    return month;
}

//takes startingindex and month, subtracts
//start index of that month from input index
//to give natural date
int findDay(string month, int index){
    //12 if elses to check what month
    //when found subtract that month's starting index
    //from inputted index
    //return that new value as the date
    //do +1 to change from index to natural date
    //we start index at 0 where calendar starts at 1
    int date = index;
    if(month == "JAN"){
        date = (index - 0) + 1;
    }
    else if(month == "FEB"){
        date = (index - 31) + 1;
    }
    else if(month == "MAR"){
        date = (index - 59) + 1;
    }
    else if(month =="APR"){
        date = (index - 90) + 1;
    }
    else if(month == "MAY"){
        date = (index - 120) + 1;
    }
    else if(month == "JUN"){
        date = (index - 151) + 1;
    }
    else if(month == "JUL"){
        date = (index - 181) + 1;
    }
    else if(month == "AUG"){
        date = (index - 212) + 1;
    }
    else if(month == "SEP"){
        date = (index - 243) + 1;
    }
    else if(month == "OCT"){
        date = (index - 273) + 1;
    }
    else if(month == "NOV"){
        date = (index - 304) + 1;
    }
    else if(month == "DEC"){
        date = (index - 334) + 1;
    }
    return date;
}
*/

// NEW CODE FROM CHATGPT
std::string findMonth(int index) {
    const int startingIndices[] = {0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334};
    const char* monthNames[] = {"JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"};

    for (int i = 0; i < 12; ++i) {
        if (index >= startingIndices[i] && index < startingIndices[i + 1]) {
            return monthNames[i];
        }
    }

    return ""; // Handle out-of-range input
}

int findDay(const std::string& month, int index) {
    const int startingIndices[] = {0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334};

    for (int i = 0; i < 12; ++i) {
        if (month == findMonth(startingIndices[i])) {
            return index - startingIndices[i] + 1;
        }
    }

    return -1; // Handle invalid month input
}

int main(void){
    int input; 
    std::cout << "Enter a day of the year (between 0 and 365): ";
    std::cin >> input;
    if((input < 0) || (input > 365)){
        std::cout << "Bad input. Exiting program.";
        return 0;
    }
    std::string mName = findMonth(input);
    int mDay = findDay(mName, input);
    std::cout << mName << " " << mDay << " should be the date!\n";
    return 0;
}