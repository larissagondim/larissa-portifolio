import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

interface EducationItem {
    id: string
    institution: string
    degree: string
    period: string
    shortDescription: string
    achievements: string[]
}

interface EducationSectionProps {
    educations: EducationItem[]
    title: string
}

export function EducationSection({ educations, title }: EducationSectionProps) {
    return (
        <section className="flex flex-col gap-6 w-full">

            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 lowercase">
                {title}
            </h2>

            <div className="relative pl-6 border-l border-zinc-800 space-y-6 flex flex-col">
                {educations.map((edu: EducationItem) => (
                    <div key={edu.id} className="relative w-full group">

                        <div className="absolute -left-[31px] top-6 w-2.5 h-2.5 rounded-full bg-zinc-700 border border-black group-hover:bg-zinc-400 transition-colors" />

                        <Card className="border-zinc-800 bg-transparent/50 backdrop-blur-sm text-zinc-900 dark:text-zinc-100 transition-all duration-300 hover:-translate-y-2 hover:bg-[#F5F5F5]/90 hover:shadow-xl hover:shadow-black/5 hover:border-zinc-700">
                            <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 pb-2">
                                <div>

                                    <CardTitle className="text-lg font-bold lowercase tracking-tight">
                                        {edu.institution}
                                    </CardTitle>

                                    <CardDescription className="text-zinc-800 dark:text-zinc-300 lowercase text-sm">
                                        {edu.degree}
                                    </CardDescription>
                                </div>

                                <span className="text-xs text-zinc-700 dark:text-zinc-400 font-mono sm:text-right shrink-0 lowercase">
                                    {edu.period}
                                </span>
                            </CardHeader>

                            <CardContent className="space-y-3">

                                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    {edu.shortDescription}
                                </p>

                                <ul className="list-disc pl-4 space-y-1.5 text-sm text-zinc-500 dark:text-zinc-400 decoration-zinc-700">
                                    {edu.achievements.map((achievement: string, idx: number) => (
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
