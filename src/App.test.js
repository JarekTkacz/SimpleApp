import { render, screen } from '@testing-library/react';
import App from '../src';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Test few words../i);
  expect(linkElement).toBeInTheDocument();
});
