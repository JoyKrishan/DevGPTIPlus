import React from 'react';
import { Linking, SafeAreaView, Text, View } from 'react-native';
import tw from 'react-native-tailwindcss'; // Import tailwindcss

import { Feather, Fontisto, SimpleLineIcons } from '@expo/vector-icons';

import NavBar from '~/components/ui/nav-bar/NavBar';

export default function ContactUsPage() {
  return (
    <SafeAreaView style={[tw.flex1, tw.bgGray900]}>
      {/* Header */}
      <NavBar center='Contact Us' />

      <View style={[tw.flex1, tw.px8, tw.pt8]}>
        {/* Email */}
        <View style={[tw.flexRow, tw.itemsCenter, tw.mt4]}>
          <Fontisto name='email' size={24} color='#CACACA' style={tw.mr2} />
          <Text style={[tw.textBase, tw.textGray400]}>barbell_support@gmail.com</Text>
        </View>

        {/* Phone */}
        <View style={[tw.flexRow, tw.itemsCenter, tw.mt4]}>
          <Feather name='phone' size={24} color='#CACACA' style={tw.mr2} />
          <Text style={[tw.textBase, tw.textGray400]}>+1 (702) 895-3011</Text>
        </View>

        {/* Location */}
        <View style={[tw.flexRow, tw.itemsCenter, tw.mt4]}>
          <SimpleLineIcons
            name='location-pin'
            size={24}
            color='#CACACA'
            style={tw.mr2}
          />
          <View>
            <Text style={[tw.textBase, tw.textGray400]}>University of Nevada, Las Vegas</Text>
            <Text style={[tw.textBase, tw.textGray400]}>4505 South Maryland Parkway</Text>
            <Text style={[tw.textBase, tw.textGray400]}>Las Vegas, NV 89154</Text>
          </View>
        </View>

        {/* Response Time */}
        <Text style={[tw.textBase, tw.mt8, tw.textGray400, tw.textCenter]}>
          Our goal is to respond to your inquiries within 24 business hours.
        </Text>
      </View>
    </SafeAreaView>
  );
}