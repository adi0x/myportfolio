import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Adithi Koppula | Portfolio",
  description: "On a Journey Through Data, AI, and Endless Curiosity (with Coffee in Hand)",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} font-inter`}>{children}</body>
    </html>
  )
}
