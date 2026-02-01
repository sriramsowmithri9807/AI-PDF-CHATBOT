import type React from "react"
import type { Metadata } from "next"
import { Toaster } from "@/components/ui/toaster"

import "./globals.css"

export const metadata: Metadata = {
  title: "AI PDF ChatBot",
  description: "Chat with your PDFs using AI",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body style={{ fontFamily: "'JetBrains Mono', 'Courier New', monospace" }}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}