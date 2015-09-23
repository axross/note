import React from 'react';
import { connect } from 'react-redux';

import { authAction } from './actions';
import {
  GlobalHeader,
  GlobalMain,
  PreloaderCurtain,
} from './components';

const Root = React.createClass({
  onSigninClick() {
    this.props.dispatch(authAction.signin());
  },

  onSignoutClick() {
    this.props.dispatch(authAction.signout());
  },

  render() {
    console.log(this.props);

    return (
      <div>
        <GlobalHeader
          onSigninClick={this.onSigninClick}
          onSignoutClick={this.onSignoutClick}
        />

        <GlobalMain>
          {this.props.children}
        </GlobalMain>

        <PreloaderCurtain />
      </div>
    );
  },
});

export default connect(state => {
  return {};
})(Root);
