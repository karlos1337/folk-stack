import { render, screen } from '@testing-library/react';

import Index from './index';

describe('Index', () => {
  it('should be correctly rendered', () => {
    render(<Index />);

    const title = screen.getByText('Welcome to Remix');

    expect(title).toBeInTheDocument();
  });
});
