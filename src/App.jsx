import { useState, useCallback } from 'react'
import config from './config'
import LoadingScreen from './components/LoadingScreen'
import LoginScreen from './components/LoginScreen'
import EnvelopeScreen from './components/EnvelopeScreen'
import HeroScreen from './components/HeroScreen'
import EndingScreen from './components/EndingScreen'
import AudioPlayer from './components/AudioPlayer'

export default function App() {
  const [phase, setPhase] = useState('loading')

  const handleLoadingFinish = useCallback(() => setPhase('login'), [])
  const handleLoginSuccess = useCallback(() => setPhase('envelope'), [])
  const handleEnvelopeOpen = useCallback(() => setPhase('main'), [])

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {phase === 'loading' && (
        <LoadingScreen
          text={config.loading.text}
          duration={config.loading.duration}
          onFinish={handleLoadingFinish}
        />
      )}

      {phase === 'login' && (
        <LoginScreen
          config={config.login}
          password={config.password}
          onSuccess={handleLoginSuccess}
        />
      )}

      {phase === 'envelope' && (
        <EnvelopeScreen
          config={config.envelope}
          onOpen={handleEnvelopeOpen}
        />
      )}

      {phase === 'main' && (
        <>
          <HeroScreen config={config} />
          <EndingScreen config={config.ending} />
          <AudioPlayer songs={config.songs} />

          <footer className="relative z-10 text-center py-8 px-4 border-t border-white/5">
            <p className="text-gray-400 text-sm">{config.footer.text}</p>
          </footer>
        </>
      )}
    </div>
  )
}
