import { useRef, useState } from 'react'
import { Play, Heart } from 'lucide-react'

export default function VideoPlayer({ src, poster }) {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <section className="py-16 px-4" id="video">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Heart size={28} className="inline-block text-rose-500 mb-2" fill="#e11d48" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">قصتنا 🎬</h2>
          <p className="text-gray-400">فيديو بسيط مني ليكي</p>
        </div>
        <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-rose-900/30 group">
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            className="w-full aspect-video object-cover"
            controls={isPlaying}
            onEnded={() => setIsPlaying(false)}
            playsInline
          />
          {!isPlaying && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-rose-500/80 flex items-center justify-center animate-glowPulse">
                <Play size={36} className="text-white ml-1" fill="white" />
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
