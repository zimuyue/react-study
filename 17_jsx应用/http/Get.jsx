class Get extends React.Component {
  constructor (props) {
    super(props);
  }

  state = {
    dataList: [],
    component: this.props.loading || 'Loading...'
  }

  async componentDidMount () {
    const result = await axios(this.props.url);
    this.setState({
      dataList: result.data
    }, () => {
      setTimeout(() => {
        this.setState({
          component: this.props.children(this.state.dataList)
        })
      }, 1000);
    })
  }

  render () {
    return this.state.component;
  }
}

export default Get;
