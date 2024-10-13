import { Linking, SafeAreaView, Text, View, ViewStyle } from 'react-native'
{
  /* these variables are used to simplify common styling */
}
const viewStyles: ViewStyle = { flexDirection: 'row', alignItems: 'center', marginTop: 30 }
const textStyles = { fontSize: 18, color: '#CACACA' }

    <SafeAreaView style={{ flex: 1, backgroundColor: '#1C1B1B' }}>
        <View style={viewStyles}>
          <Text style={textStyles}>barbell_support@gmail.com</Text>
        <View style={viewStyles}>
          <Text style={textStyles}>+1 (702) 895-3011</Text>
        <View style={viewStyles}>
            <Text style={textStyles}>University of Nevada, Las Vegas</Text>
            <Text style={textStyles}>4505 South Maryland Parkway</Text>
            <Text style={textStyles}>Las Vegas, NV 89154</Text>
        <Text style={{ ...textStyles, fontSize: 16, marginTop: 40, textAlign: 'center' }}>
          Our goal is to respond to your inquiries within 24 business hours.
    </SafeAreaView>