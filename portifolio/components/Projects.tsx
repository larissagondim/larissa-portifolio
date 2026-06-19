import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FolderGit, ExternalLink } from "lucide-react"

interface Project {
    id: string
    title: string
    status: string
    shortDescription: string
    technologies: string[]
    contributionsAndAchievements: string[]
    repository: string
}


interface ProjectCardProps {
    project: Project
    locale: string
}

export function ProjectCard({ project, locale }: ProjectCardProps) {
    return (
        <Card className="w-full max-w-md border-zinc-800 bg-white-400 text-zinc-50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-white/5">
            <CardHeader>
                <div className="flex items-center justify-between gap-2 mb-2">
                    <CardTitle className="text-xl font-bold lowercase text-zinc-900">{project.title}</CardTitle>
                    <Badge className="bg-[#F5F5F5] text-zinc-900" variant={project.status === "completed" ? "default" : "outline"}>
                        {project.status}
                    </Badge>
                </div>
                <CardDescription className="text-zinc-600">{project.shortDescription}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech: string) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                            {tech.toLowerCase()}
                        </Badge>
                    ))}
                </div>

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="achievements" className="border-zinc-800">
                        <AccordionTrigger className="text-sm text-zinc-900 hover:text-zinc-300">
                            {locale === "en" ? "key contributions" : "principais contribuições"}
                        </AccordionTrigger>
                        <AccordionContent>
                            <ul className="list-disc pl-4 space-y-1 text-sm text-zinc-600">
                                {project.contributionsAndAchievements.map((item: string, index: number) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>

            <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" className="w-full border-zinc-300 hover:bg-zinc-300" asChild>
                    <a href={project.repository} target="_blank" rel="noreferrer">
                        <FolderGit className="mr-2 h-4 w-4" /> {locale === "en" ? "view code" : "ver código"}
                    </a>
                </Button>
            </CardFooter>
        </Card>
    )
}