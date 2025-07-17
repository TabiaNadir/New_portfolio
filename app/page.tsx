'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6'

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center 
                     bg-gradient-to-br from-pink-300 via-fuchsia-300 to-pink-300
                     px-4 sm:px-8 py-12 text-gray-900 overflow-hidden">
      
      {/* 🌊 Background SVG (optional) */}
      { <Image 
           src="\polygon-scatter-haikei.svg"
           alt="Background" fill 
           className="absolute inset-0 -z-10 object-cover opacity-30" /> }

      {/* 🖼 Profile Image */}
      <Image
        src="/profile-pic.jpg"
        alt="Tabia Nadir"
        width={160}
        height={160}
        className="rounded-full mb-6 border-4 border-white shadow-lg"
      />

      {/* 💬 Typing Heading */}
      <TypeAnimation
        sequence={[
          "Hi, I'm Tabia Nadir", 2000,
          'Web Developer 💻', 2000,
          'Data Science Student 📊', 2000,
        ]}
        wrapper="h1"
        cursor
        repeat={Infinity}
        className="text-3xl sm:text-4xl font-bold text-purple-900 mb-4 text-center"
      />

      {/* 🔗 Navigation Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {[
          { name: 'About', href: '/about' },
          { name: 'Projects', href: '/projects' },
          { name: 'Contact', href: '/contact' },
          { name: 'Resume', href: '/resume' },
          { name: 'Service', href: '/service' },
        ].map(link => (
          <motion.div
            key={link.name}
            whileHover={{
              scale: 1.1,
              backgroundColor: '#7c3aed',
              color: '#ffffff',
            }}
            transition={{ duration: 0.3 }}
            className="px-6 py-2 rounded-full border border-purple-300 bg-white text-purple-700 font-medium cursor-pointer transition shadow-sm"
          >
            <Link href={link.href}>{link.name}</Link>
          </motion.div>
        ))}
      </motion.div>

      {/* 🌐 Social Icons */}
      <div className="flex justify-center gap-6 text-purple-700 text-xl mb-4">
        <Link href="https://linkedin.com/in/tabia-nadir" target="_blank"><FaLinkedin className="hover:text-purple-900 transition" /></Link>
        <Link href="https://github.com/tabianadir" target="_blank"><FaGithub className="hover:text-purple-900 transition" /></Link>
        <Link href="https://x.com/TabiaNadir18" target="_blank"><FaXTwitter className="hover:text-purple-900 transition" /></Link>
      </div>
    </main>
  )
}
