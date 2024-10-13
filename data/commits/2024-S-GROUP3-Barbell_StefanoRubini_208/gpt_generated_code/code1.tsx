<View className="flex gap-y-3">
  {messages?.map((message) =>
    message.senderId === user.id ? (
      <View className="bg-dark-purple self-start rounded-xl px-4 py-3" style={{ maxWidth: `${message.content.length * 10}px` }} key={message.id}>
        <Text className="text-slate-200">{message.content}</Text>
      </View>
    ) : (
      <View className="bg-red-800 self-end rounded-xl px-4 py-3" style={{ maxWidth: `${message.content.length * 10}px` }} key={message.id}>
        <Text className="text-slate-200">{message.content}</Text>
      </View>
    )
  )}
</View>