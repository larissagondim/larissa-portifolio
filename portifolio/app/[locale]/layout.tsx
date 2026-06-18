import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
// 1. Mudamos o import do CSS para usar o alias '@/' apontando para a pasta app
import "@/app/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Larissa Gondim",
  description:
    "Portfólio de Larissa Gondim — estudante de Ciência da Computação e entusiasta de Inteligência Artificial.",
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

const locales = ["en", "pt"];

export default async function RootLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  const currentLocale = locales.includes(locale) ? locale : "pt";
  const messages = await getMessages();

  return (
    <html
      lang={currentLocale}
      className={`
        ${inter.variable}
        ${spaceGrotesk.variable}
        ${jetbrainsMono.variable}
        h-full
        antialiased
      `}
    >
      <body className="min-h-full bg-[#FAF8F3] text-[#1F2430]">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}