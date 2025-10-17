import { Code, Database, Smartphone, Cloud, PenTool, GitMerge, Settings, GraduationCap, TestTube2, Workflow, Tags, DatabaseZap, Wind, Briefcase, Building2 } from 'lucide-react';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/i18n-config';
import { PageTransition } from '@/components/PageTransition';
import { Timeline } from '@/components/Timeline';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import Image from 'next/image';

// Helper function to get the correct image path
const getImagePath = (imageUrl: string): string => {
  // Check if we're building for export (GitHub Pages)
  const isExport = process.env.EXPORT === 'true';
  
  if (isExport) {
    return `/devportfolio${imageUrl}`;
  }
  
  // For development, return the original path
  return imageUrl;
};

const skills = [
  { name: 'JavaScript', icon: <Code className="h-8 w-8 text-primary" /> },
  { name: 'React/Redux', icon: <Code className="h-8 w-8 text-primary" /> },
  { name: 'Front-End Design', icon: <PenTool className="h-8 w-8 text-primary" /> },
  { name: 'Front-end Engineering', icon: <Settings className="h-8 w-8 text-primary" /> },
  { name: 'Jest & RTL', icon: <TestTube2 className="h-8 w-8 text-primary" /> },
  { name: 'ReduxSaga', icon: <Workflow className="h-8 w-8 text-primary" /> },
  { name: 'Figma', icon: <PenTool className="h-8 w-8 text-primary" /> },
  { name: 'Google Tag Manager', icon: <Tags className="h-8 w-8 text-primary" /> },
  { name: 'PHP/WordPress', icon: <Code className="h-8 w-8 text-primary" /> },
  { name: 'Java & MySQL', icon: <DatabaseZap className="h-8 w-8 text-primary" /> },
  { name: 'SCRUM', icon: <Wind className="h-8 w-8 text-primary" /> },
];

export default async function AboutPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const { about } = dictionary;

  return (
    <PageTransition>
      <div className="container mx-auto max-w-5xl py-12 px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-primary">
            {about.title}
          </h1>
        </header>

        <section className="mt-12">
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50">
            <div className="md:flex">
              <div className="md:w-1/3 flex items-center justify-center relative p-8">
                <div className="relative w-full max-w-xs">
                  {/* Efecto de marco hexagonal */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-full blur-xl scale-110"></div>
                  <div className="relative bg-white p-1 rounded-full shadow-2xl">
                    <div className="relative overflow-hidden rounded-full">
                      <img
                        src={getImagePath("/profile.jpg")}
                        alt="Developer Portrait"
                        className="w-full h-auto object-cover aspect-square rounded-full hover:scale-110 transition-transform duration-700"
                        data-ai-hint="developer portrait"
                      />
                      {/* Overlay sutil */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-full"></div>
                    </div>
                  </div>
                  {/* Elementos decorativos */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-accent rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-1/2 -left-4 w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                </div>
              </div>
              <div className="md:w-2/3 p-8 flex flex-col justify-center">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {about.bio}
                </p>
              </div>
            </div>
          </Card>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center text-foreground text-primary">{about.skillsTitle}</h2>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill) => (
              <Card key={skill.name} className="group flex flex-col items-center justify-center p-6 text-center hover:scale-105 hover:shadow-lg transition-all duration-300 border border-border/50 bg-card hover:bg-primary/5">
                <div className="mb-3">
                  {skill.icon}
                </div>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{skill.name}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center text-foreground text-primary">{about.experienceTitle}</h2>
          <div className="mt-8 max-w-3xl mx-auto">
            <Timeline items={about.experience} icon={<Briefcase className="h-3 w-3 text-primary-foreground" />} />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center text-foreground text-primary">{about.educationTitle}</h2>
          <div className="mt-8 max-w-3xl mx-auto">
            <Timeline items={about.education} icon={<GraduationCap className="h-3 w-3 text-primary-foreground" />} />
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
