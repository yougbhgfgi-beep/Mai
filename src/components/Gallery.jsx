import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, Heart } from 'lucide-react'

export default function Gallery({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const open = (i) => setSelectedIndex(i)
  const close = () => setSelectedIndex(null)
  const prev = () => setSelectedIndex(prev => prev > 0 ? prev - 1 : images.length - 1)
  const next = () => setSelectedIndex(prev => prev < images.length - 1 ? prev + 1 : 0)

  return (
    <section className="py-16 px-4" id="gallery">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <Heart size={28} className="inline-block text-rose-500 mb-2" fill="#e11d48" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">ذكرياتنا 🤍</h2>
          <p className="text-gray-400">لحظات حلوة عشناها مع بعض</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => open(i)}
              className="group relative overflow-hidden rounded-xl aspect-square"
            >
              <img
                src={src}
                alt={`ذكرى ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <Heart size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={close}>
          <button onClick={close} className="absolute top-4 right-4 text-white/80 hover:text-white z-10">
            <X size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
          >
            <ChevronLeft size={36} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
          >
            <ChevronRight size={36} />
          </button>
          <img
            src={images[selectedIndex]}
            alt=""
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-4 text-white/60 text-sm">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  )
}
