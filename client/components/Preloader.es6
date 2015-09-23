import React from 'react';

const Preloader = React.createClass({
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
