"use client"

import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { education } from "@/lib/data"
import { useAnimation } from "@/lib/hooks/use-animation"
import { cn } from "@/lib/utils"

export function EducationSection() {
  const { elementRef: headerRef, isVisible: headerVisible } = useAnimation({ delay: 0 })

  return (
    <Section id="education" className="bg-card/50">
      <div 
        ref={headerRef as React.RefObject<HTMLDivElement>}
        className={cn(
          "text-center space-y-4 transition-all duration-1000",
          headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-balance">Education</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
          Formal education and continuous learning that shaped my foundation.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {education.map((ed, idx) => {
          const { elementRef, isVisible } = useAnimation({ delay: idx * 150 })
          return (
            <Card 
              key={idx}
              ref={elementRef as React.RefObject<HTMLDivElement>}
              className={cn(
                "hover-lift transition-smooth",
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
              )}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <CardTitle className="text-lg">{ed.degree}</CardTitle>
                    <CardDescription className="text-base font-medium text-primary">{ed.institution}</CardDescription>
                  </div>
                  <Badge variant="secondary" className="whitespace-nowrap">
                    {ed.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  {ed.details?.map((d, i) => (
                    <li key={i} className="transition-all duration-300 hover:translate-x-2">{d}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
