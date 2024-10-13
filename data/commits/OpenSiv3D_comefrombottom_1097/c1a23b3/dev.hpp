		/// @brief 画像を時計回りに 90 * n° 回転します。
		/// @param n 90° 回転数
		/// @return *this
		Image& rotate90(int32 n);

		[[nodiscard]]
		Image rotated90(int32 n) const&;

		[[nodiscard]]
		Image rotated90(int32 n) &&;
