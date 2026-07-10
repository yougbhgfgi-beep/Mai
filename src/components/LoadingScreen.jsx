import { useEffect, useState } from 'react'

export default function LoadingScreen({ text, duration, onFinish }) {
  const [progress, setProgress] = useState(0)
  const [dots, setDots] = useState('')

  useEffect(() => {
    const start = Date.now()
    const id = setInterval(() => {
      const elapsed = Date.now() - start
      const pct = Math.min((elapsed / duration) * 100, 100)
      setProgress(pct)
      setDots('.'.repeat(Math.floor(elapsed / 400) % 4))
      if (pct >= 100) {
        clearInterval(id)
        setTimeout(onFinish, 200)
      }
    }, 50)
    return () => clearInterval(id)
  }, [duration, onFinish])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#0a0a0a] via-[#1a0a0a] to-[#0a0a0a]">
      <div className="relative mb-8">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-rose-500 to-rose-700 animate-glowPulse flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-[#0a0a0a] flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-10 h-10 text-rose-500" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>
      </div>
      <p className="text-lg md:text-xl text-rose-200 mb-4 animate-pulse">
        {text}{dots}
      </p>
      <div className="w-48 h-1.5 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-rose-500 to-rose-300 transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
