'use client'

import { motion } from 'framer-motion'
import { FaCode, FaMobileAlt, FaPaintBrush } from 'react-icons/fa'

export default function ServicesPage() {
  const services = [
    {
      title: 'Frontend Development',
      description: 'I build modern, responsive, and accessible interfaces using React, Next.js, and TailwindCSS.',
      icon: <FaCode className="text-4xl text-purple-600 mb-4" />,
    },
    {
      title: 'UI/UX Design',
      description: 'Designing clean and user-friendly interfaces with attention to detail and usability.',
      icon: <FaPaintBrush className="text-4xl text-purple-600 mb-4" />,
    },
    {
      title: 'Responsive Web Design',
      description: 'Ensuring your website looks great on all devices, from desktops to smartphones.',
      icon: <FaMobileAlt className="text-4xl text-purple-600 mb-4" />,
    },
  ]

  return (
    <main className="min-h-screen px-6 py-12 bg-gradient-to-b from-purple-50 to-blue-100 text-gray-800">
      <motion.h1
        className="text-4xl font-bold text-center text-purple-800 mb-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        💼 My Services
      </motion.h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 text-center border border-purple-200"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {service.icon}
            <h2 className="text-xl font-semibold text-purple-700 mb-2">{service.title}</h2>
            <p className="text-gray-700">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
