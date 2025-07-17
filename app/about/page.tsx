'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center 
      bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 
      px-6 py-12 text-gray-900 overflow-hidden">

         <Image
           src="/profile-pic.jpg"
           alt="Tabia Nadir"
           width={150}
           height={150}
           className="rounded-full border-4 border-white shadow-xl mb-6"
          />

      {/* 🧾 About Card */}
      <motion.div
        className="backdrop-blur-lg bg-white/60 border border-purple-200 rounded-2xl shadow-xl max-w-2xl w-full p-8 text-center z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-4">About Me</h1>
       <p className="text-lg text-gray-700 leading-relaxed">
         I&rsquo;m <strong>Tabia Nadir</strong>, a passionate Web Developer and Data Science student.
         Currently enrolled in courses at <strong>GIAIC</strong> and <strong>SMIT</strong>, I focus on creating
         modern, responsive websites with beautiful UI using tools like <strong>Next.js</strong>,
         <strong> React</strong>, <strong>TypeScript</strong>, and <strong>TailwindCSS</strong>.
       </p>
       <p className="text-lg text-gray-700 mt-4">
         With 2 years of experience, I enjoy turning creative ideas into functional web apps.
         I&rsquo;m always learning and love working on projects that solve real-world problems.
       </p>

      </motion.div>

      {/* 🛠 Skills Section */}
<motion.section
  className="mt-16 w-full max-w-md text-center"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {/* 📝 Animated Heading */}
  <motion.h2
    className="text-3xl font-bold text-purple-800 mb-10"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.2, duration: 0.5 }}
    viewport={{ once: true }}
  >
    🛠 My Skills
  </motion.h2>

  {/* 🔷 Skill Grid */}
    <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 gap-6"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        >
      {[
         'TypeScript',
         'React.js',
         'Next.js',
         'Node.js',
         'TailwindCSS',
         'Frontend Dev',
         'Python',
       ].map((skill) => (
         <motion.div
        key={skill}
        whileHover={{
          scale: 1.08,
          backgroundColor: '#3B82F6',
          color: '#ffffff',
          boxShadow: '0 10px 20px rgba(59, 130, 246, 0.4)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="bg-white border border-blue-200 shadow-md rounded-xl p-4 text-center font-medium text-blue-700 cursor-pointer transition"
      >
        {skill}
      </motion.div>
    ))}
    </motion.div>
</motion.section>


     {/* 📘 Timeline */}
      <motion.section
         className="mt-16 w-full max-w-2xl"
         initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.7 }}
         viewport={{ once: true }}
      >
      <motion.h2
         className="text-3xl font-bold text-purple-800 mb-8 text-center"
         initial={{ opacity: 0, scale: 0.95 }}
         whileInView={{ opacity: 1, scale: 1 }}
         transition={{ delay: 0.2, duration: 0.5 }}
         viewport={{ once: true }}
       >
           📅 My Journey
     </motion.h2>

      <ol className="border-l-4 border-purple-400 pl-6 space-y-8">
        {[
         {
           title: '🎓 Matric (Completed)',
           desc: 'Completed matriculation with strong foundation in science and math.',
         },
         {
           title: '📚 1st Year (Ongoing)',
           desc: 'Currently pursuing 1st Year studies while learning tech skills in parallel.',
         },
         {
          title: '💻 Web Development - GIAIC',
          desc: 'Learning frontend & backend skills including Next.js, React & TypeScript.',
         },
         {
          title: '📊 Data Science - SMIT',
          desc: 'Gaining practical experience in Python, AI, and machine learning.',
         },
         {
          title: '🛠 2 Years Development Experience',
          desc: 'Worked on real-world projects and freelance work building modern websites.',
         },
        ].map((item, index) => (
         <motion.li
           key={index}
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ delay: index * 0.1, duration: 0.4 }}
           viewport={{ once: true }}
           className="relative"
          >
            <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-1.5 top-1.5"></div>
               <h3 className="text-purple-800 font-bold">{item.title}</h3>
               <p className="text-gray-700">{item.desc}</p>
         </motion.li>
        ))}
      </ol> 
      </motion.section>

    </main>
  )
}
