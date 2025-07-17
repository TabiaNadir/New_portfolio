'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Mood Tracker',
    description: 'A Streamlit-based mood tracker that lets users log their daily mood and view mood patterns over time with a dynamic bar chart.',
    tech: ['Python', 'Streamlit'],
    link: 'https://mood-tracker-by-tabia-uosyko3ne4gf2rcfmtfegf.streamlit.app/',
  },
  {
    title: 'To-Do List',
    description: 'Simple to-do list with local storage.',
    tech: ['TypeScript', 'HTML', 'CSS'],
    link: 'https://to-do-list-phi-umber-81.vercel.app/',
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-12 bg-gradient-to-b from-purple-50 to-blue-100 text-gray-900">
      <motion.h1
        className="text-4xl font-bold text-center text-purple-800 mb-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        🧩 My Projects
      </motion.h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-white rounded-2xl shadow-lg p-6 border border-purple-200 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-purple-700 mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-purple-100 text-purple-700 text-sm px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium mt-auto"
            >
              🔗 View Project
            </a>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
