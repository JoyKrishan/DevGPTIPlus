#include <iostream>
using namespace std;

const int ARRAY_SIZE = 4;

void findMinMax(double[], double&, double&);

int main()
{
    double list[ARRAY_SIZE] = {3.5, 1.6, -4.9, 2.5};
    double minimum = list[0];
    double maximum = list[0];
    findMinMax(list, minimum, maximum);
    cout << "Minimum: " << minimum << endl;
    cout << "Maximum: " << maximum << endl;
    return 0;
}

void findMinMax(double list[], double& minimum, double& maximum)
{
    for (int i = 1; i < ARRAY_SIZE; i++)
    {
        if (list[i] < minimum){
            minimum = list[i];
        }
        else if (list[i] > maximum)
        {
            maximum = list[i];
        }
    }
}