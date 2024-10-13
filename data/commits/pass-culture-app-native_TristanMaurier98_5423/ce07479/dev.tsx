  const showLocationButton = enableAppLocation
    ? params?.view === SearchView.Results
    : params === undefined || params.view === SearchView.Landing

              showLocationButton={showLocationButton}