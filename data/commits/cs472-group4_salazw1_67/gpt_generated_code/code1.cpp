#include <iostream>
using namespace std;

const int ARRAY_SIZE = 4;

// Function prototype for finding minimum and maximum values in an array
void findMinMax(double[], double&, double&);

int main()
{
    // Initialize an array of doubles
    double list[ARRAY_SIZE] = {3.5, 1.6, -4.9, 2.5};

    // Initialize variables to hold minimum and maximum values
    double minimum = list[0];
    double maximum = list[0];

    // Call the function to find minimum and maximum values
    findMinMax(list, minimum, maximum);

    // Output the minimum and maximum values
    cout << "Minimum: " << minimum << endl;
    cout << "Maximum: " << maximum << endl;
    return 0;
}

// Function to find minimum and maximum values in an array
// Parameters:
//   list: Array of doubles
//   minimum: Reference to a double to store the minimum value found
//   maximum: Reference to a double to store the maximum value found
void findMinMax(double list[], double& minimum, double& maximum)
{
    // Iterate through the array starting from index 1
    for (int i = 1; i < ARRAY_SIZE; i++)
    {
        // Check if the current element is less than the current minimum
        if (list[i] < minimum) {
            // Update the minimum value if the condition is met
            minimum = list[i];
        }
        // Check if the current element is greater than the current maximum
        else if (list[i] > maximum)
        {
            // Update the maximum value if the condition is met
            maximum = list[i];
        }
    }
}