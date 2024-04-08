// HOC 中使用 refs 转发机制
class MyInput extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return <input type="text" placeholder={ this.props.placeholder } />
  }
}

function InputHoc (WrapperComponent) {
  class Input extends React.Component {
    constructor (props) {
      super(props);
    }

    render () {
      const { forwardRef, ...props } = this.props;
      return <WrapperComponent ref={ forwardRef } { ...props } />
    }
  }

  function forwardRef (props, ref) {
    return <Input { ...props } forwardRef={ ref } />
  }

  forwardRef.displayName = 'Input - ' + WrapperComponent.name;

  return React.forwardRef(forwardRef);
}

const MyInputHoc = InputHoc(MyInput);

class App extends React.Component {
  constructor (props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount () {
    console.log(this.inputRef);
  }

  inputOperate () {
    const oInput = this.inputRef.current;
    oInput.value = '';
    oInput.focus();
  }
  
  render () {
    return (
      <div>
        <MyInputHoc ref={ this.inputRef } placeholder='place write content' />
        <button onClick={ this.inputOperate.bind(this) }>Click</button>
      </div>
    )
  }
}

ReactDOM
.createRoot(document.getElementById('app'))
.render(<App />);
