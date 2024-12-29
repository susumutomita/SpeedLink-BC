'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import Layout from '@/components/Layout'
import { motion } from 'framer-motion'

export default function Contact() {
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // ここでフォームの送信処理を実装します
    console.log('Form submitted', { isSubscribed })
  }

  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-4">お問い合わせ</h2>
      <div className="flex justify-center">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSci_OpI27MPLrjTmzy8y6NVxDG2y0a_felu3KSwPs8B4hJriA/viewform?embedded=true" width="640" height="983">読み込んでいます…</iframe>
      </div>
    </section>

  )
}
