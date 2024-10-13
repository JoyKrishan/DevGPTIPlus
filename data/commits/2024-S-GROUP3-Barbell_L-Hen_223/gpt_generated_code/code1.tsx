import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, Text, View, TextInput, StyleSheet } from 'react-native';
import { api } from 'path/to/your/api';

export default function ExerciseList() {
  const { data, isFetched, isFetching } = api.exercise.getAllExercises.useQuery();

  // Initialize toggle state for each exercise
  const [exerciseToggles, setExerciseToggles] = useState({});
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle toggle for each exercise
  const handleToggle = (exerciseId: number) => {
    setExerciseToggles((prevToggles) => ({
      ...prevToggles,
      [exerciseId]: !prevToggles[exerciseId],
    }));
  };

  // Filtered exercises based on search query
  const filteredExercises = data?.filter((exercise) =>
    exercise.name.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search exercises..."
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {filteredExercises.map((exercise) => (
          <View key={exercise.id} style={styles.exerciseWrapper}>
            <TouchableOpacity
              style={[styles.exerciseContainer, { backgroundColor: exerciseToggles[exercise.id] ? '#48476D' : '#1E1E1E' }]}
              onPress={() => handleToggle(exercise.id)}
            >
              <Text style={styles.exerciseText}>{exercise.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 10,
  },
  scrollViewContent: {
    paddingHorizontal: 15,
  },
  exerciseWrapper: {
    marginBottom: 10, // Add margin between exercises
  },
  exerciseContainer: {
    padding: 10,
    borderRadius: 5,
  },
  exerciseText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});