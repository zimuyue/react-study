/*
  React 三种模式

  Legacy mode => 老旧模式
  ReactDOM.render(<App />, node);

  Blocking mode => 封闭模式
  ReactDOM.createBlockingRoot(node).render(<App />);

  concurrent mode => 并发模式 // React@18
  ReactDOM.createRoot(node).render(<App />);
*/

/*
  strict Mode
  1. 对不安全生命周期函数检查
      componentWillMount
      componentWillUpdate
      componentWillReceiveProps
  2. ref 的定义与获取 - String Ref
  3. findDomNode 方法获取 DOM 元素 - Ref
  4. Legacy Context
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
