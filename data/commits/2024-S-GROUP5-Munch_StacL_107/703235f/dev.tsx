import React, { FC, useContext, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { UserContext } from '@/contexts/UserContext';
import { useAuth } from '@clerk/clerk-expo';
import axios from 'axios';
  // Used to query and mutate
  const queryClient = useQueryClient();
  const { token } = useContext(UserContext);
  const { getToken, userId } = useAuth();
  const postId = key.split('/')[1];
  //const postId = "eh07WeBEtSR2OIILJuj5"
  // Like button state
  const [liked, setLiked] = useState(true);

  // Data that will be passed in order to change the post's likes
  const likeData = {
    user_id: userId,
    post_id: postId,
  };
  // Get number of likes
  const getLikes = async () => {
    const response = await axios.get(
      `${process.env.EXPO_PUBLIC_IP_ADDR}/api/posts/${postId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    return response.data.likes;
  };

  const {
    data: likesCount,
    error: likesError,
    isLoading: likesLoading,
  } = useQuery({
    queryKey: ['likes'],
    queryFn: getLikes,
  });

  // Like/Unlike a post
  const {
    mutateAsync: changeLikes,
    isPending,
    data,
    error,
  } = useMutation({
    mutationFn: async () => {
      // Determine whether to like or unlike the post
      const likeAction = liked ? 'like' : 'unlike';

      // Status message to show the API call
      console.log(
        `${process.env.EXPO_PUBLIC_IP_ADDR}/api/users/${userId}/${likeAction}/${postId}`,
      );

      // Do the API call
      const response = await axios.patch(
        `${process.env.EXPO_PUBLIC_IP_ADDR}/api/users/${userId}/${likeAction}/${postId}`,
        likeData,
        {
          headers: { Authorization: `Bearer: ${await getToken()}` },
        },
      );
      return response.data;
    },
    // Update the like count
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['likes'] });
    },
    // Show error message in console
    onError: () => {
      console.log('error:', error.message);
    },
  });

  // Handle user liking the post
  const handleLike = async () => {
    // Invert the like state
    setLiked(!liked);

    // Status message
    liked ? console.log('Liking the post!') : console.log('Unliking the post!');

    // Like or unlike the post based on liked state
    await changeLikes();
  };
          <XStack alignItems='center'>
            {/*Like*/}
            <ButtonIcon iconName={'heart'} onPress={handleLike} />
            {/*Display number of likes*/}
            {likesLoading ? (
              <Text>Loading</Text>
            ) : likesError ? (
              <Text>-1</Text>
            ) : (
              <Text>{likesCount}</Text>
            )}
          </XStack>
              router.push({
                pathname: '/(modals)/comments',
                params: {
                  comments: JSON.stringify(comments),
                  post_id: JSON.stringify(key),
                },
              });