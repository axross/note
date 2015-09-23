import CodeMirror from 'codemirror';
import Bemmer from 'bemmer';
import React from 'react';

export const Editor = React.createClass({
  componentDidMount() {
    this.editor = CodeMirror.fromTextArea(React.findDOMNode(this.refs.textarea), {
      value: '',
      mode: 'markdown',
      lineNumbers: true,
      inputStyle: 'contenteditable',
    });
  },

  render() {
    const b = Bemmer.create('editor', this.props.className);

    return (
      <div className={b()}>
        <textarea
          name="qwkeqle"
          className={b('__editor')}
          ref="textarea"
        />
      </div>
    );
  },
});
