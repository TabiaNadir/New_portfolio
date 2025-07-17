'use client'

import { motion } from 'framer-motion'

export default function ResumePage() {
  return (
    <main className="min-h-screen px-6 py-12 bg-gradient-to-br from-blue-50 to-purple-100 text-gray-800">
      
      {/* 🟣 Animated Heading */}
      <motion.h1
        className="text-4xl font-bold text-center text-purple-800 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📄 My Resume
      </motion.h1>

      <div className="max-w-3xl mx-auto space-y-12">

        {/* 🎓 Education */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-purple-700 mb-2">🎓 Education</h2>
          <ul className="space-y-3">
            <li>
              <p className="font-medium">Data Science – SMIT (Ongoing)</p>
              <p className="text-sm text-gray-600">Saylani Mass IT Training Program</p>
            </li>
            <li>
              <p className="font-medium">Web Development – GIAIC (Ongoing)</p>
              <p className="text-sm text-gray-600">Governor Initiative</p>
            </li>
            <li>
              <p className="font-medium">Matric – Science</p>
              <p className="text-sm text-gray-600">Passed, Now in First Year</p>
            </li>
          </ul>
        </motion.section>

        {/* 💻 Experience */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-purple-700 mb-2">💻 Experience</h2>
          <ul className="space-y-3">
            <li>
              <p className="font-medium">Frontend Developer (2 years)</p>
              <p className="text-sm text-gray-600">Built modern, responsive websites using React, TypeScript, Tailwind, and Next.js</p>
            </li>
          </ul>
        </motion.section>

        {/* 🛠 Skills */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-purple-700 mb-2">🛠 Skills</h2>
          <p className="text-gray-700">
            TypeScript, React, Next.js, TailwindCSS, Node.js, Git, Responsive Design, UI/UX
          </p>
        </motion.section>

        {/* ⬇️ Animated Download Button */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://sg.docworkspace.com/d/sIKPYifylAva59MIG"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: '#6D28D9' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition"
          >
            ⬇️ Download PDF
          </motion.a>
        </motion.div>

      </div>
    </main>
  )
}
