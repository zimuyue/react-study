/*
  string refs
  通过组件实例来获取 refs 集合
  这种方式在严格模式下，已经被 React 放弃
  需要 React 保持追踪当前正在渲染的组件 this 没法确定  
  React 获取 ref 可能会比较慢

  不能在 render 中工作，不能组合使用只能有一个 ref
*/
class MyInput extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    console.log(this.refs.myInput);
  }

  render () {
    console.log(this.refs.myInput); // undefined

    return (
      <input type='text' ref='myInput' />
    )
  }
}

class App extends React.Component {
  render () {
    return (
      <MyInput />
    )
  }
}

ReactDOM
.createRoot(document.getElementById('app'))
.render(<App />);
