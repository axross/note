import Bemmer from 'bemmer';
import React from 'react';

export const GlobalMain = React.createClass({
  render() {
    const b = Bemmer.create('globalMain', this.props.className);

    return (
      <div>
        {this.props.children}
      </div>
    );
  },
});
