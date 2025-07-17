'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      }),
      headers: { 'Content-Type': 'application/json' },
    })

    setLoading(false)
    if (res.ok) {
      setSuccess(true)
      form.reset()
    } else {
      alert('❌ Something went wrong!')
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 text-gray-900">
      
      {/* 🎯 CONTACT FORM CARD */}
      <motion.div
        className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-purple-800 mb-4 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          📬 Contact Me
        </motion.h1>
        <p className="text-center text-gray-700 mb-8">
          Feel free to reach out via this form or at <span className="font-medium text-blue-600">tabianadir18@gmail.com</span>
        </p>

        {/* 📩 FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </motion.button>

          {success && (
            <p className="text-green-600 font-medium text-sm text-center mt-2">
              ✅ Your message has been sent!
            </p>
          )}
        </form>
      </motion.div>

      {/* 🌐 FOOTER OUTSIDE FORM */}
      <footer className="w-full mt-12 border-t border-purple-200 py-6 px-4 text-center text-sm text-gray-600">
        <p className="mb-2 font-medium">Made with 💜 by Tabia Nadir</p>
        <div className="flex justify-center space-x-6 text-purple-700">
          <a
            href="mailto:tabianadir18@gmail.com"
            className="hover:text-purple-900 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            📧 Email
          </a>
          <a
            href="https://github.com/tabianadir"
            className="hover:text-purple-900 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tabia-nadir"
            className="hover:text-purple-900 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            💼 LinkedIn
          </a>
          <a
            href="https://x.com/TabiaNadir"
            className="hover:text-purple-900 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            🐦 X (Twitter)
          </a>
        </div>
      </footer>
    </main>
  )
}
