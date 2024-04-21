import TdForm from "./Form";
import TdList from "./List";
import { useTodoReducer } from './store';

const { useState, createContext } = React;
export const ListContext = createContext({});

function TodoList () {
  const [
    { 
      todoList,
      addCount,
      removeCount
    },
    dispatch
  ] = useTodoReducer();

  // const [ addCount, setAddCount ] = useState(0);
  // const [ removeCount, setRemoveCount ] = useState(0);
  // const [ todoList, setTodoList ] = useState([]);

  // const onAddTodo = (newItem) => {
  //   setTodoList((todoList) => [...todoList, newItem]);
  //   setAddCount(addCount + 1);
  // }

  // const onRemoveTodo = (id) => {
  //   setTodoList((todoList) => {
  //     return todoList.filter(todo => todo.id !== id);
  //   })
  //   setRemoveCount(removeCount + 1);
  // }

  // const onToggleTodo = (id) => {
  //   setTodoList((todoList) => {
  //     return todoList.map(todo => {
  //       todo.id === id && (todo.completed = !todo.completed);
  //       return todo;
  //     })
  //   })
  // }

  return (
    <div>
      {/* <TdForm addTodo={ onAddTodo } /> */}
      {/* <ListContext.Provider value={{
        removeTodo: onRemoveTodo,
        toggleTodo: onToggleTodo
      }}> */}
      <TdForm dispatch={ dispatch } />
      <ListContext.Provider value={{ dispatch }}>
        <TdList
          addCount={ addCount }
          removeCount={ removeCount }
          todoList={ todoList }
        />
      </ListContext.Provider>
    </div>
  )
}

export default TodoList;