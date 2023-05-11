import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './NotFound';

describe('NotFound', () => {
  test('renders "Looks like this page does not exist!"', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const notFoundText = screen.getByText('Looks like this page does not exist!');
    expect(notFoundText).toBeInTheDocument();
  });

  test('renders "Back Home" link', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const backHomeLink = screen.getByRole('link', { name: 'Back Home' });
    expect(backHomeLink).toBeInTheDocument();
    expect(backHomeLink).toHaveAttribute('href', '/');
  });
});
