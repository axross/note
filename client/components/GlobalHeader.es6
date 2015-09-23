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

    console.log(this.props.isAuthed);

    return (
      <div className={b()}>
        <div className={b('__rightMenu')}>
          <a
            className={b('__rightMenu__item')}
            onClick={this.props.onSigninClick}
          >
            Login
          </a>
          <a
            className={b('__rightMenu__item')}
            onClick={this.props.onSignoutClick}
          >
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
