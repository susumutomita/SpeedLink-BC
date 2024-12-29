'use client'
import Layout from '@/components/Layout'
import { FileVideo, Shield, Trophy } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Background() {
  const points = [
    { icon: <FileVideo className="w-16 h-16 text-blue-500" />, text: 'プロ野球中継のような動画を簡単に作成' },
    { icon: <Shield className="w-16 h-16 text-green-500" />, text: '改ざん不可能な記録で信頼性を確保' },
    { icon: <Trophy className="w-16 h-16 text-yellow-500" />, text: '大切な自己ベストを確かな形で保存' },
  ]

  return (
    <section id="background" className="py-32 bg-gray-50">
      <Layout>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-5xl font-bold mb-16 text-center text-blue-900">背景</h2>
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {points.map((point, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-full p-6 shadow-lg mb-6">
                  {point.icon}
                </div>
                <p className="text-xl text-gray-700">{point.text}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            SpeedLink+BCは、こうした課題に対して、「自動で速度を動画に合成」「改ざん不可能な証明」を
            同時に提供する新たなプラットフォームです。誰でも手軽に&quot;プロ級&quot;の球速映像を作れるうえ、
            そのデータをブロックチェーンで証明することで、ユーザーが大切に残したい自己ベストや思い出を確かな形で保存します。
          </p>
        </motion.div>
      </Layout>
    </section>
  )
}
