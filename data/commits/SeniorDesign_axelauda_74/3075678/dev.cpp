#include <iostream>

using namespace std;

int main() {

    int num;
    cout << "Enter a number: ";
    cin >> num;
    cout << "\n\n";
    
    int oldNum;
	int remaining;
	int divSum = 0;

	remaining = num;
	for (int i = 1; i <= remaining; ++i) {
		if (remaining == i) {
			break;
		}
		if (num % i == 0) {
			divSum += i;
			remaining = num/i;
			if (i != (num/i) && (num/i) != num) {
				divSum += num/i;
			}
		}
	}

    oldNum = num;
    num = divSum;
	remaining = divSum;
	divSum = 0;
	for (int i = 1; i <= remaining; ++i) {
		if (remaining == i) {
			break;
		}
		if (num % i == 0) {
			divSum += i;
			remaining = num/i;
			if (i != (num/i) && (num/i) != num) {
				divSum += num/i;
			}
		}
	}

	if (divSum == oldNum) {
		cout << "AMICABLE NUMBER!";
	}

    return 0;
}