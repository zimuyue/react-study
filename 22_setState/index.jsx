/*
  setState
  通过 setState 去更新组件内部 state
  setState 接收两个参数 updater 与 callback
  其中 updater 参数类型可以是对象也可以是函数
  1. 如果是对象的方式将参数对象与老的组件 state 进行浅合并
      等同于 Object.assign
  2. 如果是回调函数的方式，回调函数参数可以获取到上一次 prevState 值
      回调函数的返回值与组件 state 进行浅合并
  
  callback 作为第二个参数，会在 state 合并后并且重新渲染完组件后执行
  等同于 componentDidUpdate
  多次调用 setState 触发的 callback 回调函数合并后统一执行

  state 状态必须是由 setState 方法来更新
  确保 React 能够正确的追踪状态的变化并触发组件的重新渲染
  setState 采取异步更新策略，将多个 setState 执行结果合并更新，减少不必要的重复渲染
  如果是直接更改 state 状态 React 是无法感知到 state 变化
  导致组件无法触发重新渲染更新视图
*/

class App extends React.Component {

  state = {
    count: 0
  }

  setCount () {
    // 异步行为
    this.setState({
      count: 1
    })

    this.setState({
      count: 2
    }, () => {
      console.log('callback1', this.state.count);
    })

    this.setState({
      count: 3
    }, () => {
      console.log('callback2', this.state.count);
    })

    console.log(this.state.count); // 0

    // 回调的方式要比上述行为先执行
    this.setState((prevState, prevProps) => {
      const nextCount = prevState.count + 1;
      
      console.log(prevState);

      return {
        count: nextCount
      }
    })
  }

  render () {
    return (
      <div>
        <h1>{ this.state.count }</h1>
        <button onClick={ this.setCount.bind(this) }>SET COUNT</button>
      </div>
    )
  }
}

ReactDOM
.createRoot(document.getElementById('app'))
.render(<App />);
