import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { education } from "@/lib/data"

export function EducationSection() {
  return (
    <Section id="education" className="bg-card/50">
      <div className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-balance">Education</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
          Formal education and continuous learning that shaped my foundation.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {education.map((ed, idx) => (
          <Card key={idx}>
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
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
