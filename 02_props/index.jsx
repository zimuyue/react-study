const { useState } = React;

/*
  props
  属性池，外部调用组件时传入的属性集合，组件内部可读不可写
  遵循单向数据流，子组件无法直接去更改父组件传递的 props
  props 是只读数据，数据操作由父组件来完成，数据由父组件管理

  组件渲染的过程
  当一个组件被使用时 React 会调用这个组件，触发组件的渲染
  如果是类组件则调用 render 函数，如果是函数式组件则执行函数
  将函数执行的结果作为描述当前组件的 React 元素，React 会根据
  组件创建的 React 元素去创建虚拟 DOM 树，进行虚拟 DOM 与真实 DOM 对比
  进行差异化更新，最终渲染真实 DOM，调用类组件 componentDidMount 或者 componentDidUpdate
  组件呈现，如果组件内 state 发生变更，重复这个操作过程
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
  函数组件一定要是一个纯函数，纯函数能保证绝对的复用性
  相同的入参保证返回相同的结果，纯函数不可以修改入参
*/
function Title (props) { 
  const [title, setTitle] = useState(props.title);

  return (
    <div>
      <h1>{ title }</h1>
      <button onClick={() =>  setTitle('This is my Component')}>Click</button>
    </div>
  )
}

ReactDOM
.createRoot(document.getElementById('app'))
.render(<App />);
