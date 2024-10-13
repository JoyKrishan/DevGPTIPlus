        const response = await createUser.mutateAsync({
          clerkId: clerkUserData.id,
          username: clerkUserData.username ? clerkUserData.username : generateUsername(),
          name: clerkUserData.fullName ? clerkUserData.fullName : 'User',
        })