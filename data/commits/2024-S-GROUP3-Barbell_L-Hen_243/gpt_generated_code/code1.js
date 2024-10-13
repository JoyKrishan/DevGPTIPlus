import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const YourComponent = () => {
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);

  // Your arrays of exercises and equipment
  const exercises = [...] // Array of exercises
  const equipment = [...] // Array of equipment

  // Function to filter exercises based on selected equipment
  const filterExercises = () => {
    if (selectedEquipment.length === 0) {
      setFilteredExercises(exercises); // If no equipment selected, show all exercises
    } else {
      const filtered = exercises.filter(exercise =>
        selectedEquipment.every(equip => exercise.equipment.includes(equip))
      );
      setFilteredExercises(filtered);
    }
  };

  // Update filtered exercises when selected equipment changes
  useEffect(() => {
    filterExercises();
  }, [selectedEquipment]);

  // Function to toggle selected equipment
  const toggleEquipment = equip => {
    if (selectedEquipment.includes(equip)) {
      setSelectedEquipment(selectedEquipment.filter(item => item !== equip));
    } else {
      setSelectedEquipment([...selectedEquipment, equip]);
    }
  };

  return (
    <View>
      {/* Render equipment options */}
      {equipment.map((equip, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => toggleEquipment(equip)}
          style={{ backgroundColor: selectedEquipment.includes(equip) ? 'green' : 'gray', padding: 10, margin: 5 }}
        >
          <Text>{equip}</Text>
        </TouchableOpacity>
      ))}
      
      {/* Render filtered exercises */}
      <FlatList
        data={filteredExercises}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            {/* Render other exercise details */}
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default YourComponent;