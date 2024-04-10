class Component {
  constructor () {
    this.callbackQueue = [];
    this.timer = null;
  }

  setState (stateChange, callback) {
    const state = Object.assign({}, this.state, stateChange);
    this.callbackQueue.push(callback);

    // 清空多次调用 setState 的操作，只保留最后一次
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }

    // 批处理
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
