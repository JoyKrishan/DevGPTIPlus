#include <iostream>
using namespace std;

const int ARRAY_SIZE = 4;

// Function prototypes
void findMinMax(const double[], int, double&, double&);

int main()
{
    double list[ARRAY_SIZE] = {3.5, 1.6, -4.9, 2.5};
    double minimum, maximum;
    
    // Call function to find minimum and maximum
    findMinMax(list, ARRAY_SIZE, minimum, maximum);
    
    // Output results
    cout << "Minimum: " << minimum << endl;
    cout << "Maximum: " << maximum << endl;

    return 0;
}

// Function to find minimum and maximum values in an array
void findMinMax(const double arr[], int size, double& min, double& max)
{
    // Initialize min and max to the first element of the array
    min = max = arr[0];

    // Iterate through the array to find min and max
    for (int i = 1; i < size; ++i)
    {
        if (arr[i] < min)
            min = arr[i];
        if (arr[i] > max)
            max = arr[i];
    }
}