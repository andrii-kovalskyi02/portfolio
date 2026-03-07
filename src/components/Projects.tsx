import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { projects } from '../data/resume'

function IconGithub() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function IconExternal() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

const bgPatterns: Record<number, string> = {
  1: 'from-blue-900/20 to-purple-900/20',
  2: 'from-sky-900/20 to-cyan-900/20',
  3: 'from-emerald-900/20 to-teal-900/20',
  4: 'from-amber-900/20 to-yellow-900/20',
  5: 'from-orange-900/20 to-rose-900/20',
  6: 'from-indigo-900/20 to-blue-900/20',
  7: 'from-violet-900/20 to-fuchsia-900/20',
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.08 })
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="section-pad bg-c-surface">
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-code text-accent text-sm">04.</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">Projects</h2>
          <div className="flex-1 h-px bg-c-border max-w-sm" />
        </motion.div>

        {/* Featured projects */}
        <div className="space-y-6 mb-14">
          {featured.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHoveredId(p.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => p.demo && window.open(p.demo, '_blank', 'noopener,noreferrer')}
              className={`group relative grid md:grid-cols-[1fr_40%] gap-0 rounded-xl border overflow-hidden transition-all duration-400 cursor-pointer ${
                hoveredId === p.id ? 'border-accent/40' : 'border-c-border'
              }`}
            >
              {/* Info side */}
              <div className="p-7 md:p-10 bg-c-bg flex flex-col justify-center">
                <div className="font-code text-xs text-accent/50 mb-3 tracking-widest">
                  0{i + 1} — Featured Project
                </div>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-3 group-hover:text-accent transition-colors duration-300">
                  {p.name}
                </h3>
                <p className="text-c-secondary text-sm md:text-base leading-relaxed mb-6 max-w-lg">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-7">
                  {p.tech.map((t) => (
                    <span key={t} className="font-code text-xs text-accent/60">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-5">
                  {p.code && (
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-code text-xs text-c-secondary hover:text-accent transition-colors"
                    >
                      <IconGithub />
                      Source Code
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-code text-xs text-c-secondary hover:text-accent transition-colors"
                    >
                      <IconExternal />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Visual side */}
              <div
                className={`relative hidden md:flex items-center justify-center bg-gradient-to-br ${bgPatterns[p.id] ?? 'from-gray-900/20 to-gray-800/20'} border-l border-c-border min-h-[200px]`}
              >
                <AnimatePresence>
                  {hoveredId === p.id && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="absolute inset-0 bg-accent/5"
                    />
                  )}
                </AnimatePresence>
                <motion.span
                  animate={{ y: hoveredId === p.id ? -8 : 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="text-7xl select-none"
                >
                  {p.emoji}
                </motion.span>
                {/* Corner bracket decoration */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-accent/30" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-accent/30" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-c-border" />
          <span className="font-code text-xs text-c-muted tracking-widest uppercase">
            Other Projects
          </span>
          <div className="flex-1 h-px bg-c-border" />
        </div>

        {/* Other projects */}
        <div className="grid md:grid-cols-2 gap-5">
          {others.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => p.demo && window.open(p.demo, '_blank', 'noopener,noreferrer')}
              className="group rounded-xl border border-c-border bg-c-bg p-6 hover:border-accent/30 hover:bg-c-surface/80 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-5">
                <span className="text-4xl">{p.emoji}</span>
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {p.code && (
                    <a href={p.code} target="_blank" rel="noopener noreferrer" className="text-c-muted hover:text-accent transition-colors">
                      <IconGithub />
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="text-c-muted hover:text-accent transition-colors">
                      <IconExternal />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="font-display font-semibold text-lg text-white mb-2 group-hover:text-accent transition-colors duration-300">
                {p.name}
              </h3>
              <p className="text-c-secondary text-sm leading-relaxed mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="font-code text-xs text-accent/50">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
