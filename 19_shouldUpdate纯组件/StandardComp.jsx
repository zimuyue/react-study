class StandardComp extends React.Component {
  render () {
    console.log('StandardComp render');
    return (
      <div>
        <p>StandardComp: { this.props.count }</p>
        <p>Name: { this.props.profile.name }</p>
      </div>
    )
  }
}

export default StandardComp;
