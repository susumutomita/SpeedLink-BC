'use client'
import Layout from '@/components/Layout'
import { motion } from 'framer-motion'

export default function Overview() {
  return (
    <section id="overview" className="py-32 bg-white">
      <Layout>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-5xl font-bold mb-12 text-center text-blue-900">概要</h2>
          <div className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto space-y-6">
            <p>
              SpeedLink+BCは、従来のスピードガン計測とスマホ動画撮影を連携し、
              映像にリアルタイムで球速をオーバーレイ表示します。
            </p>
            <p>
              さらに、その計測データ（日時・速度・ユーザーIDなど）や映像ハッシュを
              ブロックチェーン上に書き込むことで、あとから「本当にこの速度が出た映像なのか？」を
              改ざん不可能な形で証明できるサービスです。
            </p>
          </div>
        </motion.div>
      </Layout>
    </section>
  )
}
