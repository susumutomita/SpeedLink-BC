import Header from '@/components/Header'
import Overview from '@/components/Overview'
import Background from '@/components/Background'
import Features from '@/components/Features'
import WhyNeeded from '@/components/WhyNeeded'
import TargetUsers from '@/components/TargetUsers'
import FuturePlans from '@/components/FuturePlans'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <Header />
      <Overview />
      <Background />
      <Features />
      <WhyNeeded />
      <TargetUsers />
      <FuturePlans />
      <Contact />
    </main>
  )
}
