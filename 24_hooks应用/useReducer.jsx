/*
  useReducer 属于 useState 升级版
  使用场景
  对一个状态的操作存在多种情况
  setNum(num => num + 1)
  setNum(num => num - 1)
  这种方式写在视图上离散性太强，集成度低，后期不利于维护
*/
export default function () {

  // reducer => dispatch 需要派发的方法集合
  // initialState => 初识值
  const [ count, dispatch ] = React.useReducer(reducer, 0);

  // state => count
  // action => { type, playload }
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
  
  return (
    <div>
      <h1>{ count }</h1>
      <button onClick={ () => dispatch({ type: 'PLUS' }) }>PLUS COUNT</button>
      <button onClick={ () => dispatch({ type: 'MINUS' }) }>MINUS COUNT</button>
    </div>
  )
}
