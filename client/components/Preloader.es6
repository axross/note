import Bemmer from 'bemmer';
import React from 'react';

export const Preloader = React.createClass({
  render() {
    const b = Bemmer.create('preloader', this.props.className);

    return (
      <img
        className={b()}
        src="/images/preloader.svg"
        alt="Loading..."
      />
    );
  },
});
