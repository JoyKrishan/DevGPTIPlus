import React from 'react';

const equipmentNames = ["Dumbbell", "Barbell", "Bodyweight", "Machine", "Other"];

const EquipmentList = () => {
  return (
    <div>
      <h2>Equipment Names</h2>
      <ul>
        {equipmentNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default EquipmentList;