import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "John Doe - Full-Stack Developer Portfolio",
  description:
    "Experienced full-stack developer specializing in React, Next.js, and TypeScript. View my projects and get in touch for your next web development project.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "TypeScript", "Web Development", "Portfolio"],
  authors: [{ name: "John Doe" }],
  creator: "John Doe",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://johndoe.dev",
    title: "John Doe - Full-Stack Developer Portfolio",
    description: "Experienced full-stack developer specializing in React, Next.js, and TypeScript.",
    siteName: "John Doe Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Doe - Full-Stack Developer Portfolio",
    description: "Experienced full-stack developer specializing in React, Next.js, and TypeScript.",
    creator: "@johndoe",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  )
}
