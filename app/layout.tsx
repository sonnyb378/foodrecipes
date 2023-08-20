import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from "./providers";

import Header from "@/components/Header"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FoodRecipes',
  description: 'NextJS, Typescript, Contentful',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          <Providers>
            <Header />
            {children}
          </Providers>
      </body>
    </html>
  )
}
