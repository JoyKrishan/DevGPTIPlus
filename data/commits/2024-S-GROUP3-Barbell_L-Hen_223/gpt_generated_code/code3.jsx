const exercises = [
  { id: 1, name: 'Push-ups' },
  { id: 2, name: 'Squats' },
  { id: 3, name: 'Planks' },
];

const exerciseComponents = exercises.map((exercise) => (
  <TouchableOpacity key={exercise.id}>
    <Text>{exercise.name}</Text>
  </TouchableOpacity>
));