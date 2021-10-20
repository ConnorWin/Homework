import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders interval label with default interval displayed', () => {
  render(<App />);
  screen.getByText("current interval time: 2000");
});
