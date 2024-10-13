#include <iostream>

int main() {
    double length = 5;
    double width = 4;
    double height = 3;

    double area = length * width;
    double perimeter = 2 * (length + width);
    double volumn = length * width * height;

    std::cout << "Rectangle Area: " << area << std::endl;
    std::cout << "Rectangle Perimeter: " << perimeter << std::endl;
    std::cout << "Rectangle Volumn: " << volumn << std::endl;

    length = 6;
    width = 9;
    height = 10;

    double second_area = length * width;
    double second_perimeter = 2 * (length + width);
    double second_volume = length * width * height;

    std::cout << "Rectangle Area: " << second_area << std::endl;
    std::cout << "Rectangle Perimeter: " << second_perimeter << std::endl;
    std::cout << "Rectangle Volume: " << second_volume << std::endl;

    return 0;
}