// src/components/ListTask.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { filterTodos } from '../redux/actions';

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) =>
    filter === 'done' ? task.isDone : filter === 'not' ? !task.isDone : true
  );

  const handleFilter = (filterType) => {
    dispatch(filterTodos(filterType));
  };

  return (
    <div>
      <div>
        <button style={{ marginRight: '10px' }} onClick={() => handleFilter('all')}>All</button>
        <button style={{ marginRight: '10px' }} onClick={() => handleFilter('done')}>Done</button>
        <button style={{ marginRight: '10px' }} onClick={() => handleFilter('not')}>Not Done</button>
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
