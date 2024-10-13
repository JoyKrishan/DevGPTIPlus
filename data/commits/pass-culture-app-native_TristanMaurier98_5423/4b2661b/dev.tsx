  Platform,
  TextInputSubmitEditingEventData,
import { LocationSearchWidget } from 'features/location/components/LocationSearchWidget'
import { useFeatureFlag } from 'libs/firebase/firestore/featureFlags/useFeatureFlag'
import { RemoteStoreFeatureFlags } from 'libs/firebase/firestore/types'
  const enableAppLocation = useFeatureFlag(RemoteStoreFeatureFlags.WIP_ENABLE_APP_LOCATION)

      {!!showLocationButton &&
        (!enableAppLocation ? (
          <LocationButton
            wording={locationLabel ?? ''}
            onPress={onPressLocationButton}
            icon={LocationPointer}
            buttonHeight="extraSmall"
            ellipsizeMode="tail"
            numberOfLines={numberOfLinesForLocation}
          />
        ) : (
          <LocationSearchWidget />
        ))}