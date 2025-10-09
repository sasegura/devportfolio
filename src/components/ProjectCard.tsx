'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import type { Project } from '@/lib/projectsData';

interface ProjectCardProps {
  project: Project;
  liveLinkText: string;
  techStackText: string;
}

export function ProjectCard({ project, liveLinkText, techStackText }: ProjectCardProps) {
  const isLongDescription = project.descriptionKey.length > 150; // Approximate length for 4 lines

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card className="h-full overflow-hidden flex flex-col">
        <div className="relative h-56 w-full">
          <Image
            src={project.image.imageUrl}
            alt={project.image.description}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint={project.image.imageHint}
          />
        </div>
        <CardHeader>
          <CardTitle>{project.titleKey}</CardTitle>
            <TooltipProvider>
              <Tooltip delayDuration={300}>
                <TooltipTrigger asChild>
                  <CardDescription className="line-clamp-4 cursor-default">
                    {project.descriptionKey}
                  </CardDescription>
                </TooltipTrigger>
                {isLongDescription && (
                  <TooltipContent className="max-w-xs sm:max-w-sm md:max-w-md">
                    <p>{project.descriptionKey}</p>
                  </TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
        </CardHeader>
        <CardContent className="flex-grow">
          <h4 className="font-semibold mb-2">{techStackText}</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              {liveLinkText}
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
