/*
  React 事件处理采用 DOM0 标准中的事件属性定义方法
  为元素绑定 onClick 事件处理函数，使用小驼峰的形式命名

  React 底层对事件对象进行了包装
  属于合成基础事件对象 SyntheticBaseEvent
  SBE 是遵守 W3C 事件对象规范的，不存在任何浏览器的兼容性问题

  React 认为事件处理跟视图是有程序上的直接关系
  事件处理和视图写在一起可以更加直观的表述视图与逻辑的关系，更容易维护
*/

class App extends React.Component {
  constructor (props) {
    super(props);
    // this.doSth.bind(this);
  }

  /*
    默认处理函数的 this 是 undefined
    ES6 class 模块默认是不对事件处理函数进行 this 再绑定的

    解决 this 指向的办法
    1. bind(this) - 构造器
    2. bind(this) - 视图标记中
    3. 视图中回调 + 箭头函数
    但是 render 函数每次执行的时候，都会传递新的回调
    给子组件属性传递函数的时候，每次都会创建一个新的箭头函数
    会造成子组件不必要的渲染，触发 render 函数
  */
  state = {
    count: 0
  }

  handleAddCount () {
    this.setState({
      count: ++this.state.count
    })
  }
 
  doSth (event) {
    console.log('SBE:', event);
  }

  // doSth = (event) => {
  //   console.log('SBE:', event);
  // }
  
  render () {
    return (
      <div>
        {/* <button onClick={ this.doSth.bind(this) }>Click</button> */}
        {/* <button onClick={ () => this.doSth()}>Click</button> */}
        {/* <Title fn={ () => this.doSth() } /> */}
        {/* <button onClick={ this.doSth }>Click</button> */}
        <button onClick={ this.handleAddCount.bind(this) }>Count++</button>
        <MyButton handleClick={ (e) => this.doSth(e) }>Click</MyButton>
      </div>
    )
  }
}

class MyButton extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    console.log('MyButton render');
    return (
      <button onClick={ (e) => this.props.handleClick(e) }>
        { this.props.children }
      </button>
    )
  }
}

ReactDOM
.createRoot(document.getElementById('app'))
.render(<App />);
