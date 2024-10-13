  const postId = postLocation.split('/').pop();
    mutationFn: (postData) => {
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
    },
  });
                )}
              />
              <Separator />
              <XStack alignSelf='flex-end' gap='$4' margin='$4'>
                <Dialog.Close displayWhenAdapted asChild>
                  <Form.Trigger asChild>
                    <Button theme='active' aria-label='Close' type='submit'>
                      Save changes
                    </Button>
                  </Form.Trigger>
                </Dialog.Close>
              </XStack>