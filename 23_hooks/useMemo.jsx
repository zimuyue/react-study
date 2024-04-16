/*
  React.memo
  memorize 记忆
  本质上就是实现了 PureComponent => shouldComponentUpdate
  进行浅比较 props 与 state 内的值有无变化，有变化时触发更新
*/
const Child = React.memo((props) => {
  console.log('Child render');
  return (
    <div>
      {/* <h2>Child Count { props.count }</h2> */}
      <h2>Child Count { props.childData.count2 }</h2>
    </div>
  )
})

// function Child (props) {
//   console.log('Child render');
//   return (
//     <div>
//       <h2>Child Count { props.count }</h2>
//     </div>
//   )
// }

export default function () {
  const [ count1, setCount1 ] = React.useState(0);
  const [ count2, setCount2 ] = React.useState(0);
  /*
    函数中 state 的更新会导致函数的重新执行
    在返回的 JSX 中有调用子组件的行为，那么子组件也会重新执行
    不关心子组件中 props 的数据状态有没有更新，子组件都会被执行
    这样会造成很大的性能问题
  */
  // const childData = { count2 };

  /*
    React.useMemo
    当 count2 发生变更时 useMemo 会重新执行一次回调函数
    返回一个新的值，赋值给 childData，用计算属性的方式来缓存值
    只有依赖项发生更新时，才会去重新计算，更新值
    核心与 Vue 中 computed 是一样的
  */
  const childData = React.useMemo(() => ({ count2 }), [count2]);

  return (
    <div>
      {/* <Child count={ count2 } /> */}
      <Child childData={ childData } />
      <h2>Parent Count { count1 }</h2>
      <button onClick={ () => setCount1((count) => count + 1) }>SET COUNT1</button>
      <button onClick={ () => setCount2((count) => count + 1) }>SET COUNT2</button>
    </div>
  )
}