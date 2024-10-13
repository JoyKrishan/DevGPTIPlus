		$recent_posts = $this->retrive_posts( $attributes, $has_pagination, $page_number, $total_posts );
	 * @param int   $page_number Page number.
	protected function retrive_posts( $attributes, $count_posts, $page_number, &$total_posts ) {

		$offset = ! empty( $attributes['offset'] ) ? $attributes['offset'] : 0;

		$categories = 0;

		if ( isset( $attributes['categories'] ) ) {
			$cats = array();

			foreach ( $attributes['categories'] as $category ) {
				array_push( $cats, $category['id'] );
			}

			$categories = join( ', ', $cats );
		}

		$args = array(
			'post_type'        => $attributes['postTypes'],
			'posts_per_page'   => $attributes['postsToShow'],
			'post_status'      => 'publish',
			'order'            => $attributes['order'],
			'orderby'          => $attributes['orderBy'],
			'offset'           => $offset,
			'category'         => $categories,
			'suppress_filters' => false,
			'no_found_rows'    => true,
		);

		if ( $count_posts ) {
			$args['no_found_rows'] = false;
			$args['paged']         = $page_number;
		}

		// Handle the case when the post type is a WooCommerce product.
		$args = apply_filters(
			'themeisle_gutenberg_posts_block_query',
			$args,
			$attributes
		);
