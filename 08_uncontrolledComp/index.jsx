/*
  非受控组件
  1. 表单数据状态不受 state 控制
  2. 使用 React ref 从 DOM 节点中获取表单数据的组件
*/
class App extends React.Component {
  constructor (props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.usernameRef = React.createRef();
    this.genderRef = React.createRef();
    this.fileRef = React.createRef();
  }

  handleSubmit (e) {
    e.preventDefault();

    // React 不推荐使用这种方式
    // console.log(this.refs.usernameRef.value);

    console.log(this.usernameRef.current.value);
    console.log(this.genderRef.current.value);
    console.log(this.fileRef.current.files[0]);
  }

  render () {
    return (
      <form onSubmit={ this.handleSubmit }>
        <p>
          用户 
          {/* <input type="text" placeholder="username" ref="usernameRef" /> */}
          <input type="text" placeholder="username" ref={ this.usernameRef } />
        </p>
        <p>
          {/* 
            form field 默认值使用 defaultValue 
            组件挂载完毕后进行更新，不会导致 DOM 的任何更新
          */}
          <select 
            defaultValue="male"
            ref={ this.genderRef }
          >
            <option value="male">男</option>
            <option value="female">女</option>
          </select>
        </p>
        <p>
          {/* 典型的非受控组件 */}
          <input type="file" ref={ this.fileRef } />
        </p>
        <p>
          <button type="submit">Submit!</button>
        </p>
      </form>
    )
  }
}

ReactDOM
.createRoot(document.getElementById('app'))
.render(<App />);
