class PureComp extends React.PureComponent {

  // shouldComponentUpdate (nextProps, nextState) { // 浅对比的函数
  //   // shallowEqual
  //   this.props.count !== nextProps.count => render / x render
  //   return true  => render
  //   return false => x render
  // }

  render () {
    console.log('PureComp render');
    return (
      <div>
        <p>PureComp: { this.props.count }</p>
        <p>Name: { this.props.profile.name }</p>
      </div>
    )
  }
}

export default PureComp;
