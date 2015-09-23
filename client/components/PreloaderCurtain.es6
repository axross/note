import Bemmer from 'bemmer';
import React from 'react';
import { connect } from 'react-redux';

import { Preloader } from './Preloader';

export const PreloaderCurtain = React.createClass({
  render() {
    const b = Bemmer.create('preloaderCurtain');

    return (
      <div className={b(null, { isShown: this.props.isShown })}>
        <Preloader
          className={b('__preloader')}
        />
      </div>
    )
  },
});

export default connect(state => {
  return {
    isShown: state.preloaderCurtain.count >= 1,
  };
})(PreloaderCurtain);
