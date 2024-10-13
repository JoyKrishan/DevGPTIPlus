export class DataGetter {
		verbose = false, sendAlert = false, title, makeQueryString, dataLengthFunc, skipApiGroup,
				} else if (Array.isArray(data) || typeof (data) === 'string') {
		/*
		*/
		concept_search: {
			expectedParams: '',
			api: 'concept-search',
			// makeQueryString: ({search_str, per_page}) => createSearchParams({search_str, per_page, session_id: sessionStorage.getItem('session_id')}),
			makeQueryString: search_str => createSearchParams({search_str}),
			singleKeyFunc: search_str => search_str,
			dataLengthFunc: () => 1,
			protocols: ['get'],
			cacheSlice: 'search_str',
			key: 'concept_id',
			alertTitle: 'Get concepts for search_str',
			apiResultShape: 'array of keyed obj',
			expectOneResultRowPerKey: true,
		},