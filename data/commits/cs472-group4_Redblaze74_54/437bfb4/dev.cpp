#include <array>
void matrixMult(const std::array<std::array<int, cols>, rows>& mat1, const std::array<std::array<int, cols>, rows>& mat2, std::array<std::array<int, cols>, rows>& result){
    for(size_t i = 0; i < rows; i++){
        for(size_t j = 0; j < cols; j++){
            for(size_t k = 0; k < cols; k++){
void display(const std::array<std::array<int, cols>, rows>& matrix){
    std::cout << "---------" << std::endl;
        std::cout << "|";
            std::cout << " " << matrix[i][j] << " |";
        std::cout << std::endl;
    std::cout << "---------" << std::endl;
    std::array<std::array<int, 2>, 2> matrix1 = {{{2, 3}, {3, 5}}};
    std::array<std::array<int, 2>, 2> matrix2 = {{{2, 3}, {3, 5}}};
    constexpr size_t col1 = matrix1.size();
    constexpr size_t row2 = matrix2[0].size();
        std::cout << "The number of columns in matrix 1 is not equal to the number of rows in matrix 2. Unable to perform multiplication" << std::endl;
        std::array<std::array<int, col1>, row2> result;
        std::cout << "Performing Calculation..." << std::endl;
        std::cout << "The value of the multiplication is: " << std::endl;