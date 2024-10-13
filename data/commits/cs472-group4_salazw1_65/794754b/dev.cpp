void findMinMax(double[], double&, double&);
    double minimum = list[0];
    double maximum = list[0];
    findMinMax(list, minimum, maximum);
    cout << "Minimum: " << minimum << endl;
    cout << "Maximum: " << maximum << endl;
    return 0;
void findMinMax(double list[], double& minimum, double& maximum)
    for (int i = 1; i < ARRAY_SIZE; i++)
        else if (list[i] > maximum)