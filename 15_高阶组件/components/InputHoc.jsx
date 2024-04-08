function InputHoc (WrapperComponent) {
  // 高阶组件是不可以修改参数组件
  // 这样修改可能会导致参数组件内部的逻辑的执行失效
  // WrapperComponent.prototype.componentDidUpdate = function () {
  //   console.log('我是InputHoc');
  // }
  class InputHocComponent extends React.Component {
    state = {
      inputValue: ''
    }

    componentDidUpdate () {
      console.log('Is InputHocComponent');
    }

    handleInput (e) {
      this.setState({
        inputValue: e.target.value
      })
    }

    render () {
      // 如何排除参数组件不需要的属性
      // 解构赋值 - 剩余属性
      const { a, ...props } = this.props; 

      return (
        <WrapperComponent
          inputValue={ this.state.inputValue }
          handleInput={ this.handleInput.bind(this) }
          { ...props }
        />
      )
    }
  }

  InputHocComponent.displayName = 'InputHoc';

  return InputHocComponent;
}

export default InputHoc;
