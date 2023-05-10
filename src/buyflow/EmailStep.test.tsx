import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import EmailStep from './EmailStep';

describe('EmailStep', () => {
  const mockCallback = jest.fn();

  beforeEach(() => {
    mockCallback.mockClear();
  });

  it('renders correctly', () => {
    render(<EmailStep callback={mockCallback} />);

    expect(screen.getByText('Email:')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls the callback with the email address', () => {
    render(<EmailStep callback={mockCallback} />);
    const emailInput = screen.getByLabelText('Email:');
    const nextButton = screen.getByRole('button', { name: 'Next' });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(nextButton);
    expect(mockCallback).toHaveBeenCalledWith('test@example.com');
  });

  it('shows an alert when the email input is empty', () => {
    const alert = jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<EmailStep callback={mockCallback} />);
    const nextButton = screen.getByRole('button', { name: 'Next' });
    fireEvent.click(nextButton);
    expect(alert).toHaveBeenCalledWith('Please enter your age');
    expect(mockCallback).not.toHaveBeenCalled();
    alert.mockRestore();
  });
});
