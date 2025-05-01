import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Hippocrat Digital | Цифровые решения для медицины",
  description: "Медицинское digital-агентство, специализирующееся на продвижении клиник и медицинских услуг",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        {/* Добавляем шрифт Fixedsys для заголовков, как в Hippocrat AI */}
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/fixedsys-excelsior" />
      </head>
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
