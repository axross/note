import Bemmer from 'bemmer';
import React from 'react';
import { connect } from 'react-redux';

import { authResource } from '../resources';

export const GlobalHeader = React.createClass({
  onClick() {
    authResource.signin({
      email: 'kou@axross.org',
      password: 'asdf1234',
    })
      .then(auth => {
        console.log(auth);
      })
      .catch(err => {
        console.dir(err);
        console.error(err);
      });
  },

  render() {
    const b = Bemmer.create('globalHeader');

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
  return {};
})(GlobalHeader);
