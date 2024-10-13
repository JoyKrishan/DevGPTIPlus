import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        height: 'auto',
        marginBottom: 10,
      }}
    >
      <TextInput
        placeholder="Message..."
        placeholderTextColor="#CACACA"
        style={{
          flex: 1,
          borderWidth: 1,
          borderColor: '#FFFFFF',
          borderRadius: 20,
          padding: 10,
          color: 'white',
          backgroundColor: '#1C1B1B',
          opacity: 0.9,
        }}
        keyboardAppearance="dark"
      />
      <TouchableOpacity>
            marginLeft: 10,
            backgroundColor: '#48476D',
            borderRadius: 20,
            padding: 10,
            borderColor: '#FFFFFF',
            borderWidth: 1,
          <Octicons name="paper-airplane" size={18} color="#CACACA" />
      </TouchableOpacity>
    </View>