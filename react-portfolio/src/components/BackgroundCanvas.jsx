import { useEffect, useRef, useState } from 'react'
import { useTheme } from '../context/ThemeContext.jsx'

export default function BackgroundCanvas() {
  const canvasRef = useRef(null)
  const rafRef = useRef(null)
  const [scrollOpacity, setScrollOpacity] = useState(0)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0

    const cellSize = 16
    const squareSize = 5
    const squares = []

    const initCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height

      squares.length = 0
      const cols = Math.ceil(width / cellSize) + 2
      const rows = Math.ceil(height / cellSize) + 2

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          squares.push({
            x: i * cellSize,
            y: j * cellSize,
            opacity: 0.04 + Math.random() * 0.06,
            targetOpacity: 0.05,
            speed: 0.002,
            baseOpacity: 0.03 + Math.random() * 0.05,
            blinkChance: 0.012,
          })
        }
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (const sq of squares) {
        if (Math.abs(sq.opacity - sq.targetOpacity) < 0.006) {
          if (Math.random() < sq.blinkChance) {
            sq.targetOpacity = 0.25 + Math.random() * 0.45
            sq.speed = 0.012 + Math.random() * 0.018
          } else {
            sq.targetOpacity = sq.baseOpacity + (Math.random() - 0.5) * 0.03
            sq.speed = 0.0015 + Math.random() * 0.002
          }
        }

        if (sq.opacity < sq.targetOpacity) sq.opacity = Math.min(sq.targetOpacity, sq.opacity + sq.speed)
        else sq.opacity = Math.max(sq.targetOpacity, sq.opacity - sq.speed * 0.6)

        const fadeY = Math.max(0, 1 - sq.y / (height * 0.5))
        const alpha = Math.min(1, sq.opacity * fadeY)
        const isLight = document.documentElement.classList.contains('dark') === false
        ctx.fillStyle = isLight ? `rgba(0, 0, 0, ${alpha * 0.4})` : `rgba(255, 255, 255, ${alpha})`
        ctx.fillRect(sq.x, sq.y, squareSize, squareSize)
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    initCanvas()
    draw()

    const onResize = () => initCanvas()
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const fadeStart = 0
      const fadeEnd = 500
      const opacity = Math.min(1, Math.max(0, (scrollY - fadeStart) / fadeEnd))
      setScrollOpacity(opacity)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div
        className="fixed inset-0 w-full h-screen pointer-events-none z-0"
        style={{
          maskImage: 'linear-gradient(to bottom, black 0%, black 35%, transparent 70%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 35%, transparent 70%)',
        }}
      >
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
      <div
        className="fixed inset-0 w-full min-h-screen pointer-events-none z-[1] bg-white dark:bg-[#050505] transition-opacity duration-300"
        style={{ opacity: scrollOpacity }}
        aria-hidden="true"
      />
    </>
  )
}

