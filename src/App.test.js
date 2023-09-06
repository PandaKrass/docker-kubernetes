import { render, screen } from '@testing-library/react';
import App from './App';

test('renders an image', () => {
  render(<App />);
  const imageElement = screen.getByAltText('Rotating Scaling Image');
  expect(imageElement).toBeInTheDocument();
});