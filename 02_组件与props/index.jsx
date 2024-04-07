const { useState } = React;

/*
  组件渲染的过程
  1. React 主动调用 Title 组件
  2. 将属性集合转换对象 props => { title: 'This is a Class Component.' }
  3. 将对象作为 props 传入组件
  4. 替换 JSX 中的 props 或者 state 中的变量
  5. ReactDOM 将最终的 React 元素通过一系列操作转换成真实 DOM 进行渲染
*/
class App extends React.Component {
  constructor (props) {
    super(props);
  }

  state = {
    title: 'This is Functional Component'
  }

  render () {
    return (
      <div>
        <Title title={ this.state.title } />
      </div>
    )
  }
}

/*
  属性 props 和数据/状态 state 区别
  1. state => 数据池 {} 组件内部的管理数据的容器，组件内部可写可读
  2. props => 属性池 {} 外部调用组件时传入的属性集合，组件内部可读不可写

  组件外部的数据 -> 组件内部时应该有权限修改的 -> 单向数据流
*/

/*
  函数组件一定要是一个纯函数，纯函数能保证绝对的复用性
  相同的入参保证返回相同的结果，纯函数不可以修改入参
*/
function Title (props) { 
  const [title, setTitle] = useState(props.title);

  return (
    <div>
      <h1>{ title }</h1>
      <button onClick={ () =>  setTitle('This is my Component')}>Click</button>
    </div>
  )
}

ReactDOM
.createRoot(document.getElementById('app'))
.render(<App />);
