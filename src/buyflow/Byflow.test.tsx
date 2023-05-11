import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Buyflow from './Buyflow';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    type: 'mock-type',
  }),
}));

describe('Buyflow component', () => {
  it('renders without errors', () => {
    render(
      <MemoryRouter>
        <Buyflow />
      </MemoryRouter>
    );
  });

  it('redirects to 404 page for invalid type', () => {
    const history = createMemoryHistory();
    history.push('/buy/invalid-type');

    const { getByText } = render(
      <Router history={history}>
        <Route path="/buy/:type">
          <Buyflow />
        </Route>
        <Route path="/404">404 page</Route>
      </Router>
    );

    expect(getByText('404 page')).toBeInTheDocument();
  });
});
