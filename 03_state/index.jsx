/*
  state
  用来描述组件状态，又可以称为数据池
  props 和 state 更新数据要谨慎，尽量避免直接依赖他们
  很有可能是在异步程序中更新

  setState
  在类组件中使用形式是 this.setState 的方式
  说明此方法是由继承组件 Component 来提供的
  setState 接收两个参数 this.setState(updater, callback)

  updater 参数既可以是对象也可以是函数
  1.如果是对象的方式
    要与当前组件状态 this.state 进行合并 
    并返回一个新的 state 
    调用 Object.assign 浅合并

  2.如果是函数的方式 
    为用户提供上一次未更新时组件状态供用户使用
    并将此次函数执行的结果与组件状态浅合并
    记录此次函数，多次调用 this.setState 合并执行

  callback 参数
  等同于 componentDidUpdate 多次调用 this.setState
  传递的 callback 参数将会等待 state 状态合并更新后统一执行

  state 状态必须是由 setState 方法来更新
  确保 React 能够正确的追踪状态的变化并触发组件的重新渲染
  setState 采取异步更新策略，将多个 setState 执行结果合并更新，减少不必要的重复渲染
  如果是直接更改 state 状态 React 是无法感知到 state 变化
  导致组件无法触发重新渲染更新视图
*/
class App extends React.Component {
  constructor (props) {
    super(props);
  }

  state = {
    count: 0,
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

      return {
        count: nextCount
      }
    })
  }

  render () {
    return (
      <div>
        <h1>{ this.state.dateTime }</h1>
        <div>
          <h1>{ this.state.count }</h1>
          <button onClick={ this.setCount.bind(this) }>SET COUNT</button>
        </div>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(<App />);

// setTimeout(() => {
//   // ReactDOM 提供主动卸载组件的方法 React@17 版本支持
//   // ReactDOM.unmountComponentAtNode(
//   //   document.getElementById('app')
//   // )

//   // React@18 版本替换为此方法
//   root.unmount();
// }, 5000)
