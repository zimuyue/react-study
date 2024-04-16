// 高阶组件接收的参数组件可以是类组件也可以是函数式组件
function MyInput (props) {

  // 使用 Hooks 模拟 componentDidUpdate 函数
  React.useEffect(() => {
    console.log('Is MyInput');
  }, [props.inputValue])

  return (
    <div>
      <h1>{ props.inputValue }</h1>
      <p>总计：{ props.b + props.c }</p>
      <input
        type="text"
        placeholder="place write content"
        value={ props.inputValue }
        onChange={ props.handleInput }
      />
    </div>
  )
}

export default MyInput;
