		switch (n % 4) // 時計回りに何回 90° 回転するか
		{
		case 1:
		case -3:
			return std::move(*this).rotated90(); // 1 回または -3 回
		case 2:
		case -2:
			return std::move(*this).rotated180(); // 2 回または -2 回
		case 3:
		case -1:
			return std::move(*this).rotated270(); // 3 回または -1 回
		default:
			return std::move(*this); // 0 回
		}