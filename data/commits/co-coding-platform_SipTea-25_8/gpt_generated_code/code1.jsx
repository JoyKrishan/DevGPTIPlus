import React, { useState } from 'react';

const DescriptionField = () => {
  const [description, setDescription] = useState("Initial Description");
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setDescription(editedDescription);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedDescription(e.target.value);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedDescription}
            onChange={handleInputChange}
          />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <p>{description}</p>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default DescriptionField;