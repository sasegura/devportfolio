import { render, screen } from '@testing-library/react';
import ContactPage from '@/app/[lang]/contact/page';

jest.mock('@/lib/dictionary', () => ({
  getDictionary: jest.fn().mockResolvedValue({
    contact: {
      title: 'Get In Touch',
      intro: 'Contact me.',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send Message',
      },
      validation: {},
    },
  }),
}));

// Mock the useToast hook
jest.mock('@/hooks/use-toast', () => ({
  useToast: () => ({
    toast: jest.fn(),
  }),
}));

describe('Contact Page', () => {
  it('renders the contact form', async () => {
    const ResolvedPage = await ContactPage({ params: { lang: 'en' } });
    render(ResolvedPage);

    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument();
  });
});
