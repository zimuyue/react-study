/*
  React.forwardRef (React@16.3 支持)
  用于实现 ref 转发机制，能够让父组件直接操作子组件内部真实 DOM 元素
  forwardRef 接收一个渲染函数作为参数，并创建一个 React 组件
  渲染函数中具备两个参数 props 与 ref

  父组件向 forwardRef 组件绑定 ref 值
  通过 forwardRef 向子组件内转发 ref 属性
  ref 参数只能用 forwardRef 定义的组件内接收
*/

const MyInput = React.forwardRef((props, ref) => {
  return <input type="text" placeholder={ props.placeholder } ref={ ref } />
})

class App extends React.Component {
  constructor (props) {
    super(props);
    this.inputRef = React.createRef();
  }

  inputOperate () {
    const oInput = this.inputRef.current;
    oInput.value = '';
    oInput.focus();
  }

  render () {
    return (
      <div>
        <MyInput ref={ this.inputRef } placeholder='place write content' />
        <button onClick={ this.inputOperate.bind(this) }>Click</button>
      </div>
    )
  }
}

ReactDOM
.createRoot(document.getElementById('app'))
.render(<App />);
