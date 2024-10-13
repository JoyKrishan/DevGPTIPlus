#include <iostream>

using namespace std;

/*Code before ChatGPT documentation: A bit black-boxed to say the least.
void square(long& a, long& b, long& c, long& d){
	int a_tmp, b_tmp, c_tmp, d_tmp;

	a_tmp = a*a + b*b;
	b_tmp = a*c + b*d;
	c_tmp = c*a + d*b;
	d_tmp = c*c + d*d;

	a = a_tmp; b = b_tmp; c = c_tmp; d = d_tmp;

	return;
}
*/

// Code + documentation from ChatGPT:

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


int main(void){
	int i, n;
	long a, b, c, d;
	cout << " Input matrix a b\n";
	cout << "              c d\n";
	cout << " a, b, c, d > "; cin >> a; cin >> b; cin >> c; cin >> d;
	cout << "How often to square? > "; cin >> n;

	for(i = 1; i <= n; i++) square(a,b,c,d);
	cout << a << " " << b << "\n";
	cout << c << " " << d << "\n";

	return 0;
}