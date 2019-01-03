import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './banner';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Banner />, div);
  ReactDOM.unmountComponentAtNode(div);
});
