import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { experience } from "@/lib/data"

export function ExperienceSection() {
  return (
    <Section id="experience" className="bg-card/50">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">Work Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            My professional journey and the roles that have shaped my expertise in software development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5"></div>

          {/* Experience Items */}
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-2 z-10 border-4 border-background"></div>

                {/* Content Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
                >
                  <Card className="relative">
                    {/* Timeline Arrow */}
                    <div
                      className={`absolute top-6 w-0 h-0 border-t-8 border-b-8 border-t-transparent border-b-transparent ${index % 2 === 0
                          ? "md:-right-2 md:border-l-8 md:border-l-card -left-2 border-r-8 border-r-card"
                          : "md:-left-2 md:border-r-8 md:border-r-card -left-2 border-r-8 border-r-card"
                        }`}
                    ></div>

                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <CardTitle className="text-lg">{exp.title}</CardTitle>
                        <Badge variant="secondary" className="w-fit">
                          {exp.period}
                        </Badge>
                      </div>
                      <CardDescription className="text-base font-medium text-primary">{exp.company}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {/* <p className="text-muted-foreground leading-relaxed text-pretty"></p> */}
                      <ul className="space-y-2 text-muted-foreground">
                        {
                          exp.description.map((expDesItem, expDesIndex) => {
                            return (<li key={`exp_des_item_${expDesIndex}`} className="flex items-start space-x-2">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                              <span>{expDesItem}</span>
                            </li>)
                          })
                        }

                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Highlights */}
        <div className="text-center space-y-6">
          <Separator className="max-w-xs mx-auto" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2</div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
