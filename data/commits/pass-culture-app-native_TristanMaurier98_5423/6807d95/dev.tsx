import { SearchState, SearchView } from 'features/search/types'
import { act, fireEvent, render, screen } from 'tests/utils'
const mockSearchState: SearchState = {
const mockPosition: Position = DEFAULT_POSITION
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
      })
      render(
      const previousButton = screen.getByTestId('Revenir en arrière')
      await act(async () => {
        fireEvent.press(previousButton)
      })
      expect(mockDispatch).toHaveBeenNthCalledWith(1, { type: 'SET_LOCATION_EVERYWHERE' })
    it('should execute go back when current and previous views are identical and previous route is Venue', async () => {
      useRoute.mockReturnValueOnce({
        params: { view: SearchView.Results, previousView: SearchView.Results },
      })
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