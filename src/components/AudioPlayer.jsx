import { useState, useRef, useCallback, useEffect } from 'react'
import { Music, SkipForward, Play, Pause } from 'lucide-react'

export default function AudioPlayer({ songs }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)
  const currentSong = songs[currentIndex]

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => {})
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying, currentIndex])

  const togglePlay = useCallback(() => {
    setIsPlaying(prev => !prev)
  }, [])

  const switchSong = useCallback(() => {
    const nextIndex = (currentIndex + 1) % songs.length
    setCurrentIndex(nextIndex)
    if (audioRef.current) {
      audioRef.current.currentTime = 0
    }
  }, [currentIndex, songs.length])

  const handleEnded = useCallback(() => {
    const nextIndex = (currentIndex + 1) % songs.length
    setCurrentIndex(nextIndex)
  }, [currentIndex, songs.length])

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2">
      <audio
        ref={audioRef}
        src={currentSong.src}
        onEnded={handleEnded}
        loop={false}
        preload="auto"
      />
      <button
        onClick={togglePlay}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-rose-600/20 backdrop-blur-md border border-rose-500/30 text-rose-300 hover:bg-rose-600/30 transition-all duration-300 text-sm"
      >
        <Music size={16} className="animate-pulse" />
        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
      </button>
      <button
        onClick={switchSong}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-rose-600/20 backdrop-blur-md border border-rose-500/30 text-rose-300 hover:bg-rose-600/30 transition-all duration-300 text-sm"
        title="بدل الأغنية"
      >
        <SkipForward size={16} />
        <span className="text-xs">{currentSong.label}</span>
      </button>
    </div>
  )
}
