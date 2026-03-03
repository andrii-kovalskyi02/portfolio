import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const [hovered, setHovered] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [visible, setVisible] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const ringX = useSpring(mouseX, { stiffness: 180, damping: 18, mass: 0.4 })
  const ringY = useSpring(mouseY, { stiffness: 180, damping: 18, mass: 0.4 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!visible) setVisible(true)
      const el = e.target as Element
      setHovered(!!el.closest('a, button, [data-hover]'))
    }
    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.documentElement.addEventListener('mouseleave', onLeave)
    document.documentElement.addEventListener('mouseenter', onEnter)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.documentElement.removeEventListener('mouseenter', onEnter)
    }
  }, [mouseX, mouseY, visible])

  return (
    <>
      {/* Dot — instant */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
        animate={{ opacity: visible ? 1 : 0 }}
      >
        <motion.div
          className="rounded-full bg-accent"
          animate={{
            width: clicking ? 4 : 7,
            height: clicking ? 4 : 7,
            opacity: hovered ? 0 : 1,
          }}
          transition={{ duration: 0.12 }}
        />
      </motion.div>

      {/* Ring — spring lag */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          border: '1.5px solid',
        }}
        animate={{
          width: hovered ? 64 : clicking ? 26 : 40,
          height: hovered ? 64 : clicking ? 26 : 40,
          borderColor: hovered ? '#c8ff00' : 'rgba(200,255,0,0.4)',
          backgroundColor: hovered ? 'rgba(200,255,0,0.08)' : 'transparent',
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 220, damping: 22 }}
      />

      {/* Trailing glow on hover */}
      {hovered && (
        <motion.div
          className="fixed top-0 left-0 z-[9997] pointer-events-none rounded-full"
          style={{
            x: ringX,
            y: ringY,
            translateX: '-50%',
            translateY: '-50%',
            width: 80,
            height: 80,
            background: 'radial-gradient(circle, rgba(200,255,0,0.15) 0%, transparent 70%)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </>
  )
}
