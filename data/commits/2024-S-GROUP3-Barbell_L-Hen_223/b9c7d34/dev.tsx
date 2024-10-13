import { Text, TouchableOpacity, View } from 'react-native'
        filterBy='name'
        placeholder='Search workout by name...'
      <View className='pt-3' style={{ borderBottomWidth: 1, borderBottomColor: '#737272' }} />
      <ScrollView className='h-full'>
          <View key={workout.id}>
            <View className='px-3' key={workout.id}>
                className='pt-5'
                <Text className='px-2 text-[20px] text-slate-200'>{workout.name}</Text>
                <View className='pt-2' />
                <Text className='px-4 pb-4 italic text-slate-200 opacity-70'>
                  {workout.description}
                </Text>
            <View
              className='ml-3 mr-3'
              style={{ borderBottomWidth: 1, borderBottomColor: '#737272' }}
            />