export default function (state) {
  const addTodo = (newItem) => {
    return {
      ...state,
      todoList: [...state.todoList, newItem],
      addCount: state.addCount + 1
    }
  }

  const removeTodo = (id) => {
    const todoList = state.todoList.filter(todo => todo.id !== id);
    
    return {
      ...state,
      todoList,
      removeCount: state.removeCount + 1
    }
  }

  const toggleTodo = (id) => {
    const todoList = state.todoList.map(todo => {
      todo.id === id && (todo.completed = !todo.completed);
      return todo;
    })

    return {
      ...state,
      todoList
    }
  }

  return {
    addTodo,
    removeTodo,
    toggleTodo
  }
}