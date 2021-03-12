import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const comingSoon = screen.getByText(/Coming soon to your favorite app store./i);
  expect(comingSoon).toBeInTheDocument();
});
