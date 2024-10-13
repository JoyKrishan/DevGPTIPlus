import { LocationType } from 'features/search/enums'
import { MAX_RADIUS } from 'features/search/helpers/reducer.helpers'
import { LocationFilter, SearchState, SearchView } from 'features/search/types'
import { Venue } from 'features/venue/types'
import * as useFeatureFlag from 'libs/firebase/firestore/featureFlags/useFeatureFlag'
import { SuggestedPlace } from 'libs/place'
import { mockedSuggestedVenues } from 'libs/venue/fixtures/mockedSuggestedVenues'
import * as useModalAPI from 'ui/components/modals/useModal'
let mockSearchState: SearchState = {
let mockPosition: Position = DEFAULT_POSITION
const Kourou: SuggestedPlace = {
  label: 'Kourou',
  info: 'Guyane',
  geolocation: { longitude: -52.669736, latitude: 5.16186 },
}
const venue: Venue = mockedSuggestedVenues[0]

  it('should open location modal on location button click', async () => {
    jest.spyOn(useFeatureFlag, 'useFeatureFlag').mockReturnValueOnce(false)
    const mockShowModal = jest.fn()
    jest.spyOn(useModalAPI, 'useModal').mockReturnValueOnce({
      visible: false,
      showModal: mockShowModal,
      hideModal: jest.fn(),
      toggleModal: jest.fn(),
    })
    useRoute.mockReturnValueOnce({ params: { view: SearchView.Landing } })
    const { getByTestId } = render(
      <SearchBox
        searchInputID={searchInputID}
        addSearchHistory={jest.fn()}
        searchInHistory={jest.fn()}
      />
    )

    const locationButton = getByTestId('Partout')

    await act(async () => {
      fireEvent.press(locationButton)
    })

    expect(mockShowModal).toHaveBeenCalledTimes(1)
  })

  it.each`
    locationType               | locationFilter                                                                   | position            | locationButtonLabel
    ${LocationType.EVERYWHERE} | ${{ locationType: LocationType.EVERYWHERE }}                                     | ${DEFAULT_POSITION} | ${'Partout'}
    ${LocationType.EVERYWHERE} | ${{ locationType: LocationType.EVERYWHERE }}                                     | ${null}             | ${'Me localiser'}
    ${LocationType.AROUND_ME}  | ${{ locationType: LocationType.AROUND_ME, aroundRadius: MAX_RADIUS }}            | ${DEFAULT_POSITION} | ${'Autour de moi'}
    ${LocationType.PLACE}      | ${{ locationType: LocationType.PLACE, place: Kourou, aroundRadius: MAX_RADIUS }} | ${DEFAULT_POSITION} | ${Kourou.label}
    ${LocationType.PLACE}      | ${{ locationType: LocationType.PLACE, place: Kourou, aroundRadius: MAX_RADIUS }} | ${null}             | ${Kourou.label}
    ${LocationType.VENUE}      | ${{ locationType: LocationType.VENUE, venue }}                                   | ${DEFAULT_POSITION} | ${venue.label}
    ${LocationType.VENUE}      | ${{ locationType: LocationType.VENUE, venue }}                                   | ${null}             | ${venue.label}
  `(
    'should display $locationButtonLabel in location button label when location type is $locationType and position is $position',
    async ({
      locationFilter,
      position,
      locationButtonLabel,
    }: {
      locationFilter: LocationFilter
      position: Position
      locationButtonLabel: string
    }) => {
      jest.spyOn(useFeatureFlag, 'useFeatureFlag').mockReturnValueOnce(false)

      mockSearchState = { ...initialSearchState, locationFilter }
      mockPosition = position
      useRoute.mockReturnValueOnce({ params: { view: SearchView.Landing, locationFilter } })
      const { queryByText } = render(
      await act(async () => {})
      expect(queryByText(locationButtonLabel)).toBeOnTheScreen()
    }
  )
})

describe('SearchBox component with venue previous route', () => {
  beforeEach(() => {
    jest.spyOn(navigationRef, 'getState').mockReturnValue({
      key: 'Navigator',
      index: 1,
      routeNames: ['TabNavigator'],
      routes: mockRoutesWithVenue,
      type: 'tab',
      stale: false,
    })
  })
  const searchInputID = uuidv4()
  it('should reset location to eveywhere when current and previous views are identical and previous route is Venue', async () => {
    useRoute.mockReturnValueOnce({
      params: { view: SearchView.Results, previousView: SearchView.Results },
    render(
      <SearchBox
        searchInputID={searchInputID}
        addSearchHistory={jest.fn()}
        searchInHistory={jest.fn()}
      />
    )
    const previousButton = screen.getByTestId('Revenir en arrière')
    await act(async () => {
      fireEvent.press(previousButton)
    })
    expect(mockDispatch).toHaveBeenNthCalledWith(1, { type: 'SET_LOCATION_EVERYWHERE' })
  })
  it('should execute go back when current and previous views are identical and previous route is Venue', async () => {
    useRoute.mockReturnValueOnce({
      params: { view: SearchView.Results, previousView: SearchView.Results },
    render(
      <SearchBox
        searchInputID={searchInputID}
        addSearchHistory={jest.fn()}
        searchInHistory={jest.fn()}
      />
    )
    const previousButton = screen.getByTestId('Revenir en arrière')

    await act(async () => {
      fireEvent.press(previousButton)
    })

    expect(mockGoBack).toHaveBeenCalledTimes(1)