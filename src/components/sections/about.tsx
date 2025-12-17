"use client"

import Image from "next/image"
import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { personalInfo, about } from "@/lib/data"
import { useAnimation } from "@/lib/hooks/use-animation"
import { cn } from "@/lib/utils"

export function AboutSection() {
  const { elementRef: headerRef, isVisible: headerVisible } = useAnimation({ delay: 0 })
  const { elementRef: imageRef, isVisible: imageVisible } = useAnimation({ delay: 200 })
  const { elementRef: contentRef, isVisible: contentVisible } = useAnimation({ delay: 400 })

  return (
    <Section id="about" className="bg-card/50">
      <div className="space-y-12">
        {/* Section Header */}
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={cn(
            "text-center space-y-4 transition-all duration-1000",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Get to know more about my journey, passion, and what drives me as a developer.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div 
            ref={imageRef as React.RefObject<HTMLDivElement>}
            className={cn(
              "order-2 lg:order-1 transition-all duration-1000",
              imageVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 -translate-x-10 scale-95"
            )}
          >
            <Card className="overflow-hidden hover-lift group">
              <CardContent className="p-0">
                <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
                  <Image
                    src={about.image || "/placeholder.svg"}
                    alt={`${personalInfo.name} - About Photo`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Text Content */}
          <div 
            ref={contentRef as React.RefObject<HTMLDivElement>}
            className={cn(
              "order-1 lg:order-2 space-y-6 transition-all duration-1000",
              contentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Crafting Digital Solutions</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">{about.description}</p>
            </div>

            {/* Additional Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-foreground">What I Bring</h4>
              <ul className="space-y-2 text-muted-foreground">
                {
                  about.what_i_bring.map((whatIBringItem, whatIBringIndex)=>{
                    return (
                      <li 
                        key={`what_i_bring_item_${whatIBringIndex}`} 
                        className="flex items-start space-x-2 transition-all duration-300 hover:translate-x-2"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>{whatIBringItem}</span>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
