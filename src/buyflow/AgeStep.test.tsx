import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import AgeStep from './AgeStep';

describe('AgeStep', () => {
  const mockCallback = jest.fn();

  beforeEach(() => {
    mockCallback.mockClear();
  });

  it('renders correctly', () => {
    render(<AgeStep callback={mockCallback} />);
    expect(screen.getByText(/Age:/)).toBeInTheDocument();
    expect(screen.getByRole('spinbutton')).toHaveAttribute('type', 'number');
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls the callback with the age', () => {
    render(<AgeStep callback={mockCallback} />);
    const ageInput = screen.getByLabelText('Age:') as HTMLInputElement;
    const nextButton = screen.getByRole('button', { name: 'Next' });
    fireEvent.change(ageInput, { target: { value: '25' } });
    fireEvent.click(nextButton);
    expect(mockCallback).toHaveBeenCalledWith('25');
  });

  it('shows an alert when the age input is empty', () => {
    const alert = jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<AgeStep callback={mockCallback} />);
    const nextButton = screen.getByRole('button', { name: 'Next' });
    fireEvent.click(nextButton);
    expect(alert).toHaveBeenCalledWith('Please enter your age');
    expect(mockCallback).not.toHaveBeenCalled();
    alert.mockRestore();
  });
});
