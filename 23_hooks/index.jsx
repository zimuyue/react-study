/*
  React Hooks(React@16.8)

  useState    创建状态数据
  useReducer  创建数据与复杂的数据操作
  useEffect   处理程序中的副作用
  useContext  创建组件体系上下文对象
  useMemo     创建可计算的数据
  useCallback 缓存方法
  useRef      获取节点实例

  钩子函数
  帮助函数创建一些外部的数据源，使函数与外界进行沟通联络
  通过 hooks 钩到视图相关的数据源，当数据变化时，指示渲染函数重新执行
  hooks 应该在函数最顶层使用遵循顺序调用，不能在类组件中使用
*/

import Comp1 from "./useState";
import Comp2 from "./useReducer";
import Comp3 from "./useEffect";
import Comp4 from "./useMemo";
import Comp5 from "./useCallback";
import Comp6 from "./useContext";
import Comp7 from "./useRef";
import Comp8 from "./useLayoutEffect";

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
      {/* <hr />
      <Comp5 /> */}
      {/* <hr />
      <Comp6 /> */}
      {/* <hr />
      <Comp7 /> */}
      <hr />
      <Comp8 />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
