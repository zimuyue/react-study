/*
  state
  用来描述组件状态，又可以称为数据池
  props 和 state 更新数据要谨慎
  尽量避免直接依赖他们，很有可能是在异步程序中更新

  浅合并
  在更新 state 数组引用时 React 是无法检测到原数组修改值变化的 push/unshift...
  所以在更新数组状态时，要设置一个新数组，确保 React 能够正确地检测到状态的更改并触发重新渲染

  this.setState({
    // arr: [...this.state.arr, 4]
    arr: this.state.arr.concat(4)
  })
*/

class Title extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <h1>{ this.props.title }</h1>
    )
  }
}

class DateTime extends React.Component {
  constructor (props) {
    super(props);
  }

  state = {
    dateTime: new Date().toString()
  }

  // 组件已经被挂载到了真实 DOM 中后运行的函数
  componentDidMount () {
    this.t = setInterval(() => {
      this.setState({
        dateTime: new Date().toString()
      })
    }, 1000)
  }

  // 组件即将被卸载时运行
  componentWillUnmount () {
    clearInterval(this.t);
    this.t = null;
    console.log('componentWillUnmount');
  }

  render () {
    return (
      <div>
        <h2>{ this.state.dateTime }</h2>
      </div>
    )
  }
}

class Board extends React.Component {
  render () {
    return (
      <div>
        <Title title="This is my clock!" />
        <DateTime />
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(<Board />);

setTimeout(() => {
  // ReactDOM 提供主动卸载组件的方法 React@17 版本支持
  // ReactDOM.unmountComponentAtNode(
  //   document.getElementById('app')
  // )

  // React@18 版本替换为此方法
  root.unmount();
}, 5000)
