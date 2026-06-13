import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const ACCENT = '#c8ff00'

/** Soft round sprite so points render as glowing dots rather than hard squares. */
function makeDotTexture() {
  const size = 64
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = size
  const ctx = canvas.getContext('2d')!
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  g.addColorStop(0, 'rgba(255,255,255,1)')
  g.addColorStop(0.35, 'rgba(255,255,255,0.85)')
  g.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, size, size)
  const tex = new THREE.CanvasTexture(canvas)
  tex.needsUpdate = true
  return tex
}

type FieldProps = {
  density: number
  reducedMotion: boolean
}

/** Undulating grid of points that ripples like a wave and parallaxes toward the cursor. */
function WaveField({ density, reducedMotion }: FieldProps) {
  const SEP = 0.6
  const AMOUNT = density
  const target = useMemo(() => ({ rx: 0, rz: 0 }), [])
  const pointer = useRef({ x: 0, y: 0 })

  const points = useMemo(() => {
    const count = AMOUNT * AMOUNT
    const positions = new Float32Array(count * 3)
    let i = 0
    for (let ix = 0; ix < AMOUNT; ix++) {
      for (let iz = 0; iz < AMOUNT; iz++) {
        positions[i] = ix * SEP - (AMOUNT * SEP) / 2
        positions[i + 1] = 0
        positions[i + 2] = iz * SEP - (AMOUNT * SEP) / 2
        i += 3
      }
    }
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const texture = makeDotTexture()
    const material = new THREE.PointsMaterial({
      color: new THREE.Color(ACCENT),
      size: 0.14,
      map: texture,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    })

    const obj = new THREE.Points(geometry, material)
    obj.rotation.x = -Math.PI / 3.1
    return obj
  }, [AMOUNT])

  useEffect(() => {
    if (reducedMotion) return
    const onMove = (e: MouseEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [reducedMotion])

  useEffect(() => {
    return () => {
      points.geometry.dispose()
      const mat = points.material as THREE.PointsMaterial
      mat.map?.dispose()
      mat.dispose()
    }
  }, [points])

  useFrame((state) => {
    const positions = points.geometry.attributes.position.array as Float32Array
    const t = reducedMotion ? 1.4 : state.clock.elapsedTime
    let i = 0
    for (let ix = 0; ix < AMOUNT; ix++) {
      for (let iz = 0; iz < AMOUNT; iz++) {
        positions[i + 1] =
          Math.sin((ix + t) * 0.35) * 0.55 + Math.sin((iz + t) * 0.5) * 0.55
        i += 3
      }
    }
    points.geometry.attributes.position.needsUpdate = true

    if (!reducedMotion) {
      target.rx = -Math.PI / 3.1 + pointer.current.y * 0.12
      target.rz = -pointer.current.x * 0.12
      points.rotation.x += (target.rx - points.rotation.x) * 0.04
      points.rotation.z += (target.rz - points.rotation.z) * 0.04
    }
  })

  return <primitive object={points} />
}

export default function HeroCanvas() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [density, setDensity] = useState(64)

  useEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)')
    const coarse = window.matchMedia('(max-width: 768px), (pointer: coarse)')
    setReducedMotion(rm.matches)
    setDensity(coarse.matches ? 38 : 64)
    const onRm = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    rm.addEventListener('change', onRm)
    return () => rm.removeEventListener('change', onRm)
  }, [])

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const frameloop = reducedMotion ? 'demand' : visible ? 'always' : 'never'

  return (
    <div ref={wrapRef} className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        frameloop={frameloop}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        camera={{ position: [0, 6, 18], fov: 60 }}
      >
        <fog attach="fog" args={['#080808', 10, 32]} />
        <WaveField density={density} reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  )
}
