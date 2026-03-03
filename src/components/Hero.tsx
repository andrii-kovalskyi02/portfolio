import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { stats } from '../data/resume'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-c-bg"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Accent glows */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-accent/[0.06] blur-[100px] pointer-events-none" />

      {/* Large background wordmark */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 flex items-center pointer-events-none overflow-hidden select-none"
        aria-hidden
      >
        <span
          className="font-display font-bold whitespace-nowrap text-white/[0.018] leading-none"
          style={{ fontSize: 'clamp(100px, 22vw, 260px)' }}
        >
          ENGINEER
        </span>
      </motion.div>

      {/* Orbiting rings (decorative) */}
      <div className="absolute right-8 md:right-24 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          className="w-72 h-72 rounded-full border border-c-border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
          className="w-48 h-48 rounded-full border border-accent/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="w-24 h-24 rounded-full border border-accent/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent" />
        </motion.div>
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent" />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full pt-28 pb-16"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Status badge */}
          <motion.div variants={item} className="flex items-center gap-3 mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
            </span>
            <span className="font-code text-xs text-accent tracking-widest uppercase">
              Available for new opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={item}>
            <h1 className="font-display font-bold leading-[0.92] tracking-tight">
              <span
                className="block text-white"
                style={{ fontSize: 'clamp(52px, 10vw, 128px)' }}
              >
                Andrii
              </span>
              <span
                className="block text-white"
                style={{ fontSize: 'clamp(52px, 10vw, 128px)' }}
              >
                Koval
                <span className="text-gradient">skyi</span>
              </span>
            </h1>
          </motion.div>

          {/* Role line */}
          <motion.div variants={item} className="flex items-center gap-4 mt-5 mb-7">
            <div className="h-px w-10 bg-accent" />
            <span className="font-code text-accent text-base md:text-lg tracking-widest uppercase">
              Software Engineer
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-c-secondary text-base md:text-lg leading-relaxed max-w-xl mb-10"
          >
            Building end-to-end web applications with{' '}
            <span className="text-white font-medium">TypeScript</span>,{' '}
            <span className="text-white font-medium">React</span>, and{' '}
            <span className="text-white font-medium">PHP</span>. Based in{' '}
            <span className="text-white">The Hague, Netherlands 🇳🇱</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mb-16">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-c-bg font-display font-semibold text-sm tracking-wide hover:bg-white transition-colors duration-300"
            >
              View Projects
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-display font-semibold text-sm tracking-wide hover:border-accent hover:text-accent transition-all duration-300"
            >
              Get in Touch
            </a>
            <a
              href="mailto:andrii.kovalskyi02@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-c-secondary font-code text-xs hover:text-accent transition-colors duration-200"
            >
              andrii.kovalskyi02@gmail.com
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-8 pt-8 border-t border-c-border"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display font-bold text-3xl md:text-4xl text-accent leading-none">
                  {s.value}
                </div>
                <div className="font-code text-xs text-c-muted mt-1.5 tracking-wide uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-code text-[10px] text-c-muted tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  )
}
