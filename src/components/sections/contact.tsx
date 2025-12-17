"use client"

import type React from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { Section } from "@/components/ui/section"
import { personalInfo } from "@/lib/data"
import { useAnimation } from "@/lib/hooks/use-animation"
import { cn } from "@/lib/utils"

export function ContactSection() {
  const { elementRef: headerRef, isVisible: headerVisible } = useAnimation({ delay: 0 })
  const { elementRef: contentRef, isVisible: contentVisible } = useAnimation({ delay: 200 })

  const contactItems = [
    { icon: Mail, label: "Email", value: personalInfo.email },
    { icon: Phone, label: "Phone", value: personalInfo.phone },
    { icon: MapPin, label: "Location", value: personalInfo.location },
  ]

  return (
    <Section id="contact" className="bg-card/50">
      <div className="space-y-12">
        {/* Section Header */}
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={cn(
            "text-center space-y-4 transition-all duration-1000",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Ready to start your next project? Let&rsquo;s discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div 
          ref={contentRef as React.RefObject<HTMLDivElement>}
          className={cn(
            "space-y-8 max-w-2xl mx-auto transition-all duration-1000",
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Let&rsquo;s Connect</h3>
            <p className="text-muted-foreground leading-relaxed text-pretty mb-8">
              I&rsquo;m always interested in hearing about new opportunities and exciting projects. Whether you have a
              question or just want to say hi, feel free to reach out!
            </p>
          </div>

          <div className="space-y-6">
            {contactItems.map((item, index) => {
              const { elementRef, isVisible } = useAnimation({ delay: 400 + index * 100 })
              const Icon = item.icon
              return (
                <div
                  key={index}
                  ref={elementRef as React.RefObject<HTMLDivElement>}
                  className={cn(
                    "flex items-center space-x-4 p-4 rounded-lg hover-lift transition-all duration-500",
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  )}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{item.label}</p>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}
