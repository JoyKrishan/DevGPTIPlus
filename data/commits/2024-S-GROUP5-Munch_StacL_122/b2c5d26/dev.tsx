import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import { Button, Image, Text, XStack, YStack } from 'tamagui';
import { AntDesign } from '@expo/vector-icons';
  const { token, user_data } = useContext(UserContext);

  // Used to skip events on the first render
  const isFirstRender = useRef(false);
  useEffect(() => {
    isFirstRender.current = true;
  }, []);

  const [liked, setLiked] = useState(user_data.likes.includes(key));
  // Only update the like count locally to reduce API calls
  const [localLikes, setLocalLikes] = useState(likes);
      // Update the local like count
      setLocalLikes(liked ? localLikes + 1 : localLikes - 1);
      // Update the like count
      //queryClient.invalidateQueries({ queryKey: ['likes'] });
  // Helper to handle a like interaction
  useEffect(
    () => {
      // Do not run on the first render
      if (isFirstRender.current) {
        isFirstRender.current = false;
        return;
      }
      // Status message
      liked
        ? console.log('Liking the post!')
        : console.log('Unliking the post!');
      changeLikes();
    },
    [liked], // effect only activates when liked is updated
  );

    // Rest of handling done in useEffect
          <XStack alignItems='center' justifyContent='space-evenly'>
            <Button
              size={'$4'}
              circular
              animation={'bouncy'}
              animateOnly={['transform']}
              icon={
                <AntDesign
                  size={22}
                  name={liked ? 'heart' : 'hearto'}
                  color={liked ? 'red' : 'black'}
                />
              }
              justifyContent='center'
              alignItems='center'
              onPress={handleLike}
              pressStyle={{ scale: 0.4 }}
              padding={10}
              unstyled
            />
            <Text>
              {likesLoading ? 'Loading' : likesError ? '-1' : localLikes}
            </Text>
            iconName='comment-o'
              router.push('/(modals)/comments');
          <ButtonIcon iconName='bookmark-o' onPress={handleBookmark} />
          {byte?.location && <ButtonIcon iconName='map-o' onPress={openMaps} />}