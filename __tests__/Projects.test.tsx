import { render, screen } from '@testing-library/react';
import ProjectsPage from '@/app/[lang]/projects/page';
import { projectsData } from '@/lib/projectsData';

jest.mock('@/lib/dictionary', () => ({
  getDictionary: jest.fn().mockResolvedValue({
    projects: {
      title: 'My Projects',
      intro: 'Here are my projects.',
      liveLink: "View Live",
      techStack: "Tech Stack:",
      'project-1': { title: 'Project Alpha', description: 'Desc 1' },
      'project-2': { title: 'Project Beta', description: 'Desc 2' },
      'project-3': { title: 'Project Gamma', description: 'Desc 3' },
      'project-4': { title: 'Project Delta', description: 'Desc 4' },
    },
  }),
}));

jest.mock('@/lib/projectsData', () => ({
  projectsData: [
    {
      id: '1',
      titleKey: 'project-1',
      descriptionKey: 'project-1',
      image: { imageUrl: '/test.jpg', description: 'test', imageHint: 'test' },
      techStack: ['React'],
      link: '#',
    },
  ],
}));

describe('Projects Page', () => {
  it('renders the page title', async () => {
    const ResolvedPage = await ProjectsPage({ params: { lang: 'en' } });
    render(ResolvedPage);
    expect(screen.getByText('My Projects')).toBeInTheDocument();
  });

  it('renders project cards', async () => {
    const ResolvedPage = await ProjectsPage({ params: { lang: 'en' } });
    render(ResolvedPage);
    expect(screen.getByText('Project Alpha')).toBeInTheDocument();
  });
});
