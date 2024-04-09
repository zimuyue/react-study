/*
  refs 允许访问真实 DOM 进行操作

  应用场景
  1. 管理 input 的焦点聚焦
  2. 音视频媒体管理
  3. 设置强制动画
  4. 集成第三方 DOM 库 jquery
  5. 模态框

  通过 React.createRef() 创建 ref 对象
  通过元素的 ref 属性可以附加到 React 元素上
  通常在构造器中给 this 上的属性赋值一个 ref 方便整个组件使用
  ref 只要传递 React 元素中，就可以利用 ref 的 current 属性访问到该真实 DOM 节点
  ref 在 componentDidMount 和 componentDidUpdate 触发前更新

  ref 有不同的使用方式
  1. 在 html 元素中 current 是真实 DOM 节点
  2. 在 class 组件中 current 是组件实例
  3. 在函数组件中没有实例对象，附加不到组件上
*/
class Modal extends React.Component {
  constructor (props) {
    super(props);

    this.h1Ref = React.createRef();
    console.log('constructor', this.h1Ref);
  }

  state = {
    modalTitle: 'Modal Component'
  }

  componentDidMount () {
    console.log('componentDidMount', this.h1Ref);

    this.t = setTimeout(() => {
      this.setState({
        modalTitle: 'modal component to lowerCase'
      })
    }, 2000);
  }

  componentDidUpdate () {
    console.log('componentDidUpdate', this.h1Ref);
  }

  render () {
    return (
      <div>
        <h1 ref={ this.h1Ref }>{ this.state.modalTitle }</h1>
      </div>
    )
  }
}

function Text () {
  const pRef = React.useRef(null);

  React.useEffect(() => {
    console.log('Text pRef', pRef)
  }, [])

  return (
    <div>
      <p ref={ pRef }>Text functional Component</p>
    </div>
  )
}

class App extends React.Component {
  constructor (props) {
    super(props);
    this.modalRef = React.createRef();
  }

  render () {
    return (
      <div>
        <Modal ref={ this.modalRef } />
        <Text />
      </div>
    )
  }
}

ReactDOM
.createRoot(document.getElementById('app'))
.render(<App />);
