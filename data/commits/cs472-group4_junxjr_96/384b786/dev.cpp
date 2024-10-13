void printRectangleInformation(double length, double width, double height) {
    double area = length * width;
    double perimeter = 2 * (length + width);
    double volume = length * width * height;
    std::cout << "First Rectangle:" << std::endl;
    printRectangleInformation(length1, width1, height1);
    std::cout << "Second Rectangle:" << std::endl;
    printRectangleInformation(length2, width2, height2);