import { useEffect, useRef } from 'react'

export default function BackgroundCanvas() {
  const canvasRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0

    const cellSize = 45
    const dots = []

    const initCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height

      dots.length = 0
      const cols = Math.ceil(width / cellSize) + 2
      const rows = Math.ceil(height / cellSize) + 2

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({
            x: i * cellSize,
            y: j * cellSize,
            opacity: 0.03 + Math.random() * 0.05,
            targetOpacity: 0.03,
            speed: 0.002,
            baseOpacity: 0.03,
          })
        }
      }
    }

    const drawDots = () => {
      ctx.clearRect(0, 0, width, height)

      for (const dot of dots) {
        if (Math.abs(dot.opacity - dot.targetOpacity) < 0.01) {
          if (Math.random() > 0.99) {
            dot.targetOpacity = 0.3 + Math.random() * 0.4
            dot.speed = 0.01 + Math.random() * 0.02
          } else {
            dot.targetOpacity = dot.baseOpacity + Math.random() * 0.02
            dot.speed = 0.002 + Math.random() * 0.003
          }
        }

        if (dot.opacity < dot.targetOpacity) dot.opacity += dot.speed
        else dot.opacity -= dot.speed

        ctx.fillStyle = `rgba(255, 255, 255, ${dot.opacity})`
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, 1, 0, Math.PI * 2)
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(drawDots)
    }

    initCanvas()
    drawDots()

    const onResize = () => initCanvas()
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div className="fixed inset-0 w-full h-screen pointer-events-none z-0 [mask-image:radial-gradient(100%_100%_at_50%_0%,black_10%,transparent_100%)] -webkit-[mask-image:radial-gradient(100%_100%_at_50%_0%,black_10%,transparent_100%)]">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}

