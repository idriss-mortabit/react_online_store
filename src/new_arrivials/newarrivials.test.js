import React from 'react';
import ReactDOM from 'react-dom';
import Newarrivials from './newarrivials';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Newarrivials />, div);
  ReactDOM.unmountComponentAtNode(div);
});
