'use client'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Layout from '@/components/Layout'
import Navigation from '@/components/Navigation'

export default function Header() {
  return (
    <header className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white overflow-hidden">
      <Navigation />
      <div className="absolute inset-0 bg-[url('/baseball-pattern.svg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-700/80 to-blue-500/80" />
      <Layout className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-6xl md:text-8xl font-bold mb-6 leading-tight">
            Speed<span className="text-yellow-400">Link</span>
            <span className="text-blue-300">+BC</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 leading-relaxed">
            あなたのピッチング映像に球速を自動合成、かつブロックチェーンで&quot;記録&quot;を守る。
            <br />
            草野球プレーヤーも&quot;プロ級&quot;の中継体験とデータ資産を同時に実現。
          </p>
          <Button className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 text-lg px-10 py-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl" disabled>

            今すぐ始める(Coming Soon) <ArrowRight className="ml-2" />
          </Button>
        </div>
      </Layout>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </header>
  )
}
