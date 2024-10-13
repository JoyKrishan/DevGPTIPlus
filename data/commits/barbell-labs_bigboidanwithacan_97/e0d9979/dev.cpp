/*Original code
**************************************************************************************
**************************************************************************************
**************************************************************************************
*/
#include <iostream>
using namespace std;


int main(){
    int t;
    cin >> t;
    for(int a0 = 0; a0 < t; a0++){
        long long n, temp;
        unsigned long long sum = 0;
        cin >> n;
        temp = (n - 1) / 3;
        sum = (3 * temp * (temp + 1))/2; 
        temp = (n -1) / 5;
        sum += (5 * temp * (temp + 1))/2;
        temp = (n - 1) / 15;
        sum -= (15 * temp * (temp + 1))/2;
       
        cout << sum << endl;
    }
    return 0;
}

/*
**************************************************************************************
**************************************************************************************
************************************************************************************** 
After doucmentation added by ChatGPT
**************************************************************************************
**************************************************************************************
**************************************************************************************
*/
/*
Title: Multiples of 3 and 5

Description:
This program calculates the sum of all multiples of 3 or 5 below a given number 'n'. 
It iterates through each test case and computes the sum of multiples of 3 and 5, 
excluding multiples of both 3 and 5 (15), using mathematical formulas to optimize the process.

Algorithm:
1. Read the number of test cases, 't'.
2. For each test case:
   a. Read the input number 'n'.
   b. Calculate the sum of multiples of 3 and 5 below 'n' using mathematical formulas.
   c. Output the sum.

Pseudocode:
1. Read number of test cases 't'.
2. For each test case:
   a. Read 'n'.
   b. Calculate sum of multiples of 3 and 5 below 'n' using formulas.
   c. Output the sum.

*/

#include <iostream>
using namespace std;

int main(){
    int t;
    // Read the number of test cases
    cin >> t;
    // Iterate through each test case
    for(int a0 = 0; a0 < t; a0++){
        long long n, temp;
        unsigned long long sum = 0;
        // Read the input number 'n'
        cin >> n;
        // Calculate the sum of multiples of 3
        temp = (n - 1) / 3;
        sum = (3 * temp * (temp + 1))/2; 
        // Calculate the sum of multiples of 5
        temp = (n -1) / 5;
        sum += (5 * temp * (temp + 1))/2;
        // Adjust for multiples of both 3 and 5
        temp = (n - 1) / 15;
        sum -= (15 * temp * (temp + 1))/2;
       
        // Output the sum
        cout << sum << endl;
    }
    return 0;
}
