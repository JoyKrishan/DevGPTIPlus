// Sample Query to be used for reference (for GET)

import axios from 'axios';
import React, { useState } from 'react';
import { Card, Text, Button } from 'tamagui';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '@clerk/clerk-react';

export default function SampleQueryRequest() {
  const [submitted, setSubmitted] = useState(false);
  const { getToken } = useAuth();

  // Make GET request with axios
  const getPosts = async () => {
    try {
      const response = await axios.get(
        `http://${process.env.EXPO_PUBLIC_IP_ADDR}/api/posts/3xUM3gtEQMlaYJjNA0qY`,
        {
          headers: { Authorization: `Bearer ${await getToken()}` },
        },
      );
      return response.data;
    } catch (error) {
      return error.message;
    }
  };

  const result = useQuery({
    queryKey: ['UniqueNameSpecificToQuery'], // Descriptive key to identify this specific query
    queryFn: getPosts, // Function that defines how to fetch data for this query
    enabled: submitted, // Optional: Execute the query only when the variable submitted is true
  });

  const handleSubmit = () => {
    setSubmitted((submitted) => !submitted);
  };

  // clear everything in query cache
  const queryClient = useQueryClient();
  const clearQueryCache = () => {
    queryClient.invalidateQueries('UniqueNameSpecificToQuery'); // Clear query cache with the key 'UniqueNameSpecificToQuery'
    handleSubmit();
  };

  if (result.isLoading) {
    return <Text>Loading...</Text>;
  }

  if (result.error) {
    return <Text>Error: {result.error.message}</Text>;
  }

  return (
    <Card>
      <Card.Header />
      <Text> Test query </Text>
      <Text> Results of query request: {JSON.stringify(result)} </Text>
      <Text> Results of query request: {JSON.stringify(result.data)} </Text>
      <Button onPress={handleSubmit}>Submit</Button>
      <Button onPress={clearQueryCache}>Clear Query Cache</Button>
      <Card.Footer />

      <Card.Background />
    </Card>
  );
}