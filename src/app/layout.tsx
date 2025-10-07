import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"
import { ThemeProvider } from "next-themes"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Johnson JP - Full-Stack Developer Portfolio",
  description:
    "Experienced full-stack developer specializing in React, Next.js, and TypeScript. View my projects and get in touch for your next web development project.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "TypeScript", "Web Development", "Portfolio"],
  authors: [{ name: "Johnson JP" }],
  creator: "Johnson JP",
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {/* Only wrap parts of the app that suspend */}
        <Suspense fallback={<div />}>{children}</Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
