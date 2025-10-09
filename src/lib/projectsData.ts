import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export type Project = {
  id: string;
  titleKey: 'project-1' | 'project-2' | 'project-3' | 'project-4';
  descriptionKey: 'project-1' | 'project-2' | 'project-3' | 'project-4';
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
    titleKey: 'project-1',
    descriptionKey: 'project-1',
    image: getImage('project-1'),
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    link: '#',
  },
  {
    id: '2',
    titleKey: 'project-2',
    descriptionKey: 'project-2',
    image: getImage('project-2'),
    techStack: ['React Native', 'Firebase', 'TypeScript'],
    link: '#',
  },
  {
    id: '3',
    titleKey: 'project-3',
    descriptionKey: 'project-3',
    image: getImage('project-3'),
    techStack: ['D3.js', 'React', 'Node.js'],
    link: '#',
  },
  {
    id: '4',
    titleKey: 'project-4',
    descriptionKey: 'project-4',
    image: getImage('project-4'),
    techStack: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
    link: '#',
  },
];
