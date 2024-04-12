/*
  React Hooks(React@16.8)

  useState    创建状态数据
  useReducer  创建数据与复杂的数据操作
  useEffect   处理程序中的副作用
  useContext  创建组件体系上下文对象
  useMemo     创建可计算的数据
  useCallback 缓存方法
  useRef      获取节点实例

  hook 钩子函数
  帮助函数创建一些外部的数据源
  帮助函数与外界进行沟通联络

  通过 hook 钩到视图相关的数据源，当数据变化时，指示渲染函数重新执行
  钩数据源的过程就是分析视图代码的过程，让视图与数据源相关联

  hook 应该在函数最顶层使用遵循顺序调用，不能在类组件中使用
*/

import Comp1 from "./useState";
import Comp2 from "./useReducer";
import Comp3 from "./useEffect";
import Comp4 from "./useMemo";
import Comp5 from "./useCallback";

function App () {
  return (
    <div>
      {/* <Comp1 />
      <hr />
      <Comp2 />
      <hr />
      <Comp3 />
      <hr />
      <button onClick={ () => root.unmount() }>APP DISTORY</button>
      <hr />
      <Comp4 /> */}
      <hr />
      <Comp5 />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
