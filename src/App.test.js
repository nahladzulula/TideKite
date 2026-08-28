// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TideKite title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TideKite/i);
    expect(titleElement).toBeInTheDocument();
});
