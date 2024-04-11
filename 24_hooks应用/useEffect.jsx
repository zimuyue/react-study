/*
  useEffect
  处理副作用的回调，与视图无关的一些操作（打印、请求数据、计时器等）
  依赖项中的数据状态改变时，触发回调函数的执行

  能够模拟以下生命周期函数
  componentDidMount     组件挂载后
  componentDidUpdate    组件更新后
  componentWillUnmount  组件将要卸载
*/
export default function () {

  const [ count, setCount ] = React.useState(0);

  // 没有依赖项，组件挂载完毕后只执行一次
  // 请求数据或初始化组件的设置
  React.useEffect(() => {
    console.log('componentDidMount');
  }, [])

  // 组件挂载完毕后执行一次，同时数据更新时执行
  // 不安全的写法，导致组件渲染逻辑不清晰
  React.useEffect(() => {
    console.log('componentDidMount + initial render');
  })

  // 依赖项更新时，触发回调执行
  React.useEffect(() => {
    console.log('componentDidMount + componentDidUpdate');
  }, [count])

  // 回调函数不能是异步函数
  // 因为回调函数会返回一个清除函数
  // React.useEffect(async () => {
  // })
  // 如果存在异步行为必须是下面的方式进行编写
  // React.useEffect(() => {
  //   const requestData = async () => {
  //     const result = await getList(count);
  //     setCount(result.data);
  //   }
  //   requestData();
  // }, [count])

  // 组件卸载时，清除副作用操作
  React.useEffect(() => {
    console.log('componentDidMount + componentWillUnmount');
    const t = setInterval(() => {
      console.log(new Date());
    }, 1000)

    return () => {
      clearInterval(t);
    }
  }, [])

  return (
    <div>
      <h1>{ count }</h1>
      <button onClick={ () => setCount((count) => count + 1) }>SET COUNT</button>
    </div>
  )
}
