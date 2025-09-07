import Image from "next/image"
import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { personalInfo, about } from "@/lib/data"

export function AboutSection() {
  return (
    <Section id="about" className="bg-card/50">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Get to know more about my journey, passion, and what drives me as a developer.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
                  <Image
                    src={about.image || "/placeholder.svg"}
                    alt={`${personalInfo.name} - About Photo`}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Crafting Digital Solutions</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">{about.description}</p>
            </div>

            {/* Additional Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-foreground">What I Bring</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>5+ years of experience in full-stack development</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Strong focus on user experience and performance optimization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Expertise in modern web technologies and best practices</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Collaborative approach to problem-solving and team leadership</span>
                </li>
              </ul>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
