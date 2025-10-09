import { render, screen } from '@testing-library/react';
import Home from '@/app/[lang]/page';

// Mock the dictionary
jest.mock('@/lib/dictionary', () => ({
  getDictionary: jest.fn().mockResolvedValue({
    homepage: {
      greeting: 'Hello, I\'m',
      name: 'Your Name',
      role: 'Software Developer',
      intro: 'I build things.',
      cta: 'View My Work',
    },
  }),
}));

// Mock Next.js navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Home Page', () => {
  it('renders the greeting and name', async () => {
    const ResolvedPage = await Home({ params: { lang: 'en' } });
    render(ResolvedPage);

    expect(screen.getByText("Hello, I'm")).toBeInTheDocument();
    expect(screen.getByText('Your Name')).toBeInTheDocument();
  });
});
