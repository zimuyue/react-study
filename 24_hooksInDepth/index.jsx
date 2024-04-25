import {
  useState,
  useReducer,
  useEffect,
  memo,
  useMemo,
  useCallback
} from './_React';

// function Child (props) {
//   console.log('child render');
//   return (
//     <div>
//       <h1>{ props.count }</h1>
//     </div>
//   )
// }

// const Child = memo((props) => {
//   console.log('child render');
//   return (
//     <div>
//       <h1>{ props.count }</h1>
//     </div>
//   )
// })

// const Child = memo((props) => {
//   console.log('child render');
//   return (
//     <div>
//       <h1>{ props.childData.count }</h1>
//     </div>
//   )
// })

const Child = memo((props) => {
  console.log('child render');
  return (
    <div>
      <h1>{ props.childData.count }</h1>
      <button onClick={ props.handleClick }>PLUS COUNT</button>
    </div>
  )
})

function App () {
  const [ count, setCount ] = useState(0);
  const [ count1, dispatch ] = useReducer(reducer, 0);

  function reducer (state, action) {
    switch (action.type) {
      case 'PLUS':
        return state + 1;
      case 'MINUS':
        return state - 1;
      default:
        return state;
    }
  }

  useEffect(() => {
    console.log('initial render');
  })

  useEffect(() => {
    console.log('componentDidMount');
  }, [])

  useEffect(() => {
    console.log('componentDidMount + componentDidUpdate');
  }, [count])

  // const childData = { count };
  const childData = useMemo(() => ({ count }), [count]);

  // const handleClick = () => {
  //   dispatch({ type: 'PLUS' });
  // }
  const handleClick = useCallback(() => {
    dispatch({ type: 'PLUS' });
  }, [])

  return (
    <div>
      <h1>{ count }</h1>
      <button onClick={ () => setCount((count) => count + 1) }>SET COUNT</button>
      <hr />
      <h1>{ count1 }</h1>
      <button onClick={ () => dispatch({ type: 'PLUS' }) }>PLUS COUNT</button>
      <button onClick={ () => dispatch({ type: 'MINUS' }) }>MINUS COUNT</button>
      <hr />
      {/* <Child count={ count } /> */}
      <Child childData={ childData } handleClick={ handleClick } />
    </div>
  )
}

export default App;
