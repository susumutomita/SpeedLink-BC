'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { name: '概要', href: '#overview' },
  { name: '背景', href: '#background' },
  { name: '特徴', href: '#features' },
  { name: '必要性', href: '#why-needed' },
  { name: 'ターゲット', href: '#target-users' },
  { name: '今後の展開', href: '#future-plans' },
  { name: 'お問い合わせ', href: '#contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}

