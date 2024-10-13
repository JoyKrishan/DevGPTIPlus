#include <iostream>

// Function to calculate the area of a rectangle
double calculateRectangleArea(double length, double width) {
    return length * width;
}

// Function to calculate the perimeter of a rectangle
double calculateRectanglePerimeter(double length, double width) {
    return 2 * (length + width);
}

// Function to calculate the volume of a rectangular prism
double calculateRectangleVolume(double length, double width, double height) {
    return length * width * height;
}

// Function to print information about a rectangle (area, perimeter, volume)
void printRectangleInformation(double area, double perimeter, double volume) {
    std::cout << "Rectangle Area: " << area << std::endl;
    std::cout << "Rectangle Perimeter: " << perimeter << std::endl;
    std::cout << "Rectangle Volume: " << volume << std::endl;
}

int main() {
    // Define the dimensions of the first rectangle
    double length1 = 5;
    double width1 = 4;
    double height1 = 3;

    // Calculate area, perimeter, and volume of the first rectangle
    double area1 = calculateRectangleArea(length1, width1);
    double perimeter1 = calculateRectanglePerimeter(length1, width1);
    double volume1 = calculateRectangleVolume(length1, width1, height1);

    // Print information about the first rectangle
    printRectangleInformation(area1, perimeter1, volume1);

    // Define the dimensions of the second rectangle
    double length2 = 6;
    double width2 = 9;
    double height2 = 10;

    // Calculate area, perimeter, and volume of the second rectangle
    double area2 = calculateRectangleArea(length2, width2);
    double perimeter2 = calculateRectanglePerimeter(length2, width2);
    double volume2 = calculateRectangleVolume(length2, width2, height2);

    // Print information about the second rectangle
    printRectangleInformation(area2, perimeter2, volume2);

    return 0;
}