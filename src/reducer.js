import { combineReducers } from 'redux';

import todosReducer from './features/todos/todosSlice';
import filterReducer from './features/filters/filterSlice';

/*
export default function appReducer(state = {}, action) {
  return {
    todos: todosReducer(state.todos, action),
    filters: filterReducer(state.filters, action),
  };
}
*/
const rootReducer = combineReducers({
  //Remember, the key names you give to combineReducers decides what the key names of your state object will be!
  todos: todosReducer,
  filters: filterReducer,
})

export default rootReducer;
