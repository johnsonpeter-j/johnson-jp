import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { personalInfo } from "@/lib/data"

export function HeroSection() {
  return (
    <Section id="hero" className="min-h-screen flex items-center justify-center bg-accent">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              Hello, I&apos;m {personalInfo.name}
            </h1>

            <p className="text-lg text-muted-foreground  max-w-lg text-pretty leading-relaxed">
              Full Stack Developer with 2.6 years of experience in the MERN stack. I&rsquo;m adept at creating robust and scalable applications while collaborating effectively in Agile teams. I am a passionate and dedicated developer focused on impactful contributions and continuous learning.
            </p>

            <Button asChild size="lg" className="px-8">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80">
              <Image
                src={personalInfo.image}
                alt={`${personalInfo.name} - Profile Photo`}
                fill
                className="rounded-full object-cover shadow-lg ring-1 ring-border"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
