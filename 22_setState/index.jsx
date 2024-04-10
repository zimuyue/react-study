/*
  setState
  1. 执行后通知 React 内部使用更新后的 state 重新渲染组件树
  2. 执行会延迟，更新 state 会延迟且渲染，合并多次 setState 行为后再进行更新渲染
  3. 它是靠异步任务实现批处理 Batching

  setState(updater, callback)
  updater  会与现有的 state 进行浅合并如 Object.assign
  callback 会在 state 合并且重新渲染完组件后执行，等同于 componentDidUpdate
  
  多次调用 setState 触发的 callback 回调函数也是会进行合并后执行的

  参数保证是最新的，返回值与 state 进行浅合并
  在回调内访问 state 可以获取到上一次的 state 值
  setState((prevState, prevProps) => {
    return { count: 1 }
  })
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
