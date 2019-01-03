import React from 'react';
import ReactDOM from 'react-dom';
import Return from './return';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Return />, div);
  ReactDOM.unmountComponentAtNode(div);
});
