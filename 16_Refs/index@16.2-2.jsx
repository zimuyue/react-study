// React@16.2及以下版本使用 refs 转发机制
// 采用回调函数的方式
function MyInput (props) {
  return <input type='text' ref={ props.inputRef } />
}

class App extends React.Component {
  constructor (props) {
    super(props);
    this.inputRef = null;
  }

  inputOperate () {
    this.inputRef.value = '';
    this.inputRef.focus();
  }

  render () {
    return (
    <div>
      <MyInput inputRef={ el => this.inputRef = el } />
      <button onClick={ this.inputOperate.bind(this) }>Click</button>
    </div>
    )
  }
}

ReactDOM
.createRoot(document.getElementById('app'))
.render(<App />);
