	Image& Image::rotate90(int32 n)
	{
		switch (n < 0 ? n % 4 + 4 : n % 4)
		{
		case 0:
			return *this;
		case 1:
			return rotate90();
		case 2:
			return rotate180();
		case 3:
			return rotate270();
		default:
			return *this;//予期してない分岐
		}
	}

	Image Image::rotated90(int32 n) const&
	{
		switch (n < 0 ? n % 4 + 4 : n % 4)
		{
		case 0:
			return *this;
		case 1:
			return rotated90();
		case 2:
			return rotated180();
		case 3:
			return rotated270();
		default:
			return *this;//予期してない分岐
		}
	}

	Image Image::rotated90(int32 n)&&
	{
		// rotate90() が最適化されたら次の実装に変更する
		// return std::move(rotate90(n));
		return rotated90(n);
	}
