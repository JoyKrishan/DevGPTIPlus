  const { data: userDevelopment } = api.user.byId.useQuery({ id: 9 })

      console.log('Fetching user data based on environment')
      if (process.env.NODE_ENV === 'development') {
        // In development, fetch a predefined user
        const response = userDevelopment
        setUserData({
          id: response?.id || 0,
          clerkId: response?.clerkId || '',
          username: response?.username || '',
          name: response?.name || '',
        })
      } else {
        // In production, create or fetch user dynamically
        setUserData({
          id: response.id,
          clerkId: response.clerkId,
          username: response.username,
          name: response.name || '',
        })
      }
  }, [clerkUserData, createUser])