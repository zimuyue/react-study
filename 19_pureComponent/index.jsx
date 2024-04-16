/*
  React.PureComponent
  纯组件是继承于 React.Component
  PureComponent 内部是将 props 数据新旧对比
  采取浅层对比方式，老的数据与新的数据不同时，才会调用 render 函数
  如果是引用类型数据，对比的是引用地址是否相同

  PureComponent 内部实现了 shouldComponentUpdate 函数
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

    // forceUpdate 强制 PureComponent 更新
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
