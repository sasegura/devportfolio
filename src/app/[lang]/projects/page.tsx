import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/i18n-config';
import { projectsData } from '@/lib/projectsData';
import { ProjectCard } from '@/components/ProjectCard';
import { PageTransition } from '@/components/PageTransition';

export default async function ProjectsPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);
  const { projects: pageText } = dictionary;
  
  const translatedProjects = projectsData.map(p => ({
    ...p,
    titleKey: dictionary.projects[p.titleKey].title,
    descriptionKey: dictionary.projects[p.descriptionKey].description,
  }))

  return (
    <PageTransition>
      <div className="container mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {pageText.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {pageText.intro}
          </p>
        </header>

        <section className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {translatedProjects.map((project) => (
            <ProjectCard 
                key={project.id} 
                project={project} 
                liveLinkText={pageText.liveLink}
                techStackText={pageText.techStack}
                viewMoreText={pageText.viewMore}
            />
          ))}
        </section>
      </div>
    </PageTransition>
  );
}
