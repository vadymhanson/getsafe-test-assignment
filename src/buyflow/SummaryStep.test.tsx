import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SummaryStep from './SummaryStep';
import { SummaryStepProps } from '../types/types';

describe('SummaryStep', () => {
  const mockData: SummaryStepProps['collectedData'] = {
    email: 'testuser@example.com',
    age: 35,
    name: 'Test User',
  };

  it('renders the component with collectedData', () => {
    const { getByText } = render(
      <Router>
        <SummaryStep collectedData={mockData} />
      </Router>
    );

    expect(getByText(`Name: ${mockData.name}`)).toBeInTheDocument();
    expect(getByText(`Email: ${mockData.email}`)).toBeInTheDocument();
    expect(getByText(`Age: ${mockData.age}`)).toBeInTheDocument();
    expect(getByText('Purchase')).toBeInTheDocument();
  });

  it('renders the component without name', () => {
    const { getByText, queryByText } = render(
      <Router>
        <SummaryStep collectedData={{ email: mockData.email, age: mockData.age }} />
      </Router>
    );

    expect(queryByText(`Name: ${mockData.name}`)).toBeNull();
    expect(getByText(`Email: ${mockData.email}`)).toBeInTheDocument();
    expect(getByText(`Age: ${mockData.age}`)).toBeInTheDocument();
    expect(getByText('Purchase')).toBeInTheDocument();
  });
});
