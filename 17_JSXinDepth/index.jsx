/*
  JSX 是 React.createElement 函数调用的语法糖
  React 对 JSX 语法底层编译成 React.createElement 调用形式
*/

// JSX 点语法
const MyUI = {
  Button: class extends React.Component {
    colorSystem = {
      'primary': 'blue',
      'success': 'green',
      'warning': 'orange',
      'danger': 'red'
    }
    render () {
      const { type, children } = this.props;
      return (
        <button type={ this.colorSystem[type] }>{ children }</button>
      )
    }
  },
  Input: function (props) {
    const { placeholder, handleInput } = props;
    return (
      <input 
        type="text"
        placeholder={ placeholder }
        onChange={ (e) => handleInput(e) }
      />
    )
  }
}

class App extends React.Component {

  handleInput (e) {
    console.log('input', e);
  }

  render () {
    return (
      <div>
        <MyUI.Input
          placeholder='place write content'
          handleInput={ this.handleInput.bind(this) }
        />
        <MyUI.Button type='primary'>Click</MyUI.Button>
      </div>
    )
  }
}

ReactDOM
.createRoot(document.getElementById('app'))
.render(<App />);
