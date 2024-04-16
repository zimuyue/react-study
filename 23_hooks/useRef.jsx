/*
  React.useRef
  创建虚拟 DOM 节点后去创建真实 DOM 的同时
  找到模板标记中绑定的对应 ref 值，赋值给 current 属性
*/
export default function () {
  const h1Ref = React.useRef();

  React.useEffect(() => {
    console.log(h1Ref);
  }, [])

  const handleClick = () => {
    console.log(h1Ref);
  }

  return (
    <div>
      <h1 ref={ h1Ref }>Ref Component</h1>
      <button onClick={ handleClick }>GET REF</button>
    </div>
  )
}
