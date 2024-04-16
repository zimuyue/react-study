/*
  React.useContext
  查找离它最近的组件中 Provider 提供方的 value 数据
  不需要在组件中再去写入 Consumer 组件
*/
const CountContext = React.createContext(null);

function Item () {
  const { count, setCount } = React.useContext(CountContext);

  return (
    <div>
      <h2>{ count }</h2>
      <button onClick={ () => setCount((count) => count + 1) }>SET COUNT</button>
    </div>
  )
}

function Counter () {
  return (
    <div>
      <h1>Counter view</h1>
      <Item />
    </div>
  )
}

export default function () {
  const [ count, setCount ] = React.useState(0);

  return (
    <CountContext.Provider value={ { count, setCount } } >
      <Counter />
    </CountContext.Provider>
  )
}