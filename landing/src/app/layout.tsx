import './globals.css'
import { Montserrat, Poppins } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'], variable: '--font-poppins' })

export const metadata = {
  title: 'SpeedLink+BC',
  description: 'プロ級の球速記録と証明を、あなたの手に。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${montserrat.variable} ${poppins.variable} scroll-smooth`}>
      <body className="font-sans bg-gradient-to-br from-gray-50 to-blue-50">{children}</body>
    </html>
  )
}
