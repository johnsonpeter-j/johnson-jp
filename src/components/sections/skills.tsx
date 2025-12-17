"use client"

import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor, Code, Palette, Database, Cloud, GitBranch, Shield, Zap } from "lucide-react"
import { useAnimation } from "@/lib/hooks/use-animation"
import { cn } from "@/lib/utils"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "UI/UX Design",
      icon: <Palette className="h-8 w-8" />,
      skills: ["Figma", "Wireframing", "Prototyping"],
    },
    {
      title: "Frontend",
      icon: <Monitor className="h-8 w-8" />,
      skills: ["React.js", "Redux", "Redux-Saga", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Material UI", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: <Code className="h-8 w-8" />,
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "Bcrypt", "Nodemailer"],
    },
    {
      title: "Database",
      icon: <Database className="h-8 w-8" />,
      skills: ["MongoDB", "Mongoose", "PostgreSQL", "MySQL", "Firebase (basic)"],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-8 w-8" />,
      skills: ["AWS", "Docker", "Vercel", "Netlify", "CI/CD"],
    },
    {
      title: "Version Control",
      icon: <GitBranch className="h-8 w-8" />,
      skills: ["Git", "GitHub", "GitLab", "Branching Strategies"],
    },
    {
      title: "Testing & Concepts",
      icon: <Zap className="h-8 w-8" />,
      skills: ["Jest", "MVC Architecture", "Responsive Design", "Error Handling", "Form Validation", "Secure Authentication"],
    },
    {
      title: "Security Best Practices",
      icon: <Shield className="h-8 w-8" />,
      skills: ["Authentication", "Authorization", "OWASP Top 10", "Data Encryption"],
    },
  ]

  const { elementRef: headerRef, isVisible: headerVisible } = useAnimation({ delay: 0 })

  return (
    <Section id="skills" className="bg-background">
      <div className="space-y-12">
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={cn(
            "text-center transition-all duration-1000",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-4xl font-bold text-foreground">Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const { elementRef, isVisible } = useAnimation({ delay: index * 100 })
            return (
              <Card 
                key={index}
                ref={elementRef as React.RefObject<HTMLDivElement>}
                className={cn(
                  "bg-card border border-border hover-lift transition-all duration-500 group",
                  isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
                )}
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-3 text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap justify-center gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-xs transition-all duration-300 hover:scale-110 hover:bg-primary/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
