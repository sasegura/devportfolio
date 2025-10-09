import { Code, Database, Smartphone, Cloud, PenTool, GitMerge, Settings, GraduationCap, TestTube2, Workflow, Tags, DatabaseZap, Wind } from 'lucide-react';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/i18n-config';
import { PageTransition } from '@/components/PageTransition';
import { Timeline } from '@/components/Timeline';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const skills = [
  { name: 'JavaScript', icon: <Code className="h-8 w-8 text-accent" /> },
  { name: 'React/Redux', icon: <Code className="h-8 w-8 text-accent" /> },
  { name: 'Front-End Design', icon: <PenTool className="h-8 w-8 text-accent" /> },
  { name: 'Front-end Engineering', icon: <Settings className="h-8 w-8 text-accent" /> },
  { name: 'Jest & RTL', icon: <TestTube2 className="h-8 w-8 text-accent" /> },
  { name: 'ReduxSaga', icon: <Workflow className="h-8 w-8 text-accent" /> },
  { name: 'Figma', icon: <PenTool className="h-8 w-8 text-accent" /> },
  { name: 'Google Tag Manager', icon: <Tags className="h-8 w-8 text-accent" /> },
  { name: 'PHP/WordPress', icon: <Code className="h-8 w-8 text-accent" /> },
  { name: 'Java & MySQL', icon: <DatabaseZap className="h-8 w-8 text-accent" /> },
  { name: 'SCRUM', icon: <Wind className="h-8 w-8 text-accent" /> },
];

export default async function AboutPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);
  const { about } = dictionary;

  return (
    <PageTransition>
      <div className="container mx-auto max-w-5xl py-12 px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {about.title}
          </h1>
        </header>

        <section className="mt-12">
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 flex items-center justify-center bg-muted/30">
                <Image
                  src="/profile.jpg"
                  alt="Developer Portrait"
                  width={800}
                  height={800}
                  className="h-auto w-full object-contain"
                  data-ai-hint="developer portrait"
                  priority
                />
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
          <h2 className="text-3xl font-bold text-center text-foreground">{about.skillsTitle}</h2>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill) => (
              <Card key={skill.name} className="flex flex-col items-center justify-center p-4 text-center transition-transform hover:scale-105 hover:shadow-lg">
                {skill.icon}
                <p className="mt-2 font-semibold text-foreground">{skill.name}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center text-foreground">{about.experienceTitle}</h2>
          <div className="mt-8 max-w-3xl mx-auto">
            <Timeline items={about.experience} />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center text-foreground">{about.educationTitle}</h2>
          <div className="mt-8 max-w-3xl mx-auto">
            <Timeline items={about.education} icon={<GraduationCap className="h-3 w-3 text-primary-foreground" />} />
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
