 * @param {import('./types.js').PostInspectorProps} props
						<ToggleControl
							label={ __( 'Enable Pagination', 'otter-blocks' ) }
							checked={ attributes.hasPagination }
							onChange={ hasPagination => setAttributes({ hasPagination })}
						/>

							},
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
								onChange: pagActiveColor => setAttributes({ pagActiveColor }),
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

						{
							attributes.hasPagination && (
								<Fragment>
									<RangeControl
										label={ __( 'Pagination Gap', 'otter-blocks' ) }
										value={ attributes.pagGap ? parseInt( attributes.pagGap ) : 10 }
										onChange={ pagGap => setAttributes({ pagGap: pagGap + 'px' }) }
										min={ 0 }
										max={ 50 }
									/>
									<BoxControl
										label={ __( 'Pagination Padding', 'otter-blocks' ) }
										values={ attributes.pagPadding }
										onChange={ pagPadding => setAttributes({ pagPadding }) }
										allowReset
									/>
								</Fragment>
							)
						}
						{
							attributes.hasPagination && (
								<Fragment>
									<BoxControl
										label={ __( 'Pagination Border Radius', 'otter-blocks' ) }
										values={ attributes.pagBorderRadius }
										onChange={ pagBorderRadius => setAttributes({ pagBorderRadius }) }
										id="o-border-raduis-box"
										allowReset
									/>
									<BoxControl
										label={ __( 'Pagination Border Width', 'otter-blocks' ) }
										values={ attributes.pagBorderWidth }
										onChange={ pagBorderWidth => setAttributes({ pagBorderWidth }) }
										allowReset
									/>
								</Fragment>
							)
						}
