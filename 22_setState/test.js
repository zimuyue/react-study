class Component {
  constructor () {
    this.callbackQueue = [];
    this.timer = null;
  }
  /*
    将 setState 的参数进行记录
    与组件内部 state 进行 Object.assign 浅合并
    开启计时器采取异步更新策略，多次调用时清除上一次任务
    将多次调用的结果合并，同时开启一个队列记录 callback
    在最后一次调用 setState 时批量触发
  */
  setState (stateChange, callback) {
    const state = Object.assign({}, this.state, stateChange);
    this.callbackQueue.push(callback);

    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }

    this.timer = setTimeout(() => {
      this.state = state;
      this.updateView(this.state);
      this.callbackQueue.forEach(cb => cb());
    }, 0);
  }

  updateView (state) {
    console.log('Updated', state);
  }
}

class Test extends Component {
  state = {
    count: 0
  }

  componentDidMount () {
    this.setState({
      count: 1
    }, () => {
      console.log('callback', this.state.count);
    });

    console.log(this.state.count); // 0

    this.setState({
      count: 2
    }, () => {
      console.log('callback', this.state.count);
    });

    console.log(this.state.count); // 0

    this.setState({
      count: 3
    }, () => {
      console.log('callback', this.state.count);
    });

    console.log(this.state.count); // 0
  }
}

const test = new Test();
test.componentDidMount();
