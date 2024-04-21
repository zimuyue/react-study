import { ADD_TODO } from './store';

const { useState } = React;

function Form ({ dispatch }) {
  const [ todoText, setTodoText ] = useState('');

  const onAddTodo = (e) => {
    e.preventDefault();
    if (!todoText.length) {
      return;
    }
    // dispatch({
    //   id: Date.now(),
    //   content: todoText,
    //   completed: false
    // })
    dispatch({
      type: ADD_TODO,
      payload: {
        id: Date.now(),
        content: todoText,
        completed: false
      }
    })
    setTodoText('');
  }
  
  return (
    <div>
      <form onSubmit={ onAddTodo }>
        <input
          type="text"
          value={ todoText }
          onChange={ (e) => setTodoText(e.target.value) }
          placeholder="Input what you wanna add!"
        />
        <button onClick={ onAddTodo }>ADD</button>
      </form>
    </div>
  )
}

export default Form;