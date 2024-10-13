import { GestureResponderEvent, Platform, Text, View } from 'react-native'
  onPressRight?: ((event: GestureResponderEvent) => void) | undefined
  onPressRight,
            <Text
              numberOfLines={1}
              onPress={onPressRight}
              style={{ color: '#CACACA', fontSize: 16 }}
            >