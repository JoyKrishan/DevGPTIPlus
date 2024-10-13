		
		$has_pagination = isset( $attributes['hasPagination'] ) && $attributes['hasPagination'];
		$page_number    = 1;
		if ( $has_pagination ) {
			if ( ! empty( get_query_var( 'page' ) ) || ! empty( get_query_var( 'paged' ) ) ) {
				$page_number = is_front_page() ? get_query_var( 'page' ) : get_query_var( 'paged' );
			}
		$recent_posts = $this->get_posts( $query_args, $attributes, $has_pagination, $total_posts );
			$has_pagination ? $this->render_pagination( $page_number, intval( ceil( $total_posts / $attributes['postsToShow'] ) ) ) : ''
	 * @param bool  $count_posts Enable post count.
	protected function get_posts( $args, $attributes, $count_posts, &$total_posts ) {
			if ( $count_posts ) {
				$count_args = array(
					'limit'            => -1,
					'post_status'      => 'publish',
					'order'            => $attributes['order'],
					'orderby'          => $attributes['orderBy'],
					'category'         => $categories,
					'suppress_filters' => false,
					'return'           => 'ids',
				);
				$query        = new \WC_Product_Query( $count_args );
				$total_posts += count( $query->get_products() );
			}
			if ( $count_posts ) {
				unset( $args['offset'] );
				unset( $args['numberposts'] );
				$args['posts_per_page'] = -1;
				$args['fields']         = 'ids';
				$total_posts += ( new \WP_Query( $args ) )->found_posts;
			}
	 * @param int $page_number The page number.
	 * @param int $total_pages The total pages.
	protected function render_pagination( $page_number, $total_pages ) {
		$big = 9999999;

		$output  = '<div class="o-posts-grid-pag">';
		$output .= paginate_links(
			array(
				'base'      => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
				'format'    => '?paged=%#%',
				'current'   => $page_number,
				'total'     => $total_pages,
				'prev_text' => __( 'Prev', 'otter-blocks' ),
				'next_text' => __( 'Next', 'otter-blocks' ),
			)
		);