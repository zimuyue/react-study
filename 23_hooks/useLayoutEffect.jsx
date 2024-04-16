/*
  React.useLayoutEffect
  事件环 JS 在执行栈中执行任务，分为同步任务和异步任务
  而其中异步任务由分为微任务与宏任务，每当同步任务执行完毕后
  检查微任务队列是否待执行的任务（Promise.then、queueMicrotask）
  如果有待执行任务拿到调用栈中执行，执行完毕后进行 GUI 渲染视图
  GUI 执行完毕后，检查宏任务队列是否有待执行任务（setTimeout、request api）
  宏任务执行完毕后线程结束

  而在 GUI 渲染过程中分为渲染前与渲染后
  useLayoutEffect 是在 GUI 渲染前作为微任务执行，阻塞 GUI 的渲染
  useEffect 是在 GUI 渲染后作为宏任务执行

  useLayoutEffect 内不要操作耗时较长的副作用，例如请求数据等
  适合做动画操作、布局样式变更、DOM操作等
  这样可以避免在 GUI 渲染后再去操作样式布局，可能导致的屏幕布局闪烁问题
*/
export default function () {
  const boxRef = React.useRef();
  let t = null;
  let op = 0;
  
  React.useLayoutEffect(() => {
    t = setInterval(() => {
      op += 0.01;
      boxRef.current.style.opacity = op;

      if (op >= 1) {
        clearInterval(t);
        t = null;
      }
    }, 10)

    return () => {
      op = 0;
      boxRef.current.style.opacity = 0;
      clearInterval(t);
      t = null;
    }
  }, [])

  return (
    <div 
      ref={ boxRef }
      style={{ 
        width: '100px', 
        height: '100px', 
        backgroundColor: 'orange', 
        opacity: 0 
      }}
    ></div>
  )
}
