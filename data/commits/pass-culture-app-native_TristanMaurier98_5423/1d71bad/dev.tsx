      <VenueModal visible={venueModalVisible} dismissModal={hideVenueModal} />
      <SearchLocationModal
        visible={locationModalVisible}
        dismissModal={hideLocationModal}
        showVenueModal={showVenueModal}
      />