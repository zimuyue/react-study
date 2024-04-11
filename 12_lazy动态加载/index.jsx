/*
  React.lazy 内置方法
  Suspense React 内置组件

  lazy 是 React 提供懒（动态）加载组件的方法 React.lazy()
  参数：函数，动态导入组件 import()（必须支持 Promise）
  减少打包体积、对初次渲染不适用的组件延迟加载

  依赖内置组件 Suspense 后备内容
  Suspense 组件是为了给 lazy 加上 loading 指示器组件的一个容器组件
  通俗点讲就是当 lazy 动态加载的组件还未请求完成待加载时，所展示的内容
  Suspense 目前只和 lazy 配合实现组件等待加载指示器的功能

  lazy 接收一个动态导入组件的函数，该函数需要返回一个 Promise
  Promise 会 resolve 一个默认导出的 React 组件，必须是 export default xxx
  
  服务端渲染时使用动态组件库 Loadable Components
*/
import Loading from './Loading';

const Main = React.lazy(() => import('./Main'));

class App extends React.Component {
  render () {
    return (
      <React.Suspense fallback={ <Loading /> }>
        <Main />
      </React.Suspense>
    )
  }
}

ReactDOM
.createRoot(document.getElementById('app'))
.render(<App />);
