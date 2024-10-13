        self.room_group_name = f"chat_{self.scope['url_route']['kwargs']['room_name']}"
            'userImage': await self.get_user_image_base64(self.user_name),
        await self.broadcast_connected_users()
        self.connected_users.pop(self.user_name, None)
        await self.broadcast_connected_users()
    async def receive(self, text_data):
        data = json.loads(text_data)

        if 'message' in data:
            await self.handle_chat_message(data)
        elif 'votesToSkip' in data:
            await self.handle_votes_to_skip(data)
        elif 'guestCanPause' in data:
            await self.handle_guest_can_pause(data)
        elif 'location' in data:
            await self.handle_location_update(data)

    async def handle_chat_message(self, data):
        await self.channel_layer.group_send(
            self.room_group_name, {
                "type": "chat_message", 
                "username": data["username"], 
                "message": data["message"],
            }
        )
    async def handle_votes_to_skip(self, data):
        await self.channel_layer.group_send(
            self.room_group_name, {
                "type": "update_votes_to_skip",
                "votesToSkip": data["votesToSkip"]
            }
        )
    async def handle_guest_can_pause(self, data):
        await self.channel_layer.group_send(
            self.room_group_name, {
                "type": "update_guest_can_pause",
                "guestCanPause": data["guestCanPause"]
            }
    async def handle_location_update(self, data):
        username = data["username"]
        if username in self.connected_users:
            self.connected_users[username]['location'] = data["location"]
            await self.broadcast_connected_users()
        user_image = self.connected_users.get(event["username"], {}).get('userImage', '')
        await self.send(text_data=json.dumps({
            "message": event["message"],
            "username": event["username"],
            "messageColor": "#ffffff",
            "userImage": user_image
        }))

    async def broadcast_connected_users(self):
    @database_sync_to_async
    def get_user_image_base64(self, user_name):
        try:
            user = User.objects.get(username=user_name)
            image_path = os.path.join(settings.MEDIA_ROOT, f'user_images/{user.id}/')
            if os.path.exists(image_path):
                profile_pic = os.listdir(image_path)[0]
                with open(os.path.join(image_path, profile_pic), 'rb') as f:
                    return f'data:image/png;base64,{base64.b64encode(f.read()).decode("utf-8")}'
        except User.DoesNotExist:
            pass
        return None