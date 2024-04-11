/*
  React 三种模式

  老旧模式(Legacy mode)
  React 会使用同步渲染的方式，当更新发生时 React 会阻塞浏览器渲染
  直到所有组件的更新都完成后才会更新 DOM
  ReactDOM.render(<App />, node);

  封闭模式(Blocking mode) 
  React@18 的过渡方式，让开发者逐步尝试新的 concurrent mode
  在此模式下 React 会采用并发模式的调度器，但不会启用并发渲染的所有特性
  React 仍然会在更新过程中阻塞浏览器渲染，但调度器会更智能地处理优先级
  并且能够在大型应用程序中提供更好的性能
  ReactDOM.createBlockingRoot(node).render(<App />);

  并发模式(concurrent mode)
  React@18 新的并发渲染架构，允许在不阻塞浏览器渲染的情况下进行更新
  React 可以在多个优先级之间智能地调度任务
  以确保高优先级的任务能够尽快完成，从而提高用户体验和页面的响应速度
  ReactDOM.createRoot(node).render(<App />);
*/
import UnsafeLifeCycles from './UnsafeLifeCycles'

class App extends React.Component {
  state = {
    count: 0
  }

  add () {
    this.setState({
      count: this.state.count + 1
    })
  }

  render () {
    return (
      /*
        strict Mode
        1. 对不安全生命周期函数检查
            componentWillMount
            componentWillUpdate
            componentWillReceiveProps
        2. 检查 String Ref 的获取
        3. 检查 findDomNode 方法获取 DOM 元素
        4. Legacy Context
      */
      <React.StrictMode>
        <h2>Father count: { this.state.count }</h2>
        <UnsafeLifeCycles count={ this.state.count } />
        <button onClick={ this.add.bind(this) }>Click</button>
      </React.StrictMode>
    )
  }
}

ReactDOM
.createRoot(document.getElementById('app'))
.render(<App />);
