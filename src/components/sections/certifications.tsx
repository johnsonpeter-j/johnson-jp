"use client"

import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { certifications } from "@/lib/data"
import { useAnimation } from "@/lib/hooks/use-animation"
import { cn } from "@/lib/utils"

export function CertificationsSection() {
  const { elementRef: headerRef, isVisible: headerVisible } = useAnimation({ delay: 0 })

  return (
    <Section id="certifications">
      <div 
        ref={headerRef as React.RefObject<HTMLDivElement>}
        className={cn(
          "text-center space-y-4 transition-all duration-1000",
          headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-balance">Certifications</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
          Verified credentials and continuing education.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, idx) => {
          const { elementRef, isVisible } = useAnimation({ delay: idx * 100 })
          return (
            <Card 
              key={idx}
              ref={elementRef as React.RefObject<HTMLDivElement>}
              className={cn(
                "h-full hover-lift transition-smooth",
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
              )}
            >
              <CardHeader className="space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                  <Badge variant="secondary" className="whitespace-nowrap">
                    {cert.year}
                  </Badge>
                </div>
                <CardDescription className="text-base font-medium text-primary">{cert.issuer}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">{cert.summary}</p>
                {cert.credentialUrl ? (
                  <Link
                    href={cert.credentialUrl}
                    target="_blank"
                    className="text-sm underline underline-offset-4 hover:text-primary transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    View credential
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                ) : null}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
