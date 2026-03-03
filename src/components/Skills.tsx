import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillGroups } from '../data/resume'

const categoryIcons: Record<string, string> = {
  Frontend: '⚡',
  Backend: '🔧',
  Infrastructure: '☁️',
  AI: '🤖',
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="skills" className="section-pad bg-c-surface">
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-code text-accent text-sm">02.</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">Skills</h2>
          <div className="flex-1 h-px bg-c-border max-w-sm" />
        </motion.div>

        {/* Skill groups grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: gi * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-xl border border-c-border bg-c-bg p-6 hover:border-accent/30 transition-all duration-400 overflow-hidden"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-accent/5 rounded-bl-2xl group-hover:bg-accent/10 transition-colors duration-400" />

              <div className="flex items-center gap-2 mb-5">
                <span className="text-lg">{categoryIcons[group.category] ?? '💡'}</span>
                <h3 className="font-code text-xs text-accent tracking-widest uppercase">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: gi * 0.09 + si * 0.03 + 0.15, duration: 0.35 }}
                    className="px-3 py-1 text-xs font-code text-c-secondary bg-c-border/60 border border-c-border hover:bg-accent/10 hover:text-accent hover:border-accent/30 transition-all duration-200 rounded-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee tech strip */}
        <div className="mt-16 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-c-surface to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-c-surface to-transparent z-10" />
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[
              ...skillGroups.flatMap((g) => g.items),
              ...skillGroups.flatMap((g) => g.items),
            ].map((skill, i) => (
              <span key={i} className="font-code text-xs text-c-border flex items-center gap-3">
                <span className="text-accent/30">▸</span>
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
