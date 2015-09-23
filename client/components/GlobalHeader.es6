import Bemmer from 'bemmer';
import React from 'react';
import { connect } from 'react-redux';

import { authAction } from '../actions';

export const GlobalHeader = React.createClass({
  onClick() {
    this.props.dispatch(authAction.signin());
  },

  render() {
    const b = Bemmer.create('globalHeader');

    console.log(this.props.isAuthed);

    return (
      <div className={b()}>
        <div className={b('__rightMenu')}>
          <a
            className={b('__rightMenu__item')}
            onClick={this.onClick}
          >
            Login
          </a>
          <a className={b('__rightMenu__item')}>
            Logout
          </a>
        </div>
      </div>
    );
  },
});

export default connect(state => {
  return {
    isAuthed: state.auth.isAuthed,
  };
})(GlobalHeader);
