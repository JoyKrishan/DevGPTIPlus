#include <iostream>
using namespace std;

const int ARRAY_SIZE = 4;

void arrangeArray(double[], double, double);

int main()
{
    double list[ARRAY_SIZE] = {3.5, 1.6, -4.9, 2.5};
    double minimum = 0.0, maximum = 0.0;
    arrangeArray(list, minimum, maximum);
    for (int i = 0; i < ARRAY_SIZE; i++)
    {
        cout << list[i];
        cout << endl;
    }
}

void arrangeArray(double list[], double minimum, double maximum)
{
    for (int i = 0; i < ARRAY_SIZE; i++)
    {
        if (list[i] < minimum){
            minimum = list[i];
        }
    }
    cout << "new minimum: " << minimum;
    for (int i = 0; i < ARRAY_SIZE; i++)
    {
        if (list[i] > maximum)
        {
            maximum = list[i];
        }
    }
    cout << "\nnew maximum: " << maximum;
    cout << "\n";
}
