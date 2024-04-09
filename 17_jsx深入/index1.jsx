// JSX 运行时选择 React 类型
class LoginBtnGroup extends React.Component {
  render () {
    return (
      <div>
        <button>登录</button>
        <button>注册</button>
      </div>
    )
  }
}

class WelcomeInfo extends React.Component {
  render () {
    return (
      <div>
        <h1>欢迎您，{ this.props.username }</h1>
      </div>
    )
  }
}

class Header extends React.Component {
  static components = {
    'login': LoginBtnGroup,
    'welcome': WelcomeInfo
  }

  render () {
    const HeaderUser = Header.components[this.props.type];

    return (
      <HeaderUser { ...this.props } />
    )
  }
}

class App extends React.Component {
  state = {
    switchType: false
  }

  handleSwitchType () {
    this.setState({
      switchType: !this.state.switchType
    })
  }

  render () {
    return (
      <div>
        <button onClick={ this.handleSwitchType.bind(this) }>Switch</button>
        <Header type={ this.state.switchType ? 'login' : 'welcome' } />
      </div>
    )
  }
}

ReactDOM
.createRoot(document.getElementById('app'))
.render(<App />);
