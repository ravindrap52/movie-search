import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { HighlightSearchTerm } from '../components/HighlightSearchTerm';

describe('HighlightSearchTerm', () => {
  it('highlights the term in the text', () => {
    render(<HighlightSearchTerm text="This is a test text" highlight="test" />);
    expect(screen.getByText('test')).toBeInTheDocument();
    expect(screen.getByText('test')).toBeInstanceOf(HTMLElement);
    expect(screen.getByText('test').tagName).toBe('MARK');
  });

  it('highlights all occurrences', () => {
    render(<HighlightSearchTerm text="This is a test text with test" highlight="test" />);
    const highlightedElements = screen.getAllByText('test');
    expect(highlightedElements).toHaveLength(2);
    highlightedElements.forEach((element) => {
      expect(element.tagName).toBe('MARK');
    });
  });
});
