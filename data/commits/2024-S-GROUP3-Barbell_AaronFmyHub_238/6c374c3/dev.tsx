import { Dimensions, Pressable, Text, View } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

export type muscleSelectUser = 'Shoulder' | 'Chest' | 'Arm' | 'Core' | 'Leg' | 'Back'
        <Pressable onPress={() => router.back()}>
          <Text style={{ color: '#CACACA', fontSize: 20 }}>Next</Text>
        </Pressable>
                    slug: 'biceps',
                    slug: 'triceps',
                    slug: 'forearm',
                    slug: 'abs',
                    slug: 'obliques',
              // Upper leg
              // Lower leg
                    slug: 'quadriceps',
                    slug: 'adductors',
                    slug: 'hamstring',
                    slug: 'tibialis',
                    slug: 'calves',
                    slug: 'gluteal',
              // Conflict with upper back
              // Go with the figma design
              // Upper back
              // Lat
                    slug: 'trapezius',
                    slug: 'upper-back',
                    slug: 'lower-back',