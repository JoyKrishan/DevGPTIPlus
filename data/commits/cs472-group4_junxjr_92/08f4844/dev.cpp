#include <iostream>

double calculateRectangleArea(double length, double width) {
    return length * width;
}

double calculateRectanglePerimeter(double length, double width) {
    return 2 * (length + width);
}

double calculateRectangleVolume(double length, double width, double height) {
    return length * width * height;
}

void printRectangleInformation(double area, double perimeter, double volume) {
    std::cout << "Rectangle Area: " << area << std::endl;
    std::cout << "Rectangle Perimeter: " << perimeter << std::endl;
    std::cout << "Rectangle Volume: " << volume << std::endl;
}

int main() {
    double length1 = 5;
    double width1 = 4;
    double height1 = 3;

    double area1 = calculateRectangleArea(length1, width1);
    double perimeter1 = calculateRectanglePerimeter(length1, width1);
    double volume1 = calculateRectangleVolume(length1, width1, height1);

    printRectangleInformation(area1, perimeter1, volume1);

    double length2 = 6;
    double width2 = 9;
    double height2 = 10;

    double area2 = calculateRectangleArea(length2, width2);
    double perimeter2 = calculateRectanglePerimeter(length2, width2);
    double volume2 = calculateRectangleVolume(length2, width2, height2);

    printRectangleInformation(area2, perimeter2, volume2);

    return 0;
}