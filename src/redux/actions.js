// src/redux/actions.js
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const FILTER_TODOS = 'FILTER_TODOS';
export const EDIT_TODO = 'EDIT_TODO'; // Add the missing export statement here

export const addTodo = (id, description) => ({
  type: ADD_TODO,
  payload: { id, description, isDone: false },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const filterTodos = (filterType) => ({
  type: FILTER_TODOS,
  payload: filterType,
});

export const editTodo = (id, description) => ({
  type: EDIT_TODO,
  payload: { id, description },
});
