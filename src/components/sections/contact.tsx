import type React from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { Section } from "@/components/ui/section"
import { personalInfo } from "@/lib/data"

export function ContactSection() {

  return (
    <Section id="contact" className="bg-card/50">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Ready to start your next project? Let&rsquo;s discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="space-y-8 max-w-2xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Let&rsquo;s Connect</h3>
            <p className="text-muted-foreground leading-relaxed text-pretty mb-8">
              I&rsquo;m always interested in hearing about new opportunities and exciting projects. Whether you have a
              question or just want to say hi, feel free to reach out!
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Email</p>
                <p className="text-muted-foreground">{personalInfo.email}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Phone</p>
                <p className="text-muted-foreground">{personalInfo.phone}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Location</p>
                <p className="text-muted-foreground">{personalInfo.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
