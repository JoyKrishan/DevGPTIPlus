/**
 * @brief Square a 2x2 matrix in-place.
 *
 * Given a 2x2 matrix represented as:
 * | a  b |
 * | c  d |
 *
 * The squared matrix is calculated as:
 * | a*a + b*b   a*c + b*d |
 * | c*a + d*b   c*c + d*d |
 *
 * The result is then stored back in the input matrix (a, b, c, d).
 *
 * @param a [in/out] The top-left element of the matrix.
 * @param b [in/out] The top-right element of the matrix.
 * @param c [in/out] The bottom-left element of the matrix.
 * @param d [in/out] The bottom-right element of the matrix.
 */
void square(long& a, long& b, long& c, long& d){
    // Temporary variables to store intermediate results
    int a_tmp, b_tmp, c_tmp, d_tmp;

    // Calculate the elements of the squared matrix
    a_tmp = a*a + b*b;      // Top-left element
    b_tmp = a*c + b*d;      // Top-right element
    c_tmp = c*a + d*b;      // Bottom-left element
    d_tmp = c*c + d*d;      // Bottom-right element

    // Update the input matrix with the squared values
    a = a_tmp;
    b = b_tmp;
    c = c_tmp;
    d = d_tmp;

    // Function completed, matrix is now squared
    return;
}