import { useState } from 'react'
import { Heart, ArrowLeft, Lock } from 'lucide-react'

export default function LoginScreen({ config, password, onSuccess }) {
  const [code, setCode] = useState('')
  const [error, setError] = useState(false)
  const [shake, setShake] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (code === password) {
      onSuccess()
    } else {
      setError(true)
      setShake(true)
      setTimeout(() => setShake(false), 500)
      setCode('')
    }
  }

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-gradient-to-b from-[#0a0a0a] via-[#1a0a0a] to-[#0a0a0a] px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-500 to-rose-700 mx-auto mb-6 flex items-center justify-center animate-glowPulse">
            <Lock size={32} className="text-white" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {config.title}
          </h1>
          <p className="text-gray-400 text-sm">{config.subtitle}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="password"
              value={code}
              onChange={(e) => { setCode(e.target.value); setError(false) }}
              placeholder={config.placeholder}
              className={`w-full px-4 py-3.5 text-center text-lg tracking-widest rounded-xl bg-white/5 border ${error ? 'border-rose-500' : 'border-white/20'} text-white placeholder-gray-600 focus:outline-none focus:border-rose-400 transition-all duration-300 ${shake ? 'animate-shake' : ''}`}
              autoFocus
              maxLength={4}
            />
          </div>
          {error && (
            <p className="text-rose-400 text-sm text-center animate-fadeIn">{config.errorText}</p>
          )}
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 text-white font-semibold hover:from-rose-500 hover:to-rose-400 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-rose-900/30"
          >
            {config.buttonText}
            <ArrowLeft size={18} />
          </button>
        </form>
        <div className="mt-8 text-center">
          <Heart size={16} className="inline-block text-rose-500/50" />
        </div>
      </div>

    </div>
  )
}
