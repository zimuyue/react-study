/*
  这些钩子函数都会在 render 之前执行
  React 不推荐在这些钩子函数中去进行副作用操作
  尤其是请求数据、操作 DOM 等
  因为 React 新版本采用了 Fiber 架构
  类似于 JS 轮转时间片，将任务切割多个小任务进行执行
  说明 render 函数可能会被触发多次，导致这些钩子函数也会触发
  如果包含了副作用操作，就会造成应用的操作混乱，发生不可控的情况
  
  constructor
  componentWillMount
  componentWillReceiveProps
  componentWillUpdate
  getDerivedStateFromProps
  shouldComponentUpdate
  render
*/

class UnsafeLifeCycles extends React.Component {
  constructor (props) {
    super(props);
  }

  state = {
    count: 0
  }

  // 组件将要挂载
  // UNSAFE_componentWillMount () {
  //   console.log('componentWillMount');
  // }

  /*
    替代 componentWillReceiveProps 函数
    使外界传递的 props 可控
    组件内必须声明 state
    对传递的 props 拦截进行判断是否更新 state
    state + getDerivedStateFromProps
  */
  static getDerivedStateFromProps (nextProps, prevState) {
    if (nextProps.count % 2 === 0) {
      return {
        count: nextProps.count
      }
    }
    return null;
  }

  // 组件将要接收来自外界传递的 props 数据
  // UNSAFE_componentWillReceiveProps (nextProps) {
  //   console.log(nextProps, this.props); // 新值与老值
  //   console.log('componentWillReceiveProps');
  // }

  /*
    替代 componentWillUpdate 函数
    获取组件更新前的一个快照
    并将函数返回的结果作为 componentDidUpdate 第三个参数
    getSnapshotBeforeUpdate + componentDidUpdate 必须一起联用
  */
  getSnapshotBeforeUpdate (prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    return 1;
  }

  // 组件更新之后
  componentDidUpdate (prevProps, prevState, snapShot) {
    console.log('componentDidUpdate');
    console.log(prevProps, prevState, snapShot);
  }

  // 组件将要更新
  // UNSAFE_componentWillUpdate (nextProps, nextState) {
  //   console.log(nextProps, nextState);
  //   console.log('componentWillUpdate');
  // }

  render () {
    console.log('Rendering ...');

    return (
      <div>
        {/* <h1>Child: { this.props.count }</h1> */}
        <h1>Child: { this.state.count }</h1>
      </div>
    )
  }
}

export default UnsafeLifeCycles;
