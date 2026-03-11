import type { Metadata } from "next"
import { Anton, Montserrat } from "next/font/google"
import "./globals.css"

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Gazelity",
  description: "Bežecká komunita",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sk">
      <body className={`${anton.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  )
}
