import React from 'react'
import { Linking, SafeAreaView, Text, View } from 'react-native'

import { Feather, Fontisto, SimpleLineIcons } from '@expo/vector-icons'

import NavBar from '~/components/ui/nav-bar/NavBar'

export default function ContactUsPage() {
  return (
    <SafeAreaView className="flex-1 bg-dark">
      {/* Header */}
      <NavBar center='Contact Us' />

      <View className="flex-1 px-8 pt-8">
        {/* Email */}
        <View className="flex-row items-center mt-8">
          <Fontisto name='email' size={24} color='#CACACA' className="mr-2" />
          <Text className="text-base text-gray-300">barbell_support@gmail.com</Text>
        </View>

        {/* Phone */}
        <View className="flex-row items-center mt-8">
          <Feather name='phone' size={24} color='#CACACA' className="mr-2" />
          <Text className="text-base text-gray-300">+1 (702) 895-3011</Text>
        </View>

        {/* Location */}
        <View className="flex-row items-center mt-8">
          <SimpleLineIcons
            name='location-pin'
            size={24}
            color='#CACACA'
            className="mr-2"
          />
          <View>
            <Text className="text-base text-gray-300">University of Nevada, Las Vegas</Text>
            <Text className="text-base text-gray-300">4505 South Maryland Parkway</Text>
            <Text className="text-base text-gray-300">Las Vegas, NV 89154</Text>
          </View>
        </View>

        {/* Response Time */}
        <Text className="text-base text-gray-300 mt-8 text-center">
          Our goal is to respond to your inquiries within 24 business hours.
        </Text>
      </View>
    </SafeAreaView>
  )
}