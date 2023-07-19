// src/App.js
import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import EditTask from './components/EditTask'; // Import the EditTask component

const App = () => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editedTask, setEditedTask] = React.useState(null);

  const handleEditTask = (task) => {
    setEditedTask(task);
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedTask(null);
  };

  return (
    <div className="container">
      <h1>ToDo Application</h1>
      <AddTask />
      <hr />
      <h2>Tasks</h2>
      {isEditing && editedTask ? (
        <EditTask task={editedTask} onSave={handleCancelEdit} onCancel={handleCancelEdit} />
      ) : (
        <ListTask onEditTask={handleEditTask} />
      )}
    </div>
  );
};

export default App;
