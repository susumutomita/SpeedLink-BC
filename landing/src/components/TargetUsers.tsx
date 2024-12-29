'use client'
import Layout from '@/components/Layout'
import { Users, Video, Star } from 'lucide-react'
import { motion } from 'framer-motion'

export default function TargetUsers() {
  const targets = [
    {
      title: '草野球や学生野球のプレイヤー',
      description: '「自分の球速を動画と一緒に記録したい」「仲間と正々堂々競いたい」層。',
      icon: <Users className="h-20 w-20 text-blue-500" />,
    },
    {
      title: 'スポーツSNSで情報発信したいユーザー',
      description: 'YouTubeやTikTokなどに球速動画を上げて人気を得たいインフルエンサー予備軍。',
      icon: <Video className="h-20 w-20 text-red-500" />,
    },
    {
      title: '将来を見据えた"アスリート候補"',
      description: 'アピール材料として改ざんできない球速データを残し、スカウトや指導者の目に留まりたい選手。',
      icon: <Star className="h-20 w-20 text-yellow-500" />,
    },
  ]

  return (
    <section id="target-users" className="py-32 bg-white">
      <Layout>
        <h2 className="font-serif text-5xl font-bold mb-16 text-center text-blue-900">ターゲットユーザー</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {targets.map((target, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl"
            >
              <div className="mb-6">{target.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">{target.title}</h3>
              <p className="text-lg text-gray-700">{target.description}</p>
            </motion.div>
          ))}
        </div>
      </Layout>
    </section>
  )
}
