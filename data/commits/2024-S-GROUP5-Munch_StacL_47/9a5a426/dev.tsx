
  // Make GET request with axios
  const getPosts = async () => {
    try {
      const response = await axios.get(
        'http://localhost:5000/api/posts/3xUM3gtEQMlaYJjNA0qY',
      );
      return response.data;
    } catch (error) {
      return error.message;
    }
  const result = useQuery({
      queryKey: ['UniqueNameSpecificToQuery'], // Descriptive key to identify this specific query
      queryFn: getPosts, // Function that defines how to fetch data for this query
      enabled: submitted, // Optional: Execute the query only when the variable submitted is true
    });

  const handleSubmit = () => {
      setSubmitted((submitted) => !submitted);
    };

  // clear everything in query cache
    queryClient.invalidateQueries('UniqueNameSpecificToQuery'); // Clear query cache with the key 'UniqueNameSpecificToQuery'
