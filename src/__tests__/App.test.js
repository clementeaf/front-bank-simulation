import React from 'react';
import { render, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

test('renders without crashing', async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
});
