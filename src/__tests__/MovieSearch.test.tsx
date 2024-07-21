import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MovieSearch from '@/components/MovieSearch.tsx';
import { describe, it, expect } from 'vitest';

// Create a QueryClient instance
const queryClient = new QueryClient();

const renderWithClient = (ui: React.ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>
      {ui}
    </QueryClientProvider>,
  );
};

describe('MovieSearch Component', () => {
  it('renders search input', () => {
    renderWithClient(<MovieSearch />);
    const inputElement = screen.getByPlaceholderText(/search for movies/i);
    expect(inputElement).toBeInTheDocument();
  });
});
