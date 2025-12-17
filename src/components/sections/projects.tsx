"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { personalInfo, projects } from "@/lib/data"
import { useAnimation } from "@/lib/hooks/use-animation"
import { cn } from "@/lib/utils"

export function ProjectsSection() {
  const { elementRef: headerRef, isVisible: headerVisible } = useAnimation({ delay: 0 })
  const { elementRef: buttonRef, isVisible: buttonVisible } = useAnimation({ delay: 600 })

  return (
    <Section id="projects" className="bg-background">
      <div className="space-y-12">
        {/* Section Header */}
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={cn(
            "text-center space-y-4 transition-all duration-1000",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            A showcase of my recent work, demonstrating expertise in full-stack development and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const { elementRef, isVisible } = useAnimation({ delay: index * 150 })
            return (
              <Card 
                key={index}
                ref={elementRef as React.RefObject<HTMLDivElement>}
                className={cn(
                  "group overflow-hidden hover-lift transition-all duration-500",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} - Project Screenshot`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                </div>

                <CardHeader>
                  <div className="space-y-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed text-pretty">
                      {project.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="text-xs transition-all duration-300 hover:scale-110"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button 
                      asChild 
                      variant="default" 
                      size="sm" 
                      className="flex-1 group/btn transition-all duration-300 hover:scale-105"
                    >
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <ExternalLink className="h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button 
                      asChild 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 bg-transparent group/btn transition-all duration-300 hover:scale-105"
                    >
                      <Link href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <Github className="h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                        Source Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* View More Projects */}
        <div 
          ref={buttonRef as React.RefObject<HTMLDivElement>}
          className={cn(
            "text-center transition-all duration-1000",
            buttonVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <Button asChild variant="outline" size="lg" className="hover-lift group">
            <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              View All Projects on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  )
}
