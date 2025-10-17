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
      <Card className="h-full overflow-hidden flex flex-col group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50">
        <div className="relative h-56 w-full overflow-hidden">
          <img
            src={project.image.imageUrl}
            alt={project.image.description}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            data-ai-hint={project.image.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <CardHeader className="pb-4">
          <CardTitle className="group-hover:text-primary transition-colors duration-300">{(project as any).title || project.titleKey}</CardTitle>
          <CardDescription className="line-clamp-4 text-muted-foreground">
            {(project as any).description || project.descriptionKey}
          </CardDescription>
           {isLongDescription && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="link" className="text-primary p-0 h-auto justify-start hover:text-accent transition-colors">{viewMoreText}</Button>
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
        <CardContent className="flex-grow pb-4">
          <h4 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">{techStackText}</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="pt-0">
          <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg transition-all duration-300">
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              {liveLinkText}
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
