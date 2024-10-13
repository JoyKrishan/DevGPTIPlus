
						{
							attributes.hasPagination && (
								<BaseControl
									id="o-posts-grid-pagination-font-size"
									label={ __( 'Pagination', 'otter-blocks' ) }
								>
									<FontSizePicker
										fontSizes={ defaultFontSizes }
										withReset
										value={ attributes.pagSize ?? '16px' }
										onChange={ pagSize => setAttributes({ pagSize }) }
									/>
								</BaseControl>
							)
						}