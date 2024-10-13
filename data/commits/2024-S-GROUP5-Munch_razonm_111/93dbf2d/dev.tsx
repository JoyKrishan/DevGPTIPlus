    key,

  const postId = key.split('/')[1];

  const isFirstRender = useRef(false);
  const [localLikes, setLocalLikes] = useState(likes);
    post_id: postId,
  };
      `${process.env.EXPO_PUBLIC_IP_ADDR}/api/posts/${postId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
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
      setLocalLikes(liked ? localLikes + 1 : localLikes - 1);
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
              icon={
                <AntDesign
                  size={22}
                  name={liked ? 'heart' : 'hearto'}
                  color={liked ? 'red' : 'black'}
                />
              }
              pressStyle={{ scale: 0.4 }}
            <Text>
              {likesLoading ? 'Loading' : likesError ? '-1' : localLikes}
            </Text>
          {byte?.location && <ButtonIcon iconName='map-o' onPress={openMaps} />}