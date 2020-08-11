const React = require('react')
const ReactDOM = require('react-dom')

console.log('document:', window.document)

ReactDOM.render(
  React.createElement('div', null, `Hello React World!`),
  window.document.getElementById('app')
);
