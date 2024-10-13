import { Card, Text } from 'tamagui';
import { useQuery } from '@tanstack/react-query';
    const response = await axios.get(
      'http://localhost:5000/api/posts/h7xOBio5qy9sGIJExFru',
    );
  const result = useQuery({
    queryKey: ['UniqueNameSpecificToQuery'],
    queryFn: getPosts,
  });
    <Card>
      <Card.Header />
      <Text> Test query </Text>
      <Text> Results of query request: {JSON.stringify(result.data)} </Text>
      <Card.Footer />
      <Card.Background />
    </Card>
}