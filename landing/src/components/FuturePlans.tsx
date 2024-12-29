'use client'
import Layout from '@/components/Layout'
import { motion } from 'framer-motion'
import { Activity, Coins, Handshake } from 'lucide-react'

export default function FuturePlans() {
  const plans = [
    {
      title: 'フォーム解析との連動',
      description: '速度だけでなく、肘や肩の角度などフォームデータの一部をオンチェーン化して、さらなる信頼性を担保。',
      icon: <Activity className="h-16 w-16 text-blue-500" />,
    },
    {
      title: 'コミュニティトークンやNFTグッズ',
      description: 'ユーザー同士が応援し合える"投げ銭"機能や、コミュニティトークンを配布するなど、Web3らしいファンエコシステムを形成。',
      icon: <Coins className="h-16 w-16 text-yellow-500" />,
    },
    {
      title: '企業・イベントとのコラボ',
      description: '野球用品メーカーや大会主催者が、この仕組みを取り入れることで、イベント来場者に「あなたの最速球NFT」を記念配布なども可能に。',
      icon: <Handshake className="h-16 w-16 text-green-500" />,
    },
  ]

  return (
    <section id="future-plans" className="py-32 bg-blue-50">
      <Layout>
        <h2 className="font-serif text-5xl font-bold mb-16 text-center text-blue-900">今後の展開</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl"
            >
              <div className="mb-6 bg-blue-50 rounded-full p-6">{plan.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">{plan.title}</h3>
              <p className="text-lg text-gray-700">{plan.description}</p>
            </motion.div>
          ))}
        </div>
      </Layout>
    </section>
  )
}
