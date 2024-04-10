/*
  React.PureComponent
  纯组件本身也是继承于 React.Component

  React 组件渲染过程
  1. 执行 render 函数
  2. 返回 JSX 编译成 React 元素挂载到 React 节点树上
  3. 转换虚拟 DOM 新老虚拟节点对比优化替换节点内容

  PureComponent 内部是将 props 数据新旧对比
  老的数据与新的数据不同时，才会调用 render 函数
  对比的方式是浅层对比，需要区分基本类型与引用类型

  PureComponent 内部实现了 sholdComponentUpdate 函数
*/

import PureComp from './PureComp';
import StandardComp from './StandardComp';

class App extends React.Component {
  state = {
    count: 0,
    profile: {
      name: 'ming'
    }
  }

  pureCompRef = React.createRef();

  setZero () {
    this.setState({
      count: 0
    })

    // 强制 PureComponent 更新
    this.pureCompRef.current.forceUpdate(() => {
      console.log('PureComp render invoked')
    })
  }

  setCount () {
    this.setState({
      count: this.state.count + 1
    })
  }

  setName () {
    this.state.profile.name = 'mingming';
    // 将 profile 赋值一个新对象使 PureComponent 更新
    // this.state.profile = { ...this.state.profile, name: 'mingming' };
    this.setState({
      profile: this.state.profile
    })
  }

  render () {
    return (
      <div>
        <PureComp { ...this.state } ref={ this.pureCompRef } />
        <hr />
        <StandardComp { ...this.state } />
        <hr />
        <button onClick={ this.setZero.bind(this) }>SET ZERO</button>
        <button onClick={ this.setCount.bind(this) }>SET COUNT</button>
        <button onClick={ this.setName.bind(this) }>SET NAME</button>
      </div>
    )
  }
}

ReactDOM
.createRoot(document.getElementById('app'))
.render(<App />);
