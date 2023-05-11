import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Step from './Step';

describe('Step component', () => {
  const props = {
    label: 'Email',
    inputType: 'email',
    onNext: jest.fn(),
  };

  it('renders label correctly', () => {
    render(<Step {...props} />);
    const label = screen.getByText('Email:');
    expect(label).toBeInTheDocument();
  });

  it('handles onNext function correctly', () => {
    render(<Step {...props} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    const button = screen.getByRole('button', { name: 'Next' });
    fireEvent.click(button);
    expect(props.onNext).toHaveBeenCalledWith('test@example.com');
  });

  it('displays alert when input value is empty', () => {
    const originalAlert = window.alert;
    window.alert = jest.fn();

    render(<Step {...props} />);
    const button = screen.getByRole('button', { name: 'Next' });
    fireEvent.click(button);

    expect(window.alert).toHaveBeenCalledWith('Please enter your email');

    window.alert = originalAlert;
  });

});
