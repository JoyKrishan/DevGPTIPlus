"// Print Grid
void musicalChairs::printGrid() const {
	string stars(35, '*');
	cout << endl << stars << endl;
	for (int i = 0; i < height; i++) {
		cout << '*';
		for (int j = 0; j < width; j++) {
			if (grid[j][i].isEmpty()) {
				cout << "   ";
			}
			else {
				if (grid[j][i].isThereAPersonStandingHere()) {
					cout << ' ' << grid[j][i].getPersonID() << ' ';
				}
				else {
					if (!(grid[j][i].isThereAPersonSittingHere())) {
						cout << " c ";
					}
					else {
						cout << '[' << grid[j][i].getPersonID() << ']';
					}
				}
			}
		}
		cout << '*' << endl;
	}
	cout << stars << endl << endl;
}"