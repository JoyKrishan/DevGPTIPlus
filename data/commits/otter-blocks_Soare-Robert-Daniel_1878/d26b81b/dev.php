			$this->render_pagination( $uri, $page_number, intval( ceil( $total_posts / $attributes['postsToShow'] ) ) )
			if ( $current_btn > $skip_trigger ) {