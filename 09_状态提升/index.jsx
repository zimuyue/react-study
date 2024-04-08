/*
  状态提升
  两个组件（无父子关系）同享一个数据并且同步数据变化
  类组件调用（实例化）的时候，组件内部的状态是唯一且独立的
  将状态统一提升到共同的父级组件，统一管理

  单向数据流
  数据的流动是由父向子流动，通过 props 向下传递
  props 是只读数据，数据操作由父组件来完成，数据由父组件管理
*/

class Info extends React.Component {

  lengthReg () {
    const { username: { length } } = this.props;
    const isLess12 = length <= 12 ? '长度合法' : '长度必须小于12';
    const isGreater6 = length >= 6 && isLess12;
    return length < 6 ? '长度必须大于等于6位' : isGreater6;
  }

  render () {
    return (
      <div>
        <p>第{ this.props.inputNum }号</p>
        <p>输入长度：{ this.props.username.length }</p>
        <p>提示：{ this.lengthReg() }</p>
      </div>
    )
  }
}

class UserNameInput extends React.Component {
  render () {
    return (
      <div>
        <Info 
          username={ this.props.username } 
          inputNum={ this.props.inputNum }
        />
        <div>
          <input 
            type="text" 
            value={ this.props.username } 
            onChange={ (e) => this.props.usernameChange(e) } 
          />
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  
  state = {
    username: ''
  }

  userNameChange (e) {
    this.setState({
      username: e.target.value
    })
  }

  render () {
    return (
      <div>
        <UserNameInput 
          inputNum={ 1 } 
          username={ this.state.username }
          usernameChange={ this.userNameChange.bind(this) }
        />
        <UserNameInput 
          inputNum={ 2 }
          username={ this.state.username }
          usernameChange={ this.userNameChange.bind(this) }
        />
      </div>
    )
  }
}

ReactDOM
.createRoot(document.getElementById('app'))
.render(<App />);
