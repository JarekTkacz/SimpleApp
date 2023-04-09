import { render, screen } from '@testing-library/react';
import App from '../src';

test('renders learn react link', () => {
  render(<App />);
  expect(screen.getByRole("heading")).toHaveTextContent(/Test few words../);
  
});
