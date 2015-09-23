import Bemmer from 'bemmer';
import React from 'react';

export const Editor = React.createClass({
  render() {
    const b = Bemmer.create('editor', this.props.className);

    return (
      <div className={b()}>
        <textarea
          className={b('__input')}
          type="text"
        />
      </div>
    );
  },
});
