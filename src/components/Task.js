// src/components/Task.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, editTodo } from '../redux/actions';
import EditTask from './EditTask';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleToggle = () => {
    dispatch(toggleTodo(task.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedDescription.trim() !== '') {
      dispatch(editTodo(task.id, editedDescription));
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedDescription(task.description);
  };

  return (
    <div style={{ marginTop: '10px' }}>
      {isEditing ? (
        <EditTask
          editedDescription={editedDescription}
          onSave={handleSave}
          onCancel={handleCancel}
          onDescriptionChange={(value) => setEditedDescription(value)}
        />
      ) : (
        <div>
          <label>
            <input type="checkbox" checked={task.isDone} onChange={handleToggle} />
            {task.description}
          </label>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Task;
