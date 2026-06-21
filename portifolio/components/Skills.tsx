import { Badge } from "@/components/ui/badge"

interface SkillCategory {
    name: string
    items: string[]
}

interface SkillsSectionProps {
    title: string
    categories: SkillCategory[]
}

export function SkillsSection({ title, categories }: SkillsSectionProps) {
    return (
        <section className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-white lowercase">
                {title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categories.map((category: SkillCategory, idx: number) => (
                    <div
                        key={idx}
                        className="p-5 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-transparent/40 dark:bg-black/40 backdrop-blur-md flex flex-col gap-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5"
                    >
                        <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-400 font-mono lowercase">
                            {category.name}
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {category.items.map((item: string) => {
                                const isAllUpperCase = item === item.toUpperCase();
                                return (
                                    <Badge
                                        key={item}
                                        variant="secondary"
                                        className={`text-xs font-medium border border-zinc-300/50 dark:border-zinc-700/50 ${!isAllUpperCase ? 'lowercase' : ''}`}
                                    >
                                        {item}
                                    </Badge>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}