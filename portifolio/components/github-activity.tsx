'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const GitHubCalendar = dynamic(
    () =>
        import('react-github-calendar').then((mod) => ({
            default: mod.GitHubCalendar,
        })),
    {
        ssr: false,
    }
);

type GithubActivityProps = {
    username?: string;
};

const theme = {
    light: ['#FAF8F3', '#cbf5c2ff', '#97ec82ff', '#4bc935ff', '#42c335ff'],
    dark: ['#FAF8F3', '#cbf5c2ff', '#97ec82ff', '#4bc935ff', '#42c335ff'],
};

export default function GithubActivity({
    username = 'larissagondim',
}: GithubActivityProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="px-6 py-16 sm:px-10 lg:px-16"
        >
            <div className="mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 150 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        type: "spring",
                        stiffness: 80,
                        damping: 20,
                    }}
                    className="overflow-x-auto rounded-2xl border border-[#E7E4DD] bg-white p-6 shadow-sm"
                >
                    <GitHubCalendar
                        username={username}
                        colorScheme="light"
                        theme={theme}
                        blockSize={11}
                        blockMargin={3}
                        fontSize={12}
                    />
                </motion.div>
            </div>
        </motion.section>
    );
}