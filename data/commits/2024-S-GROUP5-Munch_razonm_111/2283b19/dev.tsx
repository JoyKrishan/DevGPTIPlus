import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import { Button, Image, Text, XStack, YStack } from 'tamagui';
import { AntDesign } from '@expo/vector-icons';
    key
  
  const { token, user_data } = useContext(UserContext);
  const postId = key.split('/')[1]
  
  // Used to skip events on the first render
  const isFirstRender = useRef(false) 
  useEffect(() => {
    isFirstRender.current = true;
  }, []);

  const [liked, setLiked] = useState(user_data.likes.includes(key));
  // Only update the like count locally to reduce API calls
  const [localLikes, setLocalLikes] = useState(likes) 
    post_id: postId
}
        `${process.env.EXPO_PUBLIC_IP_ADDR}/api/posts/${postId}`,
        {
            headers: { Authorization: `Bearer ${token}` }
        },
        // Status message to show the API call
        console.log(`${process.env.EXPO_PUBLIC_IP_ADDR}/api/users/${userId}/${likeAction}/${postId}`)
        // Do the API call
        const response = await axios.patch(
            `${process.env.EXPO_PUBLIC_IP_ADDR}/api/users/${userId}/${likeAction}/${postId}`,
            likeData,
            {
                headers: {Authorization: `Bearer: ${await getToken()}`},
            },
        );
        return response.data
      // Update the local like count
      setLocalLikes((liked ? (localLikes + 1) : (localLikes - 1)))
      // Update the like count
      //queryClient.invalidateQueries({ queryKey: ['likes'] });
  // Helper to handle a like interaction
  useEffect(() => {
    // Do not run on the first render
    if (isFirstRender.current){
      isFirstRender.current = false;
      return;
    }
    // Status message
    liked ? console.log('Liking the post!') : console.log('Unliking the post!');
    changeLikes();
    }, [liked]      // effect only activates when liked is updated
  );

    // Rest of handling done in useEffect
          <XStack alignItems='center' justifyContent='space-evenly'>
            <Button
              size={'$4'}
              circular
              animation={'bouncy'}
              animateOnly={['transform']}
              icon={<AntDesign 
                      size={22} 
                      name={liked? 'heart' : 'hearto'}
                      color={liked? 'red' : 'black'}
                    />}
              justifyContent='center'
              alignItems='center'
              onPress={handleLike}
              pressStyle={{scale:0.4}}
              padding={10}
              unstyled
            />
            <Text>{likesLoading ? 'Loading' : likesError? '-1' : (localLikes)}</Text>
            iconName='comment-o'
              router.push('/(modals)/comments');
          <ButtonIcon iconName='bookmark-o' onPress={handleBookmark} />
            <ButtonIcon iconName='map-o' onPress={openMaps} />