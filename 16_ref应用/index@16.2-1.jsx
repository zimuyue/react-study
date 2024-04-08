// React@16.2及以下版本使用 refs 转发机制
// 直接传递过于暴力
function MyInput (props) {
  return <input type='text' ref={ props.inputRef } />
}

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
        <MyInput inputRef={ this.inputRef } />
        <button onClick={ this.inputOperate.bind(this) }>Click</button>
      </div>
    )
  }
}

ReactDOM
.createRoot(document.getElementById('app'))
.render(<App />);
