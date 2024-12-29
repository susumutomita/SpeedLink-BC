'use client'
import Layout from '@/components/Layout'
import { CheckCircle, Users, Smartphone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WhyNeeded() {
  const reasons = [
    {
      title: '改ざんリスクの解消と信用度UP',
      description: 'ブロックチェーン上で"真偽を証明"することで、数字の正当性を高められる。',
      icon: <CheckCircle className="h-16 w-16 text-green-500" />,
    },
    {
      title: 'プロ球団や独立リーグのスカウティングにも',
      description: '証明付きデータなら、スカウト側も「捏造された速球動画かも」という不安を減らせる。',
      icon: <Users className="h-16 w-16 text-blue-500" />,
    },
    {
      title: '個人でも手軽に利用できる',
      description: 'スマホ＋市販スピードガンの接続だけで完結するため、草野球・学生・個人でも使いやすい。',
      icon: <Smartphone className="h-16 w-16 text-purple-500" />,
    },
  ]

  return (
    <section id="why-needed" className="py-32 bg-blue-50">
      <Layout>
        <h2 className="font-serif text-5xl font-bold mb-16 text-center text-blue-900">なぜ必要なのか？</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-xl p-8 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="flex justify-center mb-6">{reason.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-center text-blue-900">{reason.title}</h3>
              <p className="text-lg text-gray-700 text-center">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </Layout>
    </section>
  )
}
