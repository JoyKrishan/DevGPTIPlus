import { Feather } from '@expo/vector-icons';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Button, Text, TextArea, YStack, Image } from 'tamagui';
import { Container, Main, Subtitle, Title } from '../tamagui.config.ts';
//Recipe Page

export default function Recipe() {
  const { name } = useLocalSearchParams();
  const router = useRouter();
  {
    /**/
  }
  const BackButton = () => (
    <Button
      unstyled
      flexDirection='row'
      backgroundColor='transparent'
      paddingLeft={0}
      pressStyle={{ opacity: 0.5 }}
      onPress={router.back}
      icon={<Feather name='chevron-left' size={16} color='#007AFF' />}
    >
      <Text color='#007AFF'>Back</Text>
    </Button>
  );

  return (
    <Container>
      <Stack.Screen
        options={{
          title: 'Super Cool Recipe',
          headerCenter: () => <BackButton />,
        }}
      />
      <Main>
        <YStack>
          <BackButton />
          <Image
            style={{ width: 400, height: 300 }}
            resizeMode='contain'
            source={{
              uri: 'https://cdn.loveandlemons.com/wp-content/uploads/2021/04/green-salad.jpg',
            }}
          />
          <Title color='white'>Recipe Title</Title>
          <Subtitle color='white'>
            Showing recipe details for user {name}.
          </Subtitle>
          <Text color='white'>steps, testing, testing</Text>
        </YStack>
      </Main>
    </Container>
  );
}