"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { personalInfo } from "@/lib/data"
import { ThemeToggle } from "@/components/navigation/theme-toggle"
import Image from "next/image"
import { useTheme } from "next-themes"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme} = useTheme()

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          {/* <Link href="#hero" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
            {personalInfo.name}
          </Link> */}
          <Image
            src={theme === "light" ? personalInfo.logo_image_light : personalInfo.logo_image_dark}
            alt={`Logo`}
            height={60}
            width={60}
            priority
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-accent rounded-md"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {/* Theme toggle on desktop */}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left">{personalInfo.name}</SheetTitle>
                </SheetHeader>
                {/* Theme toggle inside mobile drawer */}
                <div className="mt-4">
                  <ThemeToggle />
                </div>
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={handleNavClick}
                      className="text-foreground hover:text-primary px-4 py-3 text-lg font-medium transition-colors duration-200 hover:bg-accent rounded-md"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
