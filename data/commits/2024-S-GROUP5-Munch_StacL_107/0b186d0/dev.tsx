import { router, usePathname } from 'expo-router';
  const postLocation = usePathname();
  const postId = postLocation.split("/").pop();
        const response = axios.patch(
          `${process.env.EXPO_PUBLIC_IP_ADDR}/api/posts/${postId}`,
          postData,
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        return response.data;
      },
      // Update the post with the edit
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['post'] });
      },
      // Show error message in console
      onError: () => {
        console.log('error:', error.message);
      await mutate(updatedPostData);
      router.replace(postLocation); //reload page for newest updates on frontend
          <XStack alignSelf='flex-end' gap='$4' margin='$4'>