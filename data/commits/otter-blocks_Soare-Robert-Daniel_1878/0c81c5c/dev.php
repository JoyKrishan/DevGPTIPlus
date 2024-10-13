		$offset = ! empty( $attributes['offset'] ) ? $attributes['offset'] : 0;
			'post_type'        => $attributes['postTypes'],
			'posts_per_page'   => $attributes['postsToShow'],
			'no_found_rows'    => true,
		if ( $has_pagination ) {
			$base_query_args['no_found_rows'] = false;
			$base_query_args['paged']         = $page_number;
		}

		$recent_posts = $this->retrive_posts( $query_args, $attributes, $has_pagination, $total_posts );
			$has_pagination ? $this->render_pagination( $page_number, $total_posts ) : ''
	 * @return array|int[]|null[]|\WP_Post[] Posts.
	protected function retrive_posts( $args, $attributes, $count_posts, &$total_posts ) {
			if ( $count_posts ) {
				// Paged is not working for WC, so we doing a manual count.
				$args['offset'] = $args['offset'] + ( $args['posts_per_page'] * ( $args['paged'] - 1 ) );

				// phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_tax_query
				$args['tax_query'] = array();
						$args['tax_query'][] = array(
							'taxonomy' => 'product_cat',
							'field'    => 'slug',
							'terms'    => $category['slug'],
						);
				$args['tax_query']['relation'] = 'OR';
		$query = new \WP_Query( $args );
		if ( $count_posts ) {
			$total_posts += $query->max_num_pages;
		return $query->posts;
				'base'      => str_replace( (string) $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),