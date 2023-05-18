import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Friut store',
  description: 'Hyperinfalted friut store - best prices',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col relative`}>
        <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        </head>
        <Header />
        <div className='flex-1'>
          {children}
        </div>
        <footer className='flex items-center flex-wrap justify-center border-t border-solid border-slate-300 p-10'>
          <Link href={'https://www.instagram.com/u.daavka/'} target='_blank'>
            <i class="fa-brands fa-instagram"></i>
          </Link>
          <i class="fa-brands fa-square-facebook"></i>
        </footer>
      </body>
    </html>
  )
}
