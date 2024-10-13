import { useQuery, useQueryClient } from '@tanstack/react-query';
// Make GET request with axios
    const response = await axios.get(
      'http://localhost:5000/api/posts/3xUM3gtEQMlaYJjNA0qY'
    return response.data;
    return error.message;
    setSubmitted(submitted => !submitted);
  const queryClient = useQueryClient()
  const clearQueryCache = () => {
      queryClient.invalidateQueries('posts'); // Clear query cache
      handleSubmit();
    };

    queryKey: ['UniqueNameSpecificToQuery'], // Descriptive key to identify this specific query
    queryFn: getPosts,                       // Function that defines how to fetch data for this query
    enabled: submitted,                      // Optional: Execute the query only when the variable submitted is true
      <Button onPress={clearQueryCache}>Clear Query Cache</Button>
