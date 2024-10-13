  - Complex Algorithm - Matrix Multiplication
using namespace std;

template <size_t rows, size_t cols>
void matrixMult(int (&mat1)[rows][cols], int (&mat2)[rows][cols], int (&result)[rows][cols]){
    for(int i = 0; i < rows; i++){
        for(int j = 0; j < cols; j++){
            result[i][j] = 0;
            for(int k = 0; k < cols; k++){
                result[i][j] += mat1[i][k] * mat2[k][j];
            }
        }
}

template <size_t rows, size_t cols>
void display(int (&matrix)[rows][cols]){
    cout << "---------" << endl;
    for(int i = 0; i < rows; i++){
        cout << "|";
        for(int j = 0; j < cols; j++){
            cout << " " << matrix[i][j] << " |";
        }
        cout << endl;
    }
    cout << "---------" << endl;
    int matrix1[2][2] = { {1, 0},
                          {0, 1} };
    int matrix2[2][2] = { {2, 0},
                          {0, 2} };
    const int col1 = sizeof(matrix1[0]) / sizeof(matrix1[0][0]);
    const int row2 = sizeof(matrix2) / sizeof(matrix2[0]);
                           
    // Check if the number of columns in matrix1 is equal to the number of rows in matrix2
    if (col1 != row2) {
        cout << "The # of columns in matrix 1 is not equal to the # of rows in matrix 2. Unable to perform multiplication" << endl;
    } else {
        int result[col1][row2];
        cout << "Performing Calculation..." << endl;
        matrixMult(matrix1, matrix2, result);
        cout << "The value of the multiplication is: " << endl;
        display(result);
    }