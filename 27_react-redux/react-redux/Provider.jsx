import propTypes from 'prop-types';
import { Component } from 'react';

class Provider extends Component {
  static childContextTypes = {
    store: propTypes.object
  }

  getChildContext () {
    return {
      store: this.props.store
    }
  }

  render () {
    return this.props.children;
  }
}

export default Provider;