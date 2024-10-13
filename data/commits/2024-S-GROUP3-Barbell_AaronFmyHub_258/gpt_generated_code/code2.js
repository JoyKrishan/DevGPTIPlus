import React, { useState } from 'react';

// Assuming this is within a functional component
const YourComponent = () => {
  const [selectExercise, setSelect] = useState<{ [exerciseID: number]: boolean }>({});

  // Function to reset selectExercise state
  const resetSelectExercise = () => {
    setSelect({});
  };

  // Render your component and include a button or trigger to call resetSelectExercise
  return (
    <div>
      {/* Your component JSX */}
      <button onClick={resetSelectExercise}>Reset Select Exercise</button>
    </div>
  );
};

export default YourComponent;