import GithubActivity from "@/components/github-activity";
import GradientBackground from '@/components/GradientBackground';
import Hero from "@/components/Hero";
// import LocaleSwitcher from "@/components/LocaleSwitcher"; // Importa o novo botão

export default function Home() {
  return (
    <main className="min-h-screen dark:bg-black relative overflow-x-hidden isolate">

      <div className="absolute inset-0 -z-10 pointer-events-none mix-blend-mode-normal">
        <GradientBackground />
      </div>

      {/* Botão de tradução posicionado no canto superior direito */}
      {/* <div className="absolute top-6 right-6 z-20">
        <LocaleSwitcher />
      </div> */}

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 flex flex-col gap-12">
        <Hero />
        <GithubActivity />
      </div>
    </main>
  );
}