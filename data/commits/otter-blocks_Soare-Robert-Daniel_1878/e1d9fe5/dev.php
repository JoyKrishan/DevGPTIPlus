
		$uri = esc_url_raw( $_SERVER['REQUEST_URI'] );

		if ( preg_match( '#/page/(\d+)$#', $uri, $matches ) ) {
			$page_number = intval( $matches[1] );
		} else {
			$page_number = 1;
		}

		$offset = ( $page_number - 1 ) * $attributes['postsToShow'] + $attributes['offset'];

		$base_query_args = array(
			'numberposts'      => $attributes['postsToShow'],
			'post_status'      => 'publish',
			'order'            => $attributes['order'],
			'orderby'          => $attributes['orderBy'],
			'offset'           => $offset,
			'category'         => $categories,
			'suppress_filters' => false,
		);
		$query_args = apply_filters(
			'themeisle_gutenberg_posts_block_query',
			$base_query_args,
			$attributes
		$total_posts  = 0;
		$recent_posts = $this->get_posts( $query_args, $attributes, $total_posts );

			'<div %1$s id="%2$s">%3$s<div class="%4$s">%5$s</div> %6$s</div>',
			$list_items_markup,
			$this->render_pagination( $uri, $page_number, ceil( $total_posts / $attributes['postsToShow'] ) )
	 * @param array $attributes Blocks attrs.
	 * @param int   $total_posts Total posts.
	protected function get_posts( $args, $attributes, &$total_posts ) {

		$posts               = array();
		$fetch_only_products = false;

		if ( isset( $args['post_type'] ) && in_array( 'product', $args['post_type'] ) && function_exists( 'wc_get_products' ) ) {

			$copy_args = json_decode( wp_json_encode( $args ), true );
			unset( $copy_args['post_type'] );

			// Remove 'product' from $args['post_type'] so that get_posts() doesn't complain about an invalid post type.
			$args['post_type'] = array_diff( $args['post_type'], array( 'product' ) );

			if ( empty( $args['post_type'] ) ) {
				$fetch_only_products = true;
			}

			$categories = array();
			if ( isset( $attributes['categories'] ) ) {
				foreach ( $attributes['categories'] as $category ) {
					if ( isset( $category['slug'] ) ) {
						array_push( $categories, $category['slug'] );
					}
				}
				$copy_args['category'] = $categories;
			}
			foreach ( $products as $product ) {
				$posts[] = $product->get_id();
			}
			$count_args = array(
				'limit'            => -1,
				'post_status'      => 'publish',
				'order'            => $attributes['order'],
				'orderby'          => $attributes['orderBy'],
				'category'         => $categories,
				'suppress_filters' => false,
				'return'           => 'ids',

			$query        = new \WC_Product_Query( $count_args );
			$total_posts += count( $query->get_products() );
		}

		if ( ! $fetch_only_products ) {
			$posts = array_merge( $posts, get_posts( $args ) );

			unset( $args['offset'] );
			unset( $args['numberposts'] );
			$args['posts_per_page'] = -1;
			$args['fields']         = 'ids';

			$total_posts += ( new \WP_Query( $args ) )->found_posts;
		return $posts;
	}

	/**
	 * Render the pagination.
	 *
	 * @param string $url The url.
	 * @param int    $page_number The page number.
	 * @param int    $total_pages The total pages.
	 * @return string
	 */
	protected function render_pagination( $url, $page_number, $total_pages ) {

		// Remove the page number from the url.
		$url = preg_replace( '#page/\d+#', '', $url );

		$output = '<div class="o-posts-grid-pag">';

		if ( $page_number > 1 ) {
			$output .= '<div class="o-posts-grid-pag-btn">';
			$output .= '<a href="' . $url . '/page/' . ( $page_number - 1 ) . '">';
			$output .= __( 'Prev', 'otter-blocks' );
			$output .= '</a>';
			$output .= '</div>';
		}

		$current_btn  = 1;
		$skip 	      = false;
		$skip_trigger = 5;

		while ( $current_btn <= $total_pages && ! $skip ) {
			$output .= '<div class="o-posts-grid-pag-btn"' . ( $current_btn === $page_number ? ' aria-current="page"' : '' ) . '>';
			$output .= '<a href="' . $url . 'page/' . $current_btn . '">';
			$output .= $current_btn;
			$output .= '</a>';
			$output .= '</div>';
			$current_btn++;

			if ( $current_btn > $skip_trigger && ! $skip ) {
				$current_btn = $total_pages - 1;
				$skip        = true;
			}
		}

		if ( $skip ) {
			$output .= '...';
			$output .= '<div class="o-posts-grid-pag-btn">';
			$output .= '<a href="' . $url . 'page/' . $current_btn . '">';
			$output .= $total_pages;
			$output .= '</a>';
			$output .= '</div>';
		}

		if ( $page_number < $total_pages ) {
			$output .= '<div class="o-posts-grid-pag-btn">';
			$output .= '<a href="' . $url . 'page/' . ( $page_number + 1 ) . '">';
			$output .= __( 'Next', 'otter-blocks' );
			$output .= '</a>';
			$output .= '</div>';
		}

		$output .= '</div>';

		return $output;