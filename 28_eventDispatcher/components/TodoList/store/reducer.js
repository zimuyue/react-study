import action from './action.js';
import initialState from './state.js';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './actionType.js';

const { useReducer } = React;

function reducer (state, { type, payload }) {
  const {
    addTodo,
    removeTodo,
    toggleTodo
  } = action(state);

  switch (type) {
    case ADD_TODO:
      return addTodo(payload);
    case REMOVE_TODO:
      return removeTodo(payload);
    case TOGGLE_TODO:
      return toggleTodo(payload);
    default:
      break;
  }
}

export default function () {
  return useReducer(reducer, initialState);
}
