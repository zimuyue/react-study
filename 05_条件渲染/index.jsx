class App extends React.Component {
  constructor (props) {
    super(props);
  }

  state = {
    count: 0,
    flag: true,
    tipShow: false
  }

  render () {
    const { flag, count, tipShow } = this.state;

    return (
      <div>
        {
          flag && <h1>This is my App!!!</h1>
        }
        {
          // 判断表达式一定是 bool false, null, undefined 的时候才不会被渲染
          // 0 NaN 会作为值返回视图中
          count && <h2>my is count!</h2>
        }
        {
          tipShow ? <Tip tipShow={ tipShow }/> : '123'
        }
      </div>
    )
  }
}

class Tip extends React.Component {
  render () {
    const { tipShow } = this.props;

    if (!tipShow) {
      // 如果 render 函数返回 null 不会进行任何渲染
      return null;
    }

    return <p>This is a TIP!!!</p>
  }
}

ReactDOM
.createRoot(document.getElementById('app'))
.render(<App />);
