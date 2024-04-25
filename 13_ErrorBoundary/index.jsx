/*
  错误边界是 React@16 新增功能
  防止某个组件的 UI 渲染错误导致整个应用崩溃
  当子组件发生 JS 的错误，有备用的渲染 UI
  只能使用 class 方式来编写

  捕获错误的时机
  组件渲染时、生命周期函数中、组件构造函数中
  如果嵌套多个错误边界组件，则从最里层错误出发向上冒泡触发捕获

  static getDerivedStateFromError(error)
  参数：子组件抛出的错误，返回值就是新的 state -> setState
  获取捕获错误，修改错误状态

  无法捕获的场景
  1.事件处理函数
  2.异步代码 setTimeout ajax
  3.服务端渲染
  4.错误边界组件内部有错误

  componentDidCatch(error, info)
  参数：
    error 抛出的错误
    info 组件引发错误相关的信息，组件栈
  错误边界组件捕获异常，并进行后续处理，在组件抛出错误后调用
  错误信息获取，运行副作用操作
*/

class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  }

  static getDerivedStateFromError () {
    return { hasError: true };
  }

  componentDidCatch (error, info) {
    console.log('componentDidCatch:', error, info);
  }

  render () {
    const { hasError } = this.state;
    if (hasError) {
      return <h1>Ops, have something errors!</h1>
    }
    return this.props.children;
  }
}

class Test extends React.Component {
  render () {
    return (
      <div>{ data.title }</div>
    )
  }
}

class Sub extends React.Component {
  handleClick () {
    console.log(123);
    throw new Error('This is a btnclick error');
  }

  render () {
    return (
      <p onClick={ this.handleClick.bind(this) }>This is content</p>
    )
  }
}

class App extends React.Component {
  render () {
    return (
      <div>
        <ErrorBoundary>
          <Sub></Sub>
        </ErrorBoundary>

        <ErrorBoundary>
          <Test></Test>
        </ErrorBoundary>
      </div>
    )
  }
}

ReactDOM
.createRoot(document.getElementById('app'))
.render(<App />);
