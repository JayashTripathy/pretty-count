import type { Metadata } from "next"

import "./globals.css"
import "@pc/ui/globals.css"
import { Mukta } from "next/font/google"

const mukta = Mukta({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${mukta.className} bg-background`}>{children}</body>
    </html>
  )
}
