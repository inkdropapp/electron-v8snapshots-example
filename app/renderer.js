require('./v8-snapshots-util')
const React = require('react')
const ReactDOM = require('react-dom')

ReactDOM.render(
  React.createElement('div', null, `Hello React World!`),
  window.document.getElementById('app')
);
