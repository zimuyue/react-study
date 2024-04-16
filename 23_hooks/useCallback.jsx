/*
  React.useCallback
  缓存一个静态方法，父组件 state 状态更新时
  不会重新触发子组件的函数执行
*/
const Child = React.memo((props) => {
  console.log('Child render');
  return (
    <div>
      <h2>Child Count { props.count }</h2>
      <button onClick={ props.handleClick }>SET COUNT2</button>
    </div>
  )
})

export default function () {
  const [ count1, setCount1 ] = React.useState(0);
  const [ count2, setCount2 ] = React.useState(0);

  // 函数内 state 更新一样会导致函数内代码重新执行
  // 子组件 props 赋值更新导致子组件重新渲染
  // const handleClick = () => {
  //   setCount2((count) => count + 1);
  // }

  // 畸形设计
  // 函数是静态方法，不会根据依赖项去重新变更方法引用
  // 所以基本上第二个参数都是设置为空数组，除非是真的有业务需求
  const handleClick = React.useCallback(() => {
    setCount2((count) => count + 1);
  }, [])

  return (
    <div>
      <Child count={ count2 } handleClick={ handleClick } />
      <h2>Parent Count { count1 }</h2>
      <button onClick={ () => setCount1((count) => count + 1) }>SET COUNT1</button>
    </div>
  )
}