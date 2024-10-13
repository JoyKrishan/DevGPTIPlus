		$uri = add_query_arg( array() );
		// If URI is in form of ?p= then page number will be in `paged=` query arg.
		if ( preg_match( '#paged=(\d+)#', $uri, $matches ) ) {
			$page_number = intval( $matches[1] );
		} elseif ( preg_match( '#/page/(\d+)#', $uri, $matches ) ) {
			$output .= '<a class="o-pag-item" href="' . $this->render_paged_url( $url, $page_number - 1 ) . '">';
				$output .= '<a class="o-pag-item" href="' . $this->render_paged_url( $url, $current_btn ) . '">';
			$output .= '<a class="o-pag-item" href="' . $this->render_paged_url( $url, $current_btn ) . '">';
			$output .= '<a class="o-pag-item" href="' . $this->render_paged_url( $url, $page_number + 1 ) . '">';

	/**
	 * Render the paged url.
	 *
	 * @param string $url The url.
	 * @param int    $page_number The page number.
	 * @return array|string|string[]|null
	 */
	protected function render_paged_url( $url, $page_number ) {
		if ( preg_match( '#\?p=(\d+)#', $url, $matches ) ) {
			$url = add_query_arg( 'paged', $page_number, $url );
		} elseif ( preg_match( '#/page/(\d+)#', $url, $matches ) ) {
			$url = preg_replace( '#/page/(\d+)#', '/page/' . $page_number, $url );
		} else {
			$url = trailingslashit( $url ) . 'page/' . $page_number;
		}

		return $url;
	}