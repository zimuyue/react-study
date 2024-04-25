/*
  组件组合
  JSX 本质上都会转成 React 元素（对象 Object）
  视图通过 props 传递的机制比较像 vue 的插槽
  但是 React 没有 slot 的概念定义
  React 本身就允许你通过 Props 传递任何类型的数据到子组件

  通过 children 或者是传递视图 React 元素的方式完全可以解决组件组合的问题
  props 可以传递任何类型的数据，所以组合的方式可以替代继承方案

  1.如果 Container 内部有内容, React 会在 props 内部增加 children 属性
  2.如果 Container 内部有非元素内容，children: 非元素内容
  3.如果 Container 内部有单个元素内容，children: React元素对象
  4.如果 Container 内部有多个元素内容，children: [...(React元素对象)]
*/

import styles from './index.module.css';

/*
  CSS module
  使用 vite 底层帮你做了 CSS 模块化的功能
  如果使用 webpack 需要额外的再进行配置
*/
function Modal (props) {
  return (
    <div className={ styles.modal }>
      <header className={ styles.modalHeader }>
        <h1>{ props.headerTitle }</h1>
      </header>
      <div className={ styles.modalContent }>
        { props.children }
      </div>
    </div>
  )
}

function Alert (props) {
  return (
    <Modal headerTitle={ props.headerTitle }>
      <p>{ props.alertText }</p>
    </Modal>
  )
}

function LoginModal (props) {
  return (
    <Modal headerTitle="登录">
      <form>
        <p>
          <input type="text" placeholder="用户名" />
        </p>
        <p>
          <input type="password" placeholder="密码" />
        </p>
        <p>
          <button>登录</button>
        </p>
      </form>
    </Modal>
  )
}

function WelcomeAlert () {
  return (
    <Alert
       headerTitle="欢迎您，亲爱的用户"
       alertText="您是我们最尊贵的用户，您将会体验到不一样的服务！"
    />
  )
}

function App () {
  return (
    <div>
      {/* <WelcomeAlert /> */}
      <LoginModal />
    </div>
  );
}

ReactDOM
.createRoot(document.getElementById('app'))
.render(<App />);
