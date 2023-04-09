import { render, screen } from '@testing-library/react';
import App from '../src';

test('renders learn react link', () => {
  render(<App />);
  const element = screen.getByText(/Test few words/i);

    expect(element).toBeInTheDocument();
  
});
