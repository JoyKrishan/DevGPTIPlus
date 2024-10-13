		$block_content .= '<!-- Rendered in ' . $elapsed_time . ' seconds | Page ' . $page_number . ' -->';
			$args['offset']        = $args['posts_per_page'] * ( $page_number - 1 ) + $args['offset'];