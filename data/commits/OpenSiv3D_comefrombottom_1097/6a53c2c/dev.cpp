		switch (n % 4) // 時計回りに何回 90° 回転するか
		case -3:
			return rotate90(); // 1 回または -3 回
		case -2:
			return rotate180(); // 2 回または -2 回
		case -1:
			return rotate270(); // 3 回または -1 回
			return *this; // 0 回
		switch (n % 4) // 時計回りに何回 90° 回転するか
		case -3:
			return rotated90(); // 1 回または -3 回
		case -2:
			return rotated180(); // 2 回または -2 回
		case -1:
			return rotated270(); // 3 回または -1 回
			return *this; // 0 回