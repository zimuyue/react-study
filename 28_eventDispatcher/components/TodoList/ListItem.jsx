import { ListContext } from "./index";
import { REMOVE_TODO, TOGGLE_TODO } from './store';

const { useContext } = React;

function ListItem ({ todo }) {
  // const { toggleTodo, removeTodo } = useContext(ListContext);
  const { dispatch } = useContext(ListContext);

  return (
    <li>
      <input
        type="checkbox"
        checked={ todo.completed }
        // onChange={ () => toggleTodo(todo.id) }
        onChange={ () => dispatch({ type: TOGGLE_TODO, payload: todo.id }) }
      />
      <span
        style={{ textDecoration: todo.completed && 'line-through' }}
      >{ todo.content }</span>
      {/* <button onClick={ () => removeTodo(todo.id) }>REMOVE</button> */}
      <button onClick={ () => dispatch({ type: REMOVE_TODO, payload: todo.id }) }>REMOVE</button>
    </li>
  )
}

export default ListItem;