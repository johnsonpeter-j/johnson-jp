import { PageLayout } from "@/components/layout/page-layout"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { SkillsSection } from "@/components/sections/skills"
import { ExperienceSection } from "@/components/sections/experience"
import { ProjectsSection } from "@/components/sections/projects"
import { ContactSection } from "@/components/sections/contact"
import { ScrollToTop } from "@/components/ui/scroll-to-top"

export default function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <ScrollToTop />
    </PageLayout>
  )
}
