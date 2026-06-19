import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

interface ExperienceItem {
    id: string
    role: string
    company: string
    period: string
    shortDescription: string
    achievements: string[]
}

interface ExperienceSectionProps {
    experiences: ExperienceItem[]
    title: string
}

export function ExperienceSection({ experiences, title }: ExperienceSectionProps) {
    return (
        <section className="flex flex-col gap-6 w-full">

            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 lowercase">
                {title}
            </h2>

            <div className="relative pl-6 border-l border-zinc-800 space-y-6 flex flex-col">
                {experiences.map((exp: ExperienceItem) => (
                    <div key={exp.id} className="relative w-full group">

                        <div className="absolute -left-[31px] top-6 w-2.5 h-2.5 rounded-full bg-zinc-700 border border-black group-hover:bg-zinc-400 transition-colors" />

                        <Card className="border-zinc-800 bg-transparent/50 backdrop-blur-sm text-zinc-900 transition-all duration-300 hover:-translate-y-2 hover:bg-[#F5F5F5]/90 hover:shadow-xl hover:shadow-black/5 hover:border-zinc-700">
                            <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 pb-2">
                                <div>

                                    <CardTitle className="text-lg font-bold lowercase tracking-tight">
                                        {exp.role}
                                    </CardTitle>

                                    <CardDescription className="text-zinc-800 lowercase text-sm">
                                        {exp.company}
                                    </CardDescription>
                                </div>

                                <span className="text-xs text-zinc-700 font-mono sm:text-right shrink-0 lowercase">
                                    {exp.period}
                                </span>
                            </CardHeader>

                            <CardContent className="space-y-3">

                                <p className="text-sm text-zinc-600 leading-relaxed">
                                    {exp.shortDescription}
                                </p>

                                <ul className="list-disc pl-4 space-y-1.5 text-sm text-zinc-500 decoration-zinc-700">
                                    {exp.achievements.map((achievement: string, idx: number) => (
                                        <li key={idx} className="leading-relaxed">
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    )
}