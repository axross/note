import React from 'react';

const Root = React.createClass({
  render() {
    console.log(this.props);

    return (
      <div>
        <div>
          bbb
        </div>

        <div>
          {this.props.children}
        </div>
      </div>
    );
  },
});

export default Root;
