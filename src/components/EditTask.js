// src/components/EditTask.js
import React from 'react';

const EditTask = ({ task, onSave, onCancel, editedDescription, onDescriptionChange }) => {
  return (
    <div>
      <input
        type="text"
        value={editedDescription}
        onChange={(e) => onDescriptionChange(e.target.value)}
      />
      <button style={{ marginRight: '10px' }} onClick={onSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditTask;
