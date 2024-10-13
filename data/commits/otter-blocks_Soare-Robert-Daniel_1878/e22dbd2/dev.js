							...( attributes.hasPagination ? [
								{
									value: attributes.pagColor,
									onChange: pagColor => setAttributes({ pagColor }),
									label: __( 'Pagination Link', 'otter-blocks' ),
									isShownByDefault: false
								},
								{
									value: attributes.pagBgColor,
									onChange: pagBgColor => setAttributes({ pagBgColor }),
									label: __( 'Pagination Background', 'otter-blocks' ),
									isShownByDefault: false
								},
								{
									value: attributes.pagBorderColor,
									onChange: pagBorderColor => setAttributes({ pagBorderColor }),
									label: __( 'Pagination Border', 'otter-blocks' ),
									isShownByDefault: false
								},
								{
									value: attributes.pagColorActive,
									onChange: pagColorActive => setAttributes({ pagColorActive }),
									label: __( 'Pagination Active Link', 'otter-blocks' ),
									isShownByDefault: false
								},
								{
									value: attributes.pagBgColorActive,
									onChange: pagBgColorActive => setAttributes({ pagBgColorActive }),
									label: __( 'Pagination Active Background', 'otter-blocks' ),
									isShownByDefault: false
								},
								{
									value: attributes.pagBorderColorActive,
									onChange: pagBorderColorActive => setAttributes({ pagBorderColorActive }),
									label: __( 'Pagination Active Border', 'otter-blocks' ),
									isShownByDefault: false
								},
								{
									value: attributes.pagColorHover,
									onChange: pagColorHover => setAttributes({ pagColorHover }),
									label: __( 'Pagination Hover Link', 'otter-blocks' ),
									isShownByDefault: false
								},
								{
									value: attributes.pagBgColorHover,
									onChange: pagBgColorHover => setAttributes({ pagBgColorHover }),
									label: __( 'Pagination Hover Background', 'otter-blocks' ),
									isShownByDefault: false
								},
								{
									value: attributes.pagBorderColorHover,
									onChange: pagBorderColorHover => setAttributes({ pagBorderColorHover }),
									label: __( 'Pagination Hover Border', 'otter-blocks' ),
									isShownByDefault: false
								},
								{
									value: attributes.pagBorderColorActive,
									onChange: pagBorderColorActive => setAttributes({ pagBorderColorActive }),
									label: __( 'Pagination Active Border', 'otter-blocks' ),
									isShownByDefault: false
								}
							] : [])