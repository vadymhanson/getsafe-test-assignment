import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement1 = screen.getByText(/Get started Developer Insurance!/i)
  const linkElement2 = screen.getByText(/Get started Designer Insurance!/i)

  expect(linkElement1).toBeInTheDocument()
  expect(linkElement2).toBeInTheDocument()

})
