import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import NavBar from '~/components/ui/nav-bar/NavBar'
  // intensity used as bool in lib
  // intensity == 0, use val at colors[index 0]
    intensity: 0,
  // NavBar gives odd view
        <Ionicons onPress={() => router.back()} name='chevron-back' size={20} color='#CACACA' />
          colors={['#454545', '#74b9ff']}