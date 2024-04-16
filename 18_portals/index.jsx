/*
  ReactDOM.createPortal 传送门
  等同于 vue teleport
  将一个节点传送到任意的节点中去，例如模态框
  关于 protals 组件冒泡事件，无论是在 DOM 树中的哪个位置
  嵌套的组件触发的事件仍然会冒泡到 portal 的祖先组件，最终影响到 React 树的根部
*/

class Modal extends React.Component {
  modalElement () {
    return (
      <div>
        Modal to document.body!
      </div>
    )
  }

  render () {
    return ReactDOM.createPortal(
      this.modalElement(),
      document.body
    )
  }
}

class App extends React.Component {
  render () {
    return (
      <div>
        <Modal />
      </div>
    )
  }
}

ReactDOM
.createRoot(document.getElementById('app'))
.render(<App />);
