import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { certifications } from "@/lib/data"

export function CertificationsSection() {
  return (
    <Section id="certifications">
      <div className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-balance">Certifications</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
          Verified credentials and continuing education.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, idx) => (
          <Card key={idx} className="h-full">
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
                  className="text-sm underline underline-offset-4 hover:text-primary"
                >
                  View credential
                </Link>
              ) : null}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
