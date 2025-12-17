"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { personalInfo } from "@/lib/data"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Get In Touch</h3>
            <div className="space-y-2">
              <Link
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>{personalInfo.email}</span>
              </Link>

              <div className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
                <MapPin className="h-4 w-4" />
                <p className="text-muted-foreground">{personalInfo.location}</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <a 
                href="#about" 
                onClick={(e) => handleScrollTo(e, "#about")}
                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                About
              </a>
              <a 
                href="#skills" 
                onClick={(e) => handleScrollTo(e, "#skills")}
                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                Skills
              </a>
              <a 
                href="#experience" 
                onClick={(e) => handleScrollTo(e, "#experience")}
                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                Experience
              </a>
              <a 
                href="#projects" 
                onClick={(e) => handleScrollTo(e, "#projects")}
                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex justify-center items-center space-y-2 sm:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
