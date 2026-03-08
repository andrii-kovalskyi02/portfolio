import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { experience, education } from '../data/resume'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeId, setActiveId] = useState<number | null>(null)

  return (
    <section id="experience" className="section-pad bg-c-bg">
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-code text-accent text-sm">03.</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">Experience</h2>
          <div className="flex-1 h-px bg-c-border max-w-sm" />
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-3 md:left-5 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent origin-top"
          />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="pl-12 md:pl-16 relative"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: i * 0.15 + 0.4, type: 'spring', stiffness: 400 }}
                  className="absolute left-1.5 md:left-3.5 top-5 w-3 h-3 rounded-full bg-accent -translate-x-1/2 ring-4 ring-c-bg"
                />

                {/* Card */}
                <div
                  className={`border rounded-xl p-6 md:p-8 transition-all duration-300 ${
                    activeId === job.id
                      ? 'border-accent/40 bg-c-surface'
                      : 'border-c-border bg-c-surface/40 hover:border-accent/20 hover:bg-c-surface/80'
                  }`}
                  onClick={() => setActiveId(activeId === job.id ? null : job.id)}
                  data-hover
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display font-semibold text-xl md:text-2xl text-white mb-1">
                        {job.role}
                      </h3>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-accent font-code text-sm">{job.company}</span>
                        <span className="text-c-border">·</span>
                        <span className="font-code text-xs text-c-muted">{job.type}</span>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="font-code text-xs text-white/70 mb-1">{job.period}</div>
                      <div className="font-code text-xs text-c-muted">{job.location}</div>
                    </div>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 font-code text-xs text-accent/70 border border-accent/20 rounded-sm bg-accent/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Expandable bullets */}
                  <AnimatePresence>
                    {activeId === job.id && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden space-y-2 mt-2"
                      >
                        {job.bullets.map((b, bi) => (
                          <motion.li
                            key={bi}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: bi * 0.06 }}
                            className="flex gap-3 text-c-secondary text-sm leading-relaxed"
                          >
                            <span className="text-accent mt-[3px] shrink-0 text-xs">▸</span>
                            {b}
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>

                  {/* Collapsed preview */}
                  {activeId !== job.id && (
                    <p className="text-c-muted text-sm font-code">
                      {job.bullets[0].slice(0, 70)}…{' '}
                      <span className="text-accent/60 hover:text-accent transition-colors">
                        expand ↓
                      </span>
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Education entry */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: experience.length * 0.15 + 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="pl-12 md:pl-16 relative"
            >
              {/* Timeline dot — hollow ring style to distinguish from work */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: experience.length * 0.15 + 0.4, type: 'spring', stiffness: 400 }}
                className="absolute left-1.5 md:left-3.5 top-5 w-3 h-3 rounded-full border-2 border-accent bg-c-bg -translate-x-1/2 ring-4 ring-c-bg"
              />

              <div className="border border-dashed border-c-border bg-c-surface/30 rounded-xl p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display font-semibold text-xl md:text-2xl text-white mb-1">
                      {education.degree}
                    </h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-accent font-code text-sm">{education.school}</span>
                      <span className="text-c-border">·</span>
                      <span className="font-code text-xs text-c-muted">{education.location}</span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-code text-xs text-white/70">{education.period}</div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {education.highlights.map((h, i) => (
                    <li key={i} className="flex gap-3 text-c-secondary text-sm leading-relaxed">
                      <span className="text-accent mt-[3px] shrink-0 text-xs">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
