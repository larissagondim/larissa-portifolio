'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, GraduationCap, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const item = {
    hidden: {
        opacity: 0,
        y: 16,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

export default function Hero() {
    const reduceMotion = useReducedMotion();

    const t = useTranslations('Hero');


    const tagKeys = ['cc', 'ai', 'dev', 'problems'];

    return (
        <section className="pt-4 pb-4 px-4">
            <motion.div
                variants={reduceMotion ? undefined : container}
                initial={reduceMotion ? undefined : "hidden"}
                animate={reduceMotion ? undefined : "show"}
                className="mx-auto max-w-4xl"
            >
                <div className="flex items-center gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="h-24 w-24 rounded-xl bg-gray-300 flex items-center justify-center text-gray-500 shrink-0"
                    >
                        Imagem
                    </motion.div>

                    <div className="flex flex-col">
                        <motion.h1
                            variants={reduceMotion ? undefined : item}
                            className="text-4xl font-bold text-[#1F2430]"
                        >
                            {t('title')}
                        </motion.h1>

                        <motion.p
                            variants={reduceMotion ? undefined : item}
                            className="mt-2 text-xl text-[#1F2430]/80"
                        >
                            {t('subtitle')}
                        </motion.p>
                    </div>
                </div>

                <motion.div
                    variants={reduceMotion ? undefined : item}
                    className="mt-8 flex flex-col gap-4"
                >
                    <motion.div
                        variants={reduceMotion ? undefined : item}
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-2"
                    >
                        <MapPin className="text-[#1F2430]" size={20} />
                        <span className="text-[#1F2430]">
                            {t('location')}
                        </span>
                    </motion.div>

                    <motion.div
                        variants={reduceMotion ? undefined : item}
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-2"
                    >
                        <GraduationCap className="text-[#1F2430]" size={20} />
                        <span className="text-[#1F2430]">
                            {t('university')}
                        </span>
                    </motion.div>
                </motion.div>


                <motion.div
                    variants={reduceMotion ? undefined : item}
                    className="mt-10 flex flex-wrap gap-3"
                >
                    {tagKeys.map((key) => (
                        <motion.span
                            key={key}
                            whileHover={{
                                scale: 1.05,
                                y: -2,
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="rounded-full bg-white/60 dark:bg-zinc-900/40 backdrop-blur-sm px-4 py-2 text-sm text-[#1F2430] shadow-sm"
                        >
                            {t(`tags.${key}`)}
                        </motion.span>
                    ))}
                </motion.div>

                <motion.div
                    variants={item}
                    className="mt-10 flex gap-4"
                >
                    {/* <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Button asChild>
                            <a href="#projetos">
                                {t('buttonProjects')}
                            </a>
                        </Button>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Button variant="outline" asChild>
                            <a href="#contato" className="gap-2">
                                {t('buttonContact')}
                                <ArrowRight size={16} />
                            </a>
                        </Button>
                    </motion.div> */}
                </motion.div>
            </motion.div>
        </section>
    );
}