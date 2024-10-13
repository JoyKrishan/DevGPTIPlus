#include "Vector2D.hpp"
//-----------------------------------------------
	template<class Type>
	inline constexpr Vector2D<Type> Vector2D<Type>::rotated90(int32 n) const noexcept
	{
		switch (n % 4) // 時計回りに何回 90° 回転するか
		{
		case 1:
		case -3:
			return { -y,x }; // 1 回または -3 回
		case 2:
		case -2:
			return { -x,-y }; // 2 回または -2 回
		case 3:
		case -1:
			return { y,-x }; // 3 回または -1 回
		default:
			return *this; // 0 回
		}
	}

	template<class Type>
	inline constexpr Vector2D<Type>& Vector2D<Type>::rotate90(int32 n) noexcept
	{
		return (*this = rotated90(n));
	}

	template<class Type>
	inline constexpr Vector2D<Type> Vector2D<Type>::rotated90At(Vector2D center, int32 n) const noexcept
	{
		const Vector2D b = (*this - center);
		return (b.rotated90(n) + center);
	}

	template<class Type>
	inline constexpr Vector2D<Type>& Vector2D<Type>::rotate90At(Vector2D center, int32 n) noexcept
	{
		return (*this = rotated90At(center, n));
	}
