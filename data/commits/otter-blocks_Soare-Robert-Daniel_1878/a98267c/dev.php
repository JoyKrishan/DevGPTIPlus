		add_action( 'otter_load_live_search_deps', array( $this, 'load_deps' ) );
		do_action( 'otter_load_live_search_deps' );

		$post_types_data = '';
		if ( isset( $block['attrs']['otterSearchQuery']['post_type'] ) ) {
			$post_types_data = 'data-post-types=' . wp_json_encode( $block['attrs']['otterSearchQuery']['post_type'] );
		}

		// Insert hidden fields to filter core's search results.
		$query_params_markup = '';
		if ( isset( $block['attrs']['otterSearchQuery'] ) && count( $block['attrs']['otterSearchQuery'] ) > 0 ) {
			foreach ( $block['attrs']['otterSearchQuery'] as $param => $value ) {
				$query_params_markup .= sprintf(
					'<input type="hidden" name="o_%s" value="%s" />',
					esc_attr( $param ),
					esc_attr( implode( ',', $value ) )
				);
			}
		}

		$block_content = substr( $block_content, 0, strpos( $block_content, '</form>' ) ) . $query_params_markup . substr( $block_content, strpos( $block_content, '</form>' ) );
		return '<div class="o-live-search"' . $post_types_data . '>' . $block_content . '</div>';
	}

	/**
	 * Load the live search dependencies.
	 *
	 * @return void
	 *
	 * @static
	 */
	public static function load_deps() {

		$has_license = in_array( License::get_license_type(), array( 2, 3 ) ) || ( License::has_active_license() && isset( License::get_license_data()->otter_pro ) );

		if ( ! $has_license ) {
			return;
		}
