import { useEffect, useState } from 'react'

function randomBetween(min, max) {
  return Math.random() * (max - min) + min
}

export default function Particles() {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    const id = setInterval(() => {
      setHearts(prev => [
        ...prev.slice(-15),
        {
          id: Date.now() + Math.random(),
          x: randomBetween(5, 95),
          size: randomBetween(10, 24),
          duration: randomBetween(3, 6),
          delay: randomBetween(0, 1),
        },
      ])
    }, 400)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="heart-particle"
          style={{
            left: `${h.x}%`,
            bottom: '-5%',
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
          }}
        >
          🤍
        </div>
      ))}
    </div>
  )
}
