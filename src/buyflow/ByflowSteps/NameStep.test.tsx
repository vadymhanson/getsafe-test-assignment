import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import NameStep from './NameStep';

describe('NameStep', () => {
  const mockCallback = jest.fn();

  beforeEach(() => {
    mockCallback.mockClear();
  });

  it('renders correctly', () => {
    render(<NameStep onNext={mockCallback} />);
    expect(screen.getByText('First name:')).toBeInTheDocument();
    expect(screen.getByText('Last name:')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls the onNext with the full name', () => {
    render(<NameStep onNext={mockCallback} />);
    const firstNameInput = screen.getByLabelText('First name:') as HTMLInputElement;
    const lastNameInput = screen.getByLabelText('Last name:') as HTMLInputElement;
    const nextButton = screen.getByRole('button', { name: 'Next' });
    fireEvent.change(firstNameInput, { target: { value: 'Test' } });
    fireEvent.change(lastNameInput, { target: { value: 'User' } });
    fireEvent.click(nextButton);
    expect(mockCallback).toHaveBeenCalledWith('Test User');
  });

  it('shows an alert when one of the input fields is empty', () => {
    const alert = jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<NameStep onNext={mockCallback} />);
    const nextButton = screen.getByRole('button', { name: 'Next' });
    fireEvent.click(nextButton);
    expect(alert).toHaveBeenCalledWith('Please enter your name');
    expect(mockCallback).not.toHaveBeenCalled();
    alert.mockRestore();
  });
});
