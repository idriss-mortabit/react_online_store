import React from 'react';
import ReactDOM from 'react-dom';
import Terms from './terms';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Terms />, div);
  ReactDOM.unmountComponentAtNode(div);
});
