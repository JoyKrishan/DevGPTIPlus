      'http://localhost:5000/api/posts/3xUM3gtEQMlaYJjNA0qY',
    setSubmitted((submitted) => !submitted);
  const queryClient = useQueryClient();
    queryClient.invalidateQueries('posts'); // Clear query cache
    handleSubmit();
  };
    queryFn: getPosts, // Function that defines how to fetch data for this query
    enabled: submitted, // Optional: Execute the query only when the variable submitted is true