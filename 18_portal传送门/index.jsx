/*
  ReactDOM.createPortal 传送门
  等同于 vue teleport
  将一个节点传送到任意的节点中去，例如模态框
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
