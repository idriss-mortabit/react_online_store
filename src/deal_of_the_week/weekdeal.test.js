import React from 'react';
import ReactDOM from 'react-dom';
import Weekdeal from './weekdeal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Weekdeal />, div);
  ReactDOM.unmountComponentAtNode(div);
});
