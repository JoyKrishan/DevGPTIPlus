import { all } from 'deepmerge';
	variant: boolean;
	variant: string;
		lineHeight: false,
		variant: false
		lineHeight: __( 'Line Height', 'otter-blocks' ),
		variant: __( 'Variant', 'otter-blocks' )
	},
	title: __( 'Font Size', 'otter-blocks' )
	/**
	 * It triggers when the reset button is clicked. It offers the name of the component.
	 */
	onReset?: ( field: keyof ComponentsValue ) => void


	/**
	 * The title of the component.
	 */
	title?: string

	/**
	 * Allow variants for the font family.
	 */
	allowVariants?: boolean
		showAsDisable,
		title,
		onReset,
		allowVariants
	const onBulkChangeValue = ( values: Partial<ComponentsValue> ) => {
		onChange?.({ ...( componentsValue ?? {}), ...values });
	};

	const [ variants, setVariants ] = useState<{label: string, value: string}[]>([]);
	}, [ showComponent?.fontFamily, fonts, allowVariants, componentsValue?.fontFamily ]);

	useEffect( () => {
		if ( allowVariants && componentsValue?.fontFamily ) {
			setVariants( googleFontsLoader.getVariants( componentsValue?.fontFamily ) );
		}
	}, [ allowVariants, componentsValue?.fontFamily ]);
				<p>{ title ?? defaultStates.title }</p>
										'lineHeight',
										'variant'
									] as ( keyof IsEnabled )[])
										.filter( o => {
											return ! ( 'variant' === o && ! allowVariants );
										}).map( ( component ) => {
											if ( enableComponents?.[component]) {
												return <MenuItem
													key={ component }
													isSelected={ Boolean( showComponent?.[component]) }
													label={ defaultStates.componentNames?.[component] }
													icon={ Boolean( showComponent?.[component]) ? check : undefined }
													onClick={ () => {
														setShowComponent({
															...showComponent,
															[component]: ! Boolean( showComponent?.[component])
														});

														if ( showComponent?.[component]) {
															onReset?.( component );
														}
													} }
													role="menuitemcheckbox"
												>
													{ defaultStates.componentNames?.[component] }
												</MenuItem>;
											}
											return <Fragment></Fragment>;
										})
											lineHeight: undefined,
											variant: undefined
					__nextHasNoMarginBottom={ true }
																if ( allowVariants && componentsValue?.fontFamily ) {
																	setVariants( loader.getVariants( componentsValue?.fontFamily ) );
																}
																			onBulkChangeValue({
																				fontFamily: i.family,
																				variant: 'normal'
																			});

			{
				( ( allowVariants && showComponent?.variant ) || showComponent?.lineHeight ) && (
					<TwoItemOnRow>
						{
							allowVariants && showComponent?.variant && (
								<Disabled

									// @ts-ignore
									isDisabled={ Boolean( showAsDisable?.variant ) }
								>
									<SelectControl
										label={ __( 'Variants', 'otter-blocks' ) }
										value={ componentsValue?.variant ?? 'normal' }
										options={ variants }
										onChange={ variant => onChangeValue( 'variant', variant ) }
									/>
								</Disabled>
							)
						}
						{
							showComponent?.lineHeight && (
								<Disabled

									// @ts-ignore
									isDisabled={ Boolean( showAsDisable?.lineHeight ) }
								>
									<UnitControl
										label={ __( 'Line Height', 'otter-blocks' ) }

										/*@ts-ignore */
										value={ componentsValue?.lineHeight ?? componentsDefaultValue?.lineHeight }
										onChange={ ( lineHeight: string ) => onChangeValue( 'lineHeight', lineHeight ) }
										units={[
											{
												a11yLabel: 'Unitless (-)',
												label: '-',
												step: 0.1,
												value: ''
											},
											{
												a11yLabel: 'Pixels (px)',
												label: 'px',
												step: 0.1,
												value: 'px'
											},
											{
												a11yLabel: 'Percentage (%)',
												label: '%',
												step: 1,
												value: '%'
											}
										]}
									/>
								</Disabled>
							)
						}
					</TwoItemOnRow>
				)
			}
