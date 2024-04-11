/*
  render props
  是一种组件复用的模式，父组件通过 props 传递渲染函数的方式
  实现父组件统一管理子组件的数据状态和方法，使子组件可以动态获取父组件的状态或行为
  相当于在一个容器组件上进行管理，集成多个子组件，根据需求渲染
  逻辑解耦，通过将横切关注点与核心业务逻辑进行分离，提高代码的可维护性和可扩展性
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
          (props) => <ClickCounter { ...props } />
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
