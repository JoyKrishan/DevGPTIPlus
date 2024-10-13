import React, { useState } from 'react';
import { Card, Text, Button } from 'tamagui';
// const getPosts = async () => {
//   try {
//     const response = await axios.get(
//       'http://localhost:5000/api/posts/Q7LKx6ud2wToavm7fxLw',
//     );
//     console.log(response.data)
//     return response.data;
//   } catch (error) {
//     return error;
//   }
// };

// Function to fetch posts
    const response = await fetch('http://localhost:5000/api/posts/Q7LKx6ud2wToavm7fxLw');

    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    const data = await response.json();
    console.log(data);
    return data;
    return error;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
      setSubmitted(true);
    };

    const result = useQuery({
      queryKey: ['UniqueNameSpecificToQuery'],
      queryFn: getPosts,
      enabled: submitted, // Enable the query when submitted is true
    });

  if (result.isLoading) {
      return <Text>Loading...</Text>;
    }

  if (result.error) {
      return <Text>Error: {result.error.message}</Text>;
    }
      <Text> Results of query request: {JSON.stringify(result)} </Text>
      <Button onPress={handleSubmit}>Submit</Button>