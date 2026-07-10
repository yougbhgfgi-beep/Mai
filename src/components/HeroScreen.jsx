import { Heart, ChevronDown, Sparkles } from 'lucide-react'
import Gallery from './Gallery'
import VideoPlayer from './VideoPlayer'
import Timer from './Timer'
import Milestones from './Milestones'
import Particles from './Particles'

export default function HeroScreen({ config }) {
  return (
    <div className="relative min-h-screen">
      <Particles />

      {/* Hero section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-950/10 to-[#0a0a0a]" />
        <div className="relative z-10 text-center max-w-2xl">
          <Sparkles size={24} className="text-rose-400 mx-auto mb-4 animate-pulse" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fadeIn">
            {config.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-2 animate-fadeIn">
            {config.subtitle}
          </p>
          <p className="text-rose-400/80 text-sm mb-12">{config.date}</p>
          <div className="flex items-center justify-center gap-2 text-rose-500 animate-bounce">
            <ChevronDown size={24} />
            <Heart size={16} fill="#e11d48" />
            <ChevronDown size={24} />
          </div>
        </div>
      </section>

      {/* Video */}
      <VideoPlayer src={config.video.src} poster={config.video.poster} />

      {/* Divider */}
      <div className="flex items-center justify-center gap-4 px-4 py-8">
        <div className="h-px flex-1 max-w-32 bg-gradient-to-l from-rose-500/30 to-transparent" />
        <Heart size={20} className="text-rose-500" fill="#e11d48" />
        <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-rose-500/30 to-transparent" />
      </div>

      {/* Gallery */}
      <Gallery images={config.gallery.images} />

      {/* Divider */}
      <div className="flex items-center justify-center gap-4 px-4 py-8">
        <div className="h-px flex-1 max-w-32 bg-gradient-to-l from-rose-500/30 to-transparent" />
        <Heart size={20} className="text-rose-500" fill="#e11d48" />
        <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-rose-500/30 to-transparent" />
      </div>

      {/* Timer */}
      <Timer startDate={config.timer.startDate} />

      {/* Divider */}
      <div className="flex items-center justify-center gap-4 px-4 py-8">
        <div className="h-px flex-1 max-w-32 bg-gradient-to-l from-rose-500/30 to-transparent" />
        <Heart size={20} className="text-rose-500" fill="#e11d48" />
        <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-rose-500/30 to-transparent" />
      </div>

      {/* Milestones */}
      <Milestones milestones={config.milestones} />

      {/* Ending spacer */}
      <div className="h-16" />
    </div>
  )
}
