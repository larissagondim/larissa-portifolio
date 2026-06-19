import GithubActivity from "@/components/github-activity";
import GradientBackground from '@/components/GradientBackground';
import Hero from "@/components/Hero";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { ProjectCard } from "@/components/Projects";

// 1. Importações estáticas dos dois arquivos localizados em messages/
import ptMessages from "@/messages/pt.json";
import enMessages from "@/messages/en.json";

interface HomeProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function Home({ params }: HomeProps) {
  // O Next.js 15+ envia 'params' como uma Promise. Precisamos fazer o await!
  const { locale } = await params;
  const currentLocale = locale === "en" ? "en" : "pt";
  const messages = currentLocale === "en" ? enMessages : ptMessages;

  const projects = messages.Projects || [];

  return (
    <main className="min-h-screen dark:bg-black relative overflow-x-hidden isolate">

      <div className="fixed inset-0 -z-10 pointer-events-none mix-blend-mode-normal">
        <GradientBackground />
      </div>

      <div className="absolute top-6 right-6 z-20">
        <LocaleSwitcher />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 flex flex-col gap-12">

        <Hero />

        <GithubActivity />

        <section className="flex flex-col gap-6" id="projetos">
          <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-white lowercase">
            {currentLocale === "en" ? "featured projects" : "projetos de destaque"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} locale={currentLocale} />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}