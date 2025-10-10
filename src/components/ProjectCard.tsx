'use client';

// import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Project } from '@/lib/projectsData';

interface ProjectCardProps {
  project: Project;
  liveLinkText: string;
  techStackText: string;
  viewMoreText: string;
}

export function ProjectCard({ project, liveLinkText, techStackText, viewMoreText }: ProjectCardProps) {
  const isLongDescription = (project as any).description?.length > 150 || project.descriptionKey?.length > 150; // Approximate length for 4 lines

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card className="h-full overflow-hidden flex flex-col">
        <div className="relative h-56 w-full">
          <img
            src={project.image.imageUrl}
            alt={project.image.description}
            className="w-full h-full object-cover"
            data-ai-hint={project.image.imageHint}
          />
        </div>
        <CardHeader>
          <CardTitle>{(project as any).title || project.titleKey}</CardTitle>
          <CardDescription className="line-clamp-4">
            {(project as any).description || project.descriptionKey}
          </CardDescription>
           {isLongDescription && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="link" className="text-accent p-0 h-auto justify-start">{viewMoreText}</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>{(project as any).title || project.titleKey}</DialogTitle>
                    <DialogDescription>
                      {(project as any).description || project.descriptionKey}
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            )}
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
