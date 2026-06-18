"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function LocaleSwitcher() {
    const locale = useLocale(); // Pega o idioma atual: 'pt' ou 'en'
    const router = useRouter();
    const pathname = usePathname(); // Pega o caminho atual, ex: '/pt/sobre' ou '/en'

    const toggleLanguage = () => {
        const nextLocale = locale === "pt" ? "en" : "pt";

        // 1. Remove o locale atual do início da URL para não duplicar (ex: de /pt/projetos vira /projetos)
        const cleanPathname = pathname.replace(`/${locale}`, "");

        // 2. Monta a nova URL com o novo idioma (ex: /en/projetos)
        // Se o caminho limpo for vazio, ele apenas vai para a raiz do novo idioma ('/en' ou '/pt')
        const newPath = `/${nextLocale}${cleanPathname || "/"}`;

        router.push(newPath);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-black/40 backdrop-blur-md text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
        >
            {locale === "pt" ? "🇺🇸 English" : "🇧🇷 Português"}
        </button>
    );
}