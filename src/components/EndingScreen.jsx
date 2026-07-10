import { Heart } from 'lucide-react'

export default function EndingScreen({ config }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-rose-950/20 to-[#0a0a0a]" />
      <div className="relative z-10 text-center max-w-lg">
        <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-rose-500 to-rose-700 animate-glowPulse flex items-center justify-center">
          <Heart size={44} className="text-white" fill="white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fadeIn">
          {config.title}
        </h2>
        <p className="text-rose-300 text-lg mb-6">{config.subtitle}</p>
        <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
          {config.message}
        </p>
        <div className="mt-10 flex justify-center gap-2">
          {['🤍', '💕', '🤍', '💕', '🤍'].map((e, i) => (
            <span key={i} className="text-2xl animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
              {e}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
