import { Ionicons } from '@expo/vector-icons'

  // remove when everything done
      {/*<NavBar*/}
      {/*  center={'Select Exercises'}*/}
      {/*  right={*/}
      {/*    <Pressable onPress={() => router.back()}>*/}
      {/*      {addCount == 0 ? (*/}
      {/*        <Text style={{ color: '#CACACA', fontSize: 20 }}>Add</Text>*/}
      {/*      ) : (*/}
      {/*        <Text style={{ color: '#CACACA', fontSize: 20 }}>Add{addCount}</Text>*/}
      {/*      )}*/}
      {/*    </Pressable>*/}
      {/*  }*/}
      {/*/>*/}

      <View className='flex flex-row justify-between px-5'>
        <Ionicons onPress={() => router.back()} name='chevron-back' size={20} color='#CACACA' />
        <Text style={{ color: '#CACACA', fontSize: 20 }}>Select exercise</Text>
        <Pressable onPress={() => router.back()}>
          {addCount == 0 ? (
            <Text style={{ color: '#CACACA', fontSize: 20 }}>Add</Text>
          ) : (
            <Text style={{ color: '#CACACA', fontSize: 20 }}>Add{addCount}</Text>
          )}
        </Pressable>
      </View>