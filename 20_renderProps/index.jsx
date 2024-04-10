/*
  render props
  1. 统一管理组件数据状态和方法
  2. 在组件上能够插入更多的其它组件

  通过一个外壳组件增强其它组件，集成性封装性更好
  例如可以给 antd 组件，集成更多的功能
*/

class ClickCounter extends React.Component {
  render () {
    return (
      <div>
        <p>ClickCounter: { this.props.count }</p>
        <button onClick={ this.props.add }>CLICK +</button>
        <button onClick={ this.props.minus }>CLICK -</button>
      </div>
    )
  }
}

class Counter extends React.Component {
  state = {
    count: 0
  }

  add () {
    this.setState({
      count: this.state.count + 1
    })
  }

  minus () {
    this.setState({
      count: this.state.count - 1
    })
  }

  render () {
    return (
      <div>
        {
          this.props.render({
            count: this.state.count,
            add: this.add.bind(this),
            minus: this.minus.bind(this)
          })
          // this.props.children({
          //   count: this.state.count,
          //   add: this.add.bind(this),
          //   minus: this.minus.bind(this)
          // })
        }
      </div>
    )
  }
}

class App extends React.Component {
  render () {
    return (
      <div>
        <Counter render={
          (props) =>  <ClickCounter { ...props } />
        }/>
        {/* <Counter>
          { (props) =>  <ClickCounter { ...props } /> }
        </Counter> */}
      </div>
    )
  }
}

ReactDOM
.createRoot(document.getElementById('app'))
.render(<App />);
