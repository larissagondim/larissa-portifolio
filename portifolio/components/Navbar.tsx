"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { key: "about", href: "#sobre" },
  { key: "projects", href: "#projetos" },
  { key: "experience", href: "#experiencia" },
  { key: "education", href: "#educacao" },
  { key: "contact", href: "#contato" },
] as const;

export default function Navbar() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  const toggleLanguage = () => {
    const nextLocale = locale === "pt" ? "en" : "pt";
    router.replace(pathname, { locale: nextLocale });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${scrolled
          ? "py-3 bg-[#FAF8F3]/80 dark:bg-black/80 backdrop-blur-md shadow-sm border-b border-zinc-200/60 dark:border-zinc-800/60"
          : "py-5 bg-transparent"
        }
      `}
    >
      <nav className="max-w-4xl mx-auto px-4 flex items-center justify-between">
        {/* Logo / name */}
        <motion.a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="text-sm font-semibold tracking-tight text-[#1F2430] dark:text-white lowercase"
        >
          larissa gondim
        </motion.a>

        {/* Links */}
        <ul className="hidden sm:flex items-center gap-1">
          {navLinks.map(({ key, href }) => (
            <li key={key}>
              <motion.a
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-3 py-1.5 text-sm text-[#1F2430]/70 dark:text-white/60 hover:text-[#1F2430] dark:hover:text-white transition-colors lowercase group"
              >
                {t(key)}
                <span className="absolute bottom-0 left-3 right-3 h-px bg-[#1F2430] dark:bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </motion.a>
            </li>
          ))}
        </ul>

        {/* Locale switcher */}
        <motion.button
          onClick={toggleLanguage}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-black/40 backdrop-blur-md text-sm font-medium text-[#1F2430] dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer lowercase"
        >
          {locale === "pt" ? "en" : "pt"}
        </motion.button>
      </nav>
    </motion.header>
  );
}
