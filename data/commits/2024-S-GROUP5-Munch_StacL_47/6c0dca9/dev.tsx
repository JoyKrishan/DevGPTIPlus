// Sample Query to be used for reference (for GET)

import axios from 'axios';
import {
    Card,
    Text
} from 'tamagui';
import { useQuery } from '@tanstack/react-query'

const getPosts = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/posts/h7xOBio5qy9sGIJExFru');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default function SampleQueryRequest() {
  // useQuery: unique key for the query, function that returns a promise and either resolves data or throws error
  const result = useQuery({ queryKey: ['UniqueNameSpecificToQuery'], queryFn: getPosts });

  return (
      <Card>
        <Card.Header />
            <Text> Test query </Text>
            <Text> Results of query request: {JSON.stringify(result.data)} </Text>
        <Card.Footer />
        <Card.Background />
      </Card>
  );
}