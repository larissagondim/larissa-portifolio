import GithubActivity from "@/components/github-activity";
import GradientBackground from '@/components/GradientBackground';
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { FadeUp } from "@/components/FadeUp";
import { SlideIn } from "@/components/SlideIn";
import { ProjectCard } from "@/components/Projects";

import ptMessages from "@/messages/pt.json";
import enMessages from "@/messages/en.json";

interface HomeProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;
  const currentLocale = locale === "en" ? "en" : "pt";
  const messages = currentLocale === "en" ? enMessages : ptMessages;

  const projects = messages.Projects || [];

  return (
    <main className="min-h-screen dark:bg-black relative overflow-x-hidden isolate">

      <div className="fixed inset-0 -z-10 pointer-events-none mix-blend-mode-normal">
        <GradientBackground />
      </div>

      <Navbar />

      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-24 pb-12 flex flex-col gap-12">
        <section className="scroll-m-20">
          <Hero />
        </section>
        <section className="scroll-m-28">
          <GithubActivity />
        </section>

        <SlideIn direction="left">
          <section id="sobre" className="flex flex-col gap-4 scroll-m-28">
            <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-white lowercase">
              {messages.About?.title}
            </h2>
            <p className="text-[#1F2430]/80 dark:text-white/80 leading-relaxed text-sm sm:text-base">
              {messages.About?.description}
            </p>
          </section>
        </SlideIn>

        <FadeUp>
          <section id="projetos" className="flex flex-col gap-6 scroll-m-28">
            <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-white lowercase">
              {currentLocale === "en" ? "featured projects" : "projetos de destaque"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} locale={currentLocale} />
              ))}
            </div>
          </section>
        </FadeUp>

        <FadeUp>
          <section id="contato" className="flex flex-col gap-4 pb-8 scroll-m-28">
            <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-white lowercase">
              {currentLocale === "en" ? "contact" : "contato"}
            </h2>
            <p className="text-[#1F2430]/70 dark:text-white/60 text-sm">
              {currentLocale === "en"
                ? "feel free to reach out via email or linkedin."
                : "fique à vontade para entrar em contato por e-mail ou linkedin."}
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="mailto:larissa.gondim@academico.ufpb.br"
                className="px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-black/40 backdrop-blur-md text-sm font-medium text-[#1F2430] dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors lowercase"
              >
                email
              </a>
              <a
                href="https://linkedin.com/in/larissagondim"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-black/40 backdrop-blur-md text-sm font-medium text-[#1F2430] dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors lowercase"
              >
                linkedin
              </a>
              <a
                href="https://github.com/larissagondim"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-black/40 backdrop-blur-md text-sm font-medium text-[#1F2430] dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors lowercase"
              >
                github
              </a>
            </div>
          </section>
        </FadeUp>

      </div>
    </main>
  );
}