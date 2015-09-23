import Bemmer from 'bemmer';
import React from 'react';
import { connect } from 'react-redux';

import { authAction } from '../actions';

export const GlobalHeader = React.createClass({
  propTypes: {
    onSigninClick: React.PropTypes.func.isRequired,
    onSignoutClick: React.PropTypes.func.isRequired,
  },

  render() {
    const b = Bemmer.create('globalHeader', this.props.className);

    return (
      <div className={b()}>
        <div className={b('__rightMenu')}>
          {this.renderAuthButton()}
        </div>
      </div>
    );
  },

  renderAuthButton() {
    const b = Bemmer.create('globalHeader', this.props.className);

    if (this.props.isAuthed) {
      return (
        <a
          className={b('__rightMenu__item')}
          onClick={this.props.onSignoutClick}
        >
          Logout
        </a>
      );
    } else {
      return (
        <a
          className={b('__rightMenu__item')}
          onClick={this.props.onSigninClick}
        >
          Login
        </a>
      );
    }
  },
});

export default connect(state => {
  return {
    isAuthed: state.auth.isAuthed,
  };
})(GlobalHeader);
