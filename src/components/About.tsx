import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const codeLines = [
  { indent: 0, content: [{ t: 'kw', v: 'const' }, { t: 'w', v: ' ' }, { t: 'v', v: ' dev' }, { t: 'w', v: ' = {' }] },
  { indent: 1, content: [{ t: 'k', v: 'name' }, { t: 'w', v: ': ' }, { t: 's', v: "'Andrii Kovalskyi'" }, { t: 'w', v: ',' }] },
  { indent: 1, content: [{ t: 'k', v: 'role' }, { t: 'w', v: ': ' }, { t: 's', v: "'Software Engineer'" }, { t: 'w', v: ',' }] },
  { indent: 1, content: [{ t: 'k', v: 'location' }, { t: 'w', v: ': ' }, { t: 's', v: "'The Hague, NL 🇳🇱'" }, { t: 'w', v: ',' }] },
  { indent: 1, content: [{ t: 'k', v: 'experience' }, { t: 'w', v: ': ' }, { t: 'n', v: '3' }, { t: 'w', v: ',' }] },
  { indent: 1, content: [{ t: 'k', v: 'stack' }, { t: 'w', v: ': [' }] },
  { indent: 2, content: [{ t: 's', v: "'React'" }, { t: 'w', v: ', ' }, { t: 's', v: "'TypeScript'" }, { t: 'w', v: ',' }] },
  { indent: 2, content: [{ t: 's', v: "'Next.js'" }, { t: 'w', v: ', ' }, { t: 's', v: "'PHP'" }, { t: 'w', v: ',' }] },
  { indent: 2, content: [{ t: 's', v: "'AWS'" }, { t: 'w', v: ', ' }, { t: 's', v: "'Docker'" }, { t: 'w', v: ',' }] },
  { indent: 1, content: [{ t: 'w', v: '],' }] },
  { indent: 1, content: [{ t: 'k', v: 'passions' }, { t: 'w', v: ': [' }] },
  { indent: 2, content: [{ t: 's', v: "'Clean Code'" }, { t: 'w', v: ', ' }, { t: 's', v: "'AI Integration'" }, { t: 'w', v: ',' }] },
  { indent: 1, content: [{ t: 'w', v: '],' }] },
  { indent: 0, content: [{ t: 'w', v: '};' }] },
]

const colorMap: Record<string, string> = {
  kw: '#a78bfa', // purple - keyword
  v: '#60a5fa', // blue - var name
  k: '#86efac', // green - key
  s: '#fdba74', // orange - string
  n: '#fbbf24', // yellow - number
  w: '#e2e8f0', // white - punctuation
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 48 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] } },
  })

  return (
    <section id="about" className="section-pad bg-c-bg">
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-code text-accent text-sm">01.</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">About Me</h2>
          <div className="flex-1 h-px bg-c-border max-w-sm" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — bio */}
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <p className="text-c-secondary text-base md:text-lg leading-relaxed mb-5">
              I'm a{' '}
              <span className="text-white font-medium">Software Engineer</span> building
              end-to-end web applications using TypeScript, JavaScript (ES6+), PHP, and modern
              frontend frameworks — React, Next.js, and Vue — with a strong focus on clean,
              maintainable code and performance.
            </p>
            <p className="text-c-secondary text-base md:text-lg leading-relaxed mb-5">
              I have hands-on backend experience integrating{' '}
              <span className="text-accent font-code text-sm">REST APIs</span>, handling
              authentication, and contributing across the full stack. I work with{' '}
              <span className="text-accent font-code text-sm">Docker</span> and{' '}
              <span className="text-accent font-code text-sm">AWS</span> infrastructure for
              reliable, scalable deployments.
            </p>
            <p className="text-c-secondary text-base md:text-lg leading-relaxed mb-10">
              Driven by problem-solving, I focus on delivering business-impactful solutions and
              integrating modern <span className="text-white">AI technologies</span> to enhance
              products and development efficiency.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Location', value: 'The Hague, Netherlands' },
                { label: 'Email', value: 'andrii.kovalskyi02@gmail.com' },
                { label: 'Status', value: 'Open to opportunities' },
                { label: 'Languages', value: 'EN · UA · PL · RU · NL' },
              ].map((f) => (
                <div key={f.label} className="flex flex-col gap-1 border-l-2 border-accent/30 pl-4">
                  <span className="font-code text-[10px] text-accent tracking-widest uppercase">
                    {f.label}
                  </span>
                  <span className="text-white text-sm">{f.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — code block */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="rounded-xl border border-c-border bg-c-surface overflow-hidden"
          >
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-c-border bg-black/30">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-code text-xs text-c-muted">about.ts</span>
            </div>

            {/* Code */}
            <div className="p-5 font-code text-sm leading-7 overflow-x-auto">
              {codeLines.map((line, lineIndex) => (
                <motion.div
                  key={lineIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + lineIndex * 0.04, duration: 0.4 }}
                  className="flex"
                  style={{ paddingLeft: `${line.indent * 16}px` }}
                >
                  {line.content.map((token, ti) => (
                    <span key={ti} style={{ color: colorMap[token.t] ?? '#e2e8f0' }}>
                      {token.v}
                    </span>
                  ))}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
