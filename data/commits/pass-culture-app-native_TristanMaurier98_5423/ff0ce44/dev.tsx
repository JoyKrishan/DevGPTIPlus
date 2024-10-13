    isGeolocated | isCustomPosition
    ${true}      | ${false}
    ${true}      | ${undefined}
    "should render a filled location pointer and the text 'Ma position' if the user is geolocated",
    async ({ isGeolocated, isCustomPosition }) => {
        place: null,

      render(<LocationSearchWidget />)

      expect(screen.getByTestId('location pointer filled')).toBeOnTheScreen()
      expect(screen.getByText('Ma position')).toBeOnTheScreen()
    }
  )

  it.each`
    isGeolocated | isCustomPosition
    ${false}     | ${false}
    ${false}     | ${undefined}
  `(
    "should render a location pointer(not filled ) and the text 'Me localiser' if the user is not geolocated and has not selected a custom position",
    async ({ isGeolocated, isCustomPosition }) => {
      mockUseGeolocation.mockReturnValueOnce({
        isGeolocated,
        isCustomPosition,
        place: null,
        userPosition: null,
      })

      expect(screen.getByTestId('location pointer not filled')).toBeOnTheScreen()
      expect(screen.getByText('Me localiser')).toBeOnTheScreen()

  it('should render a filled location pointer and label of the place if the user has selected a custom place', async () => {
    mockUseGeolocation.mockReturnValueOnce({
      isGeolocated: true,
      isCustomPosition: true,
      place: { label: 'my place' },
      userPosition: null,
    })

    render(<LocationSearchWidget />)

    expect(screen.getByTestId('location pointer filled')).toBeOnTheScreen()
    expect(screen.getByText('my place')).toBeOnTheScreen()
  })