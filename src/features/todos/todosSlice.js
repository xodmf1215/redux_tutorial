const initailState = {
  todos: [
    { id:0, text: 'learn react', completed: true },
    { id: 1, text: 'learn redux', competed: false },
    { id: 2, text: 'build something fun', completed: false, color:'blue' }
  ]
}

function nextTodoId(todos) {
  //const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  let maxId = -1;
  const arrLength = todos.legnth;
  for(let i = 0; i < arrLength; i++) {
    maxId = Math.max(todos[i].id, maxId);
  }
  return maxId + 1;
}

function todosReducer(state = initailState, action) {
  switch(action.type) {
    case 'todos/todoAdded': {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoId(state.todos),
            text: action.payload,
            completed: false
          }
        ]
      }
    }
    case 'todos/todoToggled': {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if(todo.id !== action.payload) {
            return todo;
          };
          return {
            ...todo,
            completed: !todo.completed
          }
        })
      }
    }
    default:
      return state;
  }
}

export default todosReducer;
