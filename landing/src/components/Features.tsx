'use client'
import Layout from '@/components/Layout'
import { Zap, Shield, Share2, Trophy } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Features() {
  const features = [
    {
      title: 'リアルタイム合成',
      description: '撮影中の動画プレビューに「○○km/h」という速度が重ね表示され、撮影後の編集手間が不要。',
      icon: <Zap className="h-16 w-16 text-yellow-400" />,
    },
    {
      title: 'ブロックチェーンで証明',
      description: '球速データ、日時、ユーザーIDをまとめたメタデータをハッシュ化し、ブロックチェーン上に書き込み。',
      icon: <Shield className="h-16 w-16 text-blue-500" />,
    },
    {
      title: 'SNSシェア＆コミュニティ',
      description: 'ユーザーは撮影した「球速オーバーレイ動画」をワンタップでSNSに共有可能。',
      icon: <Share2 className="h-16 w-16 text-green-500" />,
    },
    {
      title: 'デジタル資産化',
      description: '一定速度以上を記録した際には、その瞬間の動画ハイライトをNFTとして発行するオプションを用意。',
      icon: <Trophy className="h-16 w-16 text-purple-500" />,
    },
  ]

  return (
    <section id="features" className="py-32 bg-white">
      <Layout>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-5xl font-bold mb-16 text-center text-blue-900">主な特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="bg-gray-50 rounded-full p-8 mb-6 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">{feature.title}</h3>
                <p className="text-xl text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Layout>
    </section>
  )
}
