import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { personalInfo, certifications, achievements } from '../data/resume'

function IconLinkedin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function IconGithub() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
    </svg>
  )
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="contact" className="section-pad bg-c-bg overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-code text-accent text-sm">05.</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">Contact</h2>
          <div className="flex-1 h-px bg-c-border max-w-sm" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — CTA */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold leading-[1.05] mb-8"
              style={{ fontSize: 'clamp(36px, 6vw, 80px)' }}
            >
              Let's <span className="text-gradient">build</span>
              <br />
              something
              <br />
              great.
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-c-secondary text-base md:text-lg leading-relaxed mb-10 max-w-md"
            >
              I’m open to full-time and part-time opportunities, as well as exciting collaboration projects.
              Feel free to reach out — I typically respond within 24 hours.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href={`mailto:${personalInfo.email}`}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-c-bg font-display font-bold text-sm tracking-wide hover:bg-white transition-colors duration-300"
              >
                <IconMail />
                Say Hello
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  →
                </motion.span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 border border-c-border text-c-secondary hover:border-accent/50 hover:text-accent transition-all duration-300 font-code text-xs"
              >
                <IconLinkedin />
                LinkedIn
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 border border-c-border text-c-secondary hover:border-accent/50 hover:text-accent transition-all duration-300 font-code text-xs"
              >
                <IconGithub />
                GitHub
              </a>
            </motion.div>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-8 border-t border-c-border flex flex-col gap-3"
            >
              {[
                { label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, external: false },
                { label: 'Phone', value: personalInfo.phone, href: personalInfo.whatsapp, external: true },
                { label: 'Location', value: personalInfo.location, href: '#', external: false },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <span className="font-code text-[10px] text-accent tracking-widest uppercase w-16 shrink-0">
                    {c.label}
                  </span>
                  <a
                    href={c.href}
                    {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="font-code text-xs text-c-secondary hover:text-white transition-colors"
                  >
                    {c.value}
                  </a>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Certifications & Achievements */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8"
            >
              <h4 className="font-code text-xs text-accent tracking-widest uppercase mb-5">
                Certifications
              </h4>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.07, duration: 0.5 }}
                    className="flex gap-3 items-start p-3 rounded-lg border border-c-border bg-c-surface/50 hover:border-accent/20 transition-colors"
                  >
                    <span className="text-accent text-xs mt-0.5 shrink-0">✦</span>
                    <div>
                      <div className="text-white text-sm font-medium">{cert.title}</div>
                      <div className="font-code text-xs text-c-muted mt-0.5">{cert.issuer}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <h4 className="font-code text-xs text-accent tracking-widest uppercase mb-5">
                Achievements
              </h4>
              <ul className="space-y-3">
                {achievements.map((a, i) => (
                  <li key={i} className="flex gap-3 text-c-secondary text-sm leading-relaxed">
                    <span className="text-accent shrink-0 mt-0.5 text-xs">▸</span>
                    {a}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-c-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-code text-xs text-c-muted">
            © {new Date().getFullYear()}{' '}
            <span className="text-accent">Andrii Kovalskyi</span>. Built with React 19 + TypeScript +
            Framer Motion.
          </span>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-code text-xs text-c-muted">
              The Hague, Netherlands
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
