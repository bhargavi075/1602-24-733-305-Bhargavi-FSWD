
import React from 'react';

function CreateElementDemo() {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Hello React'),
    React.createElement(
      'p',
      null,
      'Welcome to React programming.'
    )
  );
}

export default CreateElementDemo;
