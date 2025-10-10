import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export type Project = {
  id: string;
  titleKey: 'project-fintrack' | 'project-globalroamer' | 'project-taskzen' | 'project-chatterbox' | 'project-3' | 'project-4';
  descriptionKey: 'project-fintrack' | 'project-globalroamer' | 'project-taskzen' | 'project-chatterbox' | 'project-3' | 'project-4';
  image: ImagePlaceholder;
  techStack: string[];
  link: string;
};

const getImage = (id: string): ImagePlaceholder => {
    const img = PlaceHolderImages.find(p => p.id === id);
    if (!img) {
        // Fallback or error
        return {
            id: 'fallback',
            description: 'Fallback image',
            imageUrl: 'https://placehold.co/600x400',
            imageHint: 'placeholder'
        };
    }
    return img;
}

export const projectsData: Project[] = [
  {
    id: '1',
    titleKey: 'project-fintrack',
    descriptionKey: 'project-fintrack',
    image: getImage('project-fintrack'),
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts', 'React Hook Form', 'Zod', 'Genkit'],
    link: 'https://github.com/sasegura/FinTrack',
  },
  {
    id: '2',
    titleKey: 'project-globalroamer',
    descriptionKey: 'project-globalroamer',
    image: getImage('project-globalroamer'),
    techStack: ['Next.js', 'TypeScript', 'Genkit', 'Google Gemini', 'Tailwind CSS', 'ShadCN UI', 'Vitest'],
    link: 'https://github.com/sasegura/GlobalRoamer',
  },
  {
    id: '5',
    titleKey: 'project-taskzen',
    descriptionKey: 'project-taskzen',
    image: getImage('project-taskzen'),
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'ShadCN UI', 'Genkit', 'React Hook Form', 'Zod', 'Jest'],
    link: 'https://github.com/sasegura/TaskZen',
  },
  {
    id: '6',
    titleKey: 'project-chatterbox',
    descriptionKey: 'project-chatterbox',
    image: getImage('project-chatterbox'),
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'ShadCN UI', 'Genkit', 'Firebase'],
    link: 'https://github.com/sasegura/chatterbox',
  },  
];
