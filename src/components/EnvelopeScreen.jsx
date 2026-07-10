import { useState } from 'react'
import { Heart, Mail } from 'lucide-react'

export default function EnvelopeScreen({ config, onOpen }) {
  const [opened, setOpened] = useState(false)

  const handleOpen = () => {
    setOpened(true)
    setTimeout(onOpen, 2000)
  }

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-gradient-to-b from-[#0a0a0a] via-[#1a0a0a] to-[#0a0a0a] px-4">
      <div className="w-full max-w-lg text-center">
        {!opened ? (
          <button
            onClick={handleOpen}
            className="group cursor-pointer"
          >
            <div className="w-40 h-40 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-rose-700/20 rounded-2xl animate-glowPulse" />
              <div className="relative w-full h-full flex items-center justify-center">
                <Mail size={80} className="text-rose-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <p className="text-rose-300 text-lg font-medium mb-2">{config.from}</p>
            <p className="text-gray-400 text-sm">إضغطي عشان تفتحي الظرف 🤍</p>
          </button>
        ) : (
          <div className="animate-scaleIn">
            <Heart size={40} className="text-rose-500 mx-auto mb-6" fill="#e11d48" />
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed whitespace-pre-line">
              {config.message}
            </p>
            <div className="mt-6 flex justify-center gap-1">
              {[0,1,2].map(i => (
                <div key={i} className="w-2 h-2 rounded-full bg-rose-500 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
