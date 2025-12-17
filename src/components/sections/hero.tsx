"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { personalInfo } from "@/lib/data"
import { useAnimation } from "@/lib/hooks/use-animation"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const { elementRef: textRef, isVisible: textVisible } = useAnimation({ delay: 100 })
  const { elementRef: imageRef, isVisible: imageVisible } = useAnimation({ delay: 300 })

  return (
    <Section id="hero" className="min-h-screen flex items-center justify-center bg-accent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div 
            ref={textRef as React.RefObject<HTMLDivElement>}
            className={cn(
              "space-y-6 transition-all duration-1000",
              textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
              Hello, I&apos;m{" "}
              <span className="relative inline-block">
                <span className="relative z-10">{personalInfo.name}</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 -z-0"></span>
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg text-pretty leading-relaxed">
              Full Stack Developer with 2.6 years of experience in the MERN stack. I&rsquo;m adept at creating robust and scalable applications while collaborating effectively in Agile teams. I am a passionate and dedicated developer focused on impactful contributions and continuous learning.
            </p>

            <div className="pt-2">
              <Button 
                size="lg" 
                className="px-8 hover-lift transition-smooth group"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth", block: "start" })
                }}
              >
                <span className="flex items-center gap-2">
                  Contact Me
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div 
            ref={imageRef as React.RefObject<HTMLDivElement>}
            className={cn(
              "flex justify-center lg:justify-end transition-all duration-1000",
              imageVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-10 scale-95"
            )}
          >
            <div className="relative w-80 h-80 group">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 animate-float"></div>
              <div className="relative w-full h-full">
                <Image
                  src={personalInfo.image}
                  alt={`${personalInfo.name} - Profile Photo`}
                  fill
                  className="rounded-full object-cover shadow-2xl ring-2 ring-border group-hover:ring-primary/50 transition-all duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
