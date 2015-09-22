import React from 'react';

import {
  GlobalHeader,
  GlobalMain,
} from './components';

const Root = React.createClass({
  render() {
    console.log(this.props);

    return (
      <div>
        <GlobalHeader />

        <GlobalMain>
          {this.props.children}
        </GlobalMain>
      </div>
    );
  },
});

export default Root;
