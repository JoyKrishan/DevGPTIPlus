/**
 * External dependencies.
 */
import { isString } from 'lodash';

	useReducer,
import useSettings from '../../../blocks/helpers/use-settings';

const optionMapping = {
	enableCustomCss: 'themeisle_blocks_settings_css_module',
	enableBlocksAnimation: 'themeisle_blocks_settings_blocks_animation',
	enableBlockConditions: 'themeisle_blocks_settings_block_conditions',
	enableSectionDefaultBlock: 'themeisle_blocks_settings_default_block',
	enableOptimizeAnimationsCss: 'themeisle_blocks_settings_optimize_animations_css',
	enableRichSchema: 'themeisle_blocks_settings_disable_review_schema',
	enableReviewScale: 'themeisle_blocks_settings_review_scale',
	enableHighlightDynamic: 'themeisle_blocks_settings_highlight_dynamic',
	enableAnonymousDataTracking: 'otter_blocks_logger_flag'
};

const initialState = {
	values: {
		enableCustomCss: false,
		enableBlocksAnimation: false,
		enableBlockConditions: false,
		enableSectionDefaultBlock: false,
		enableOptimizeAnimationsCss: false,
		enableRichSchema: false,
		enableReviewScale: false,
		enableHighlightDynamic: false,
		enableAnonymousDataTracking: 'no'
	},
	status: {
		enableCustomCss: 'init',
		enableBlocksAnimation: 'init',
		enableBlockConditions: 'init',
		enableSectionDefaultBlock: 'init',
		enableOptimizeAnimationsCss: 'init',
		enableRichSchema: 'init',
		enableReviewScale: 'init',
		enableHighlightDynamic: 'init',
		enableAnonymousDataTracking: 'init'
	},
	dirty: {
		enableCustomCss: false,
		enableBlocksAnimation: false,
		enableBlockConditions: false,
		enableSectionDefaultBlock: false,
		enableOptimizeAnimationsCss: false,
		enableRichSchema: false,
		enableReviewScale: false,
		enableHighlightDynamic: false,
		enableAnonymousDataTracking: false
	},
	old: {}
};

/**
 * Reducer.
 * @param {Object} state The current state.
 * @param {Object} action The action to be performed.
 * @returns {*}
 */
const reducer = ( state, action ) => {
	switch ( action.type ) {
	case 'init':
		state.values[ action.name ] = action.value;
		state.status[ action.name ] = 'saved';
		return { ...state };

	case 'update':
		state.old[ action.name ] = isString( state.values[ action.name ]) ? state.values[ action.name ] : Boolean( state.values[ action.name ]);
		state.values[ action.name ] = action.value;
		state.dirty[ action.name ] = true;
		return { ...state };

	case 'status_bulk':
		action.names.forEach( name => {
			state.status[ name ] = action.value;
			state.dirty[ name ] = false;
		});
		return { ...state };
	case 'saved':
		state.status[ action.name ] = 'saved';
		state.values[ action.name ] = action.value;
		state.old[ action.name ] = undefined;
		return { ...state };

	case 'rollback':
		if ( undefined !== state.old[ action.name ]) {
			state.values[action.name] = state.old[action.name];
		}
		state.old[ action.name ] = undefined;
		state.dirty[ action.name ] = false;
		state.status[ action.name ] = 'saved';
		return { ...state };

	default:
		return state;
	}
};

const Dashboard = () => {
	const [ getOption, updateOption, status  ] = useSettings();

	const [ state, applyAction ] = useReducer( reducer, initialState );

	/**
	 * Regenerate styles.
	 * @returns {Promise<void>}
	 */
	/**
	 * Initialize the state with values from the WordPress options.
	 */
	useEffect( () => {
		if ( 'loaded' !== status ) {
			return;
		}

		Object.entries( state.status )
			.filter( ([ key, value ]) => 'init' === value )
			.forEach( ([ name, _ ]) => {
				applyAction({ type: 'init', name, value: getOption( optionMapping[ name ]) });
			});
	}, [ state, status, getOption ]);

	/**
	 * Update the WordPress options.
	 */
	useEffect( () => {
		const dirtyOptionNames = Object.entries( state.dirty ).filter( ([ key, value ]) => value ).map( ([ key, value ]) => key );

		if ( dirtyOptionNames.length ) {
			if ( 'error' !== status ) {
				applyAction({ type: 'status_bulk', value: 'saving', names: dirtyOptionNames });
			}

			for ( const name of dirtyOptionNames ) {
				updateOption(
					optionMapping[ name ],
					state.values[ name ],
					__( 'Settings saved.', 'otter-blocks' ),
					'o-settings-saved-notice',
					( response ) => {
						applyAction({ type: 'saved', name, value: response[ optionMapping[ name ] ] });
					},
					() => {
						applyAction({ type: 'rollback', name });
					}
				);
			}
		}

	}, [ state, status ]);

						checked={ state.values.enableCustomCss }
						disabled={ 'saving' === state.status.enableCustomCss }
						onChange={ ( value ) => {
							applyAction({ type: 'update', name: 'enableCustomCss', value });
						} }
						checked={ state.values.enableBlocksAnimation }
						disabled={ 'saving' === state.status.enableBlocksAnimation }
						onChange={ ( value ) => applyAction({ type: 'update', name: 'enableBlocksAnimation', value }) }
						checked={ state.values.enableBlockConditions }
						disabled={ 'saving' === state.status.enableBlockConditions }
						onChange={ ( value ) => applyAction({ type: 'update', name: 'enableBlockConditions', value }) }
						checked={ state.values.enableSectionDefaultBlock }
						disabled={ 'saving' === state.status.enableSectionDefaultBlock }
						onChange={ ( value ) => applyAction({ type: 'update', name: 'enableSectionDefaultBlock', value }) }
						checked={ state.values.enableOptimizeAnimationsCss }
						disabled={ 'saving' === state.status.enableOptimizeAnimationsCss }
						onChange={ ( value ) => applyAction({ type: 'update', name: 'enableOptimizeAnimationsCss', value }) }
						checked={ state.values.enableRichSchema }
						disabled={ 'saving' === state.status.enableRichSchema }
						onChange={ ( value ) => applyAction({ type: 'update', name: 'enableRichSchema', value }) }
						checked={ state.values.enableReviewScale }
						disabled={ 'saving' === state.status.enableReviewScale }
						onChange={ ( value ) => applyAction({ type: 'update', name: 'enableReviewScale', value }) }
						checked={ state.values.enableHighlightDynamic }
						disabled={ 'saving' === state.status.enableHighlightDynamic }
						onChange={ ( value ) => applyAction({ type: 'update', name: 'enableHighlightDynamic', value }) }
						checked={ 'yes' === state.values.enableAnonymousDataTracking }
						disabled={ 'saving' === state.status.enableAnonymousDataTracking }
						onChange={ ( value ) => applyAction({ type: 'update', name: 'enableAnonymousDataTracking', value: value ? 'yes' : 'no' }) }