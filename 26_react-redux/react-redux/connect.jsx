import propTypes from 'prop-types';
import { Component } from 'react';

export default function connect (mapStateToProps, mapDispatchToProps) {
  return function (Comp) {
    return class extends Component {
      static contextTypes = {
        store: propTypes.object
      }

      constructor (props, context) {
        super(props, context);
        this.store = context.store;
        this.state = this.updateState();
      }

      componentDidMount () {
        this.store.subscribe(() => {
          this.setState(this.updateState());
        });
      }

      updateState = () => {
        const state = this.store.getState();
        const _state = mapStateToProps ? mapStateToProps(state) : {};
        const _action = {};

        if (mapDispatchToProps) {
          for (let action in mapDispatchToProps) {
            _action[action] = (...args) => {
              this.store.dispatch(mapDispatchToProps[action](...args));
            }
          }
        }

        return { ..._state, ..._action }
      }

      render () {
        return <Comp { ...this.state } />
      }
    }
  }
}