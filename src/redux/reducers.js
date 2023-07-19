// src/redux/reducers.js
import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO, FILTER_TODOS, EDIT_TODO } from './actions';

const initialState = {
  tasks: [],
  filter: 'all',
};

const tasksReducer = (state = initialState.tasks, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOGGLE_TODO:
      return state.map((task) =>
        task.id === action.payload ? { ...task, isDone: !task.isDone } : task
      );
    case EDIT_TODO:
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, description: action.payload.description }
          : task
      );
    default:
      return state;
  }
};

const filterReducer = (state = initialState.filter, action) => {
  switch (action.type) {
    case FILTER_TODOS:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  tasks: tasksReducer,
  filter: filterReducer,
});

export default rootReducer;
