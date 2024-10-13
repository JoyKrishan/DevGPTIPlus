    const response = await fetch(
      'http://localhost:5000/api/posts/Q7LKx6ud2wToavm7fxLw',
    );
    setSubmitted(true);
  };
  const result = useQuery({
    queryKey: ['UniqueNameSpecificToQuery'],
    queryFn: getPosts,
    enabled: submitted, // Enable the query when submitted is true
  });
    return <Text>Loading...</Text>;
  }
    return <Text>Error: {result.error.message}</Text>;
  }