		$start_time = microtime( true );

		// TODO: Remove after QA.
		$end_time       = microtime( true );
		$elapsed_time   = $end_time - $start_time;
		$block_content .= '<!-- Rendered in ' . $elapsed_time . ' seconds -->';

			$output .= '<a class="o-pag-item" href="' . $url . '/page/' . ( $page_number - 1 ) . '">';
		$skip         = false;
			if ( $current_btn === $page_number ) {
				$output .= '<span class="o-pag-item" aria-current="page" >';
				$output .= $current_btn;
				$output .= '</span>';
			} else {
				$output .= '<a class="o-pag-item" href="' . $url . 'page/' . $current_btn . '">';
				$output .= $current_btn;
				$output .= '</a>';
			}
			$output .= '<span class="o-pag-item o-dots">...</span>';
			$output .= '<a class="o-pag-item" href="' . $url . 'page/' . $current_btn . '">';
			$output .= '<a class="o-pag-item" href="' . $url . 'page/' . ( $page_number + 1 ) . '">';