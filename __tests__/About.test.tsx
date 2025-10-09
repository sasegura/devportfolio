import { render, screen } from '@testing-library/react';
import AboutPage from '@/app/[lang]/about/page';

jest.mock('@/lib/dictionary', () => ({
  getDictionary: jest.fn().mockResolvedValue({
    about: {
      title: 'About Me',
      bio: 'This is my bio.',
      skillsTitle: 'My Skills',
      experienceTitle: 'Work Experience',
      experience: [],
    },
  }),
}));

jest.mock('next/image', () => ({
    __esModule: true,
    default: (props: any) => {
      // eslint-disable-next-line @next/next/no-img-element
      return <img {...props} />;
    },
}));

describe('About Page', () => {
  it('renders the main title', async () => {
    const ResolvedPage = await AboutPage({ params: { lang: 'en' } });
    render(ResolvedPage);

    expect(screen.getByText('About Me')).toBeInTheDocument();
  });
});
