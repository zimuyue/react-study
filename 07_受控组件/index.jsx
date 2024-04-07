const hobbiesData = [
  {
    name: '钢琴',
    value: 'piano'
  },
  {
    name: '旅行',
    value: 'travel'
  },
  {
    name: '跑步',
    value: 'running'
  },
  {
    name: '唱歌',
    value: 'singing'
  }
]

class App extends React.Component {
  constructor (props) {
    super(props);
  }

  /*
    受控组件
    1. state 是表单控件的唯一的数据源
    2. 控制表单的操作并同步给 state
  */ 
  state = {
    username: '',
    gender: 'male',
    isStudent: true,
    hobbies: []
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleIsStudentChange (isStudent) {
    this.setState({ isStudent });
  }

  handleHobbiesChange (e) {
    if (e.target.checked) {
      this.setState({
        hobbies: [...this.state.hobbies, e.target.value]
      })
    } else {
      this.setState({
        hobbies: this.state.hobbies.filter(item => item !== e.target.value)
      })
    }
  }

  handleSubmit (e) {
    e.preventDefault();
    console.log('submit:', this.state);
  }

  handleReset (e) {
    e.preventDefault();
    this.setState({
      username: '',
      gender: 'male',
      isStudent: true,
      hobbies: []
    })
  }

  render () {
    const { 
      username,
      gender,
      isStudent,
      hobbies
    } = this.state;

    return (
      <div>
        <form>
          <p>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={ username }
              onChange={ this.handleChange.bind(this) }
            />
          </p>
          <p>
            <select 
              name="gender"
              defaultValue={ gender }
              onChange={ this.handleChange.bind(this) }
            >
              <option value="male">男</option>
              <option value="female">女</option>
            </select>
          </p>
          <p>
            <label>
              是否是学生：是
              <input 
                type="radio"
                name="isStudent"
                checked={ isStudent }
                onChange={ this.handleIsStudentChange.bind(this, true) }
              />
            </label>
            <label>
              |
              否
              <input
                type="radio"
                name="isStudent"
                onChange={ this.handleIsStudentChange.bind(this, false) }
              />
            </label>
          </p>
          <p>
            {
              hobbiesData.map(item => {
                return (
                  <span key={ item.value }>
                    <span>{ item.name }: </span> 
                    <input
                      type="checkbox"
                      name="hobbies"
                      value={ item.value }
                      checked={ hobbies.includes(item.value) }
                      onChange={ this.handleHobbiesChange.bind(this) }
                    />
                  </span>
                )
              })
            }
          </p>
          <p>
            <button onClick={ this.handleSubmit.bind(this) }>Submit!</button>
            <button onClick={ this.handleReset.bind(this) }>Reset!</button>
          </p>
        </form>
      </div>
    )
  }
}

ReactDOM
.createRoot(document.getElementById('app'))
.render(<App />);
