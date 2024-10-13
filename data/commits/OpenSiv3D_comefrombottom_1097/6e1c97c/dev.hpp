		/// @brief 時計回りに 90°* n 回転したベクトルを返します。
		/// @param n 時計回りに 90° 回転させる回数（負の場合は反時計回り）
		/// @return 時計回りに 90°* n 回転したベクトル
		[[nodiscard]]
		constexpr Vector2D rotated90(int32 n = 1) const noexcept;

		/// @brief 自信を時計回りに 90°* n 回転します。
		/// @param n 時計回りに 90° 回転させる回数（負の場合は反時計回り）
		/// @return *this
		constexpr Vector2D& rotate90(int32 n = 1) noexcept;

		/// @brief centerを中心とし、時計回りに 90°* n 回転したベクトルを返します。
		/// @param center 回転の中心座標
		/// @param n 時計回りに 90° 回転させる回数（負の場合は反時計回り）
		/// @return centerを中心とし、時計回りに 90°* n 回転したベクトル
		[[nodiscard]]
		constexpr Vector2D rotated90At(Vector2D center, int32 n = 1) const noexcept;

		/// @brief centerを中心とし、自信を時計回りに 90°* n 回転します。
		/// @param center 回転の中心座標
		/// @param n 時計回りに 90° 回転させる回数（負の場合は反時計回り）
		/// @return *this
		constexpr Vector2D& rotate90At(Vector2D center, int32 n = 1) noexcept;
