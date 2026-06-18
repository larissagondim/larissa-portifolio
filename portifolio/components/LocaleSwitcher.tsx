"use client";

import { useLocale } from "next-intl";
// Importamos a navegação inteligente criada no passo 1
import { useRouter, usePathname } from "@/i18n/routing";

export default function LocaleSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const toggleLanguage = () => {
        const nextLocale = locale === "pt" ? "en" : "pt";

        // O next-intl cuida de manter a rota idêntica trocando apenas o prefixo [locale]
        router.replace(pathname, { locale: nextLocale });
    };

    return (
        <button
            onClick={toggleLanguage}
            className="px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-black/40 backdrop-blur-md text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
        >
            {locale === "pt" ? "en" : " pt"}
        </button>
    );
}