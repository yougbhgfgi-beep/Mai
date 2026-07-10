import { Heart } from 'lucide-react'

export default function Milestones({ milestones }) {
  return (
    <section className="py-16 px-4" id="milestones">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <Heart size={28} className="inline-block text-rose-500 mb-2" fill="#e11d48" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">محطات حبنا 🚀</h2>
          <p className="text-gray-400">رحلة قصيرة بس مليانة حب</p>
        </div>
        <div className="relative">
          <div className="milestone-line hidden md:block" />
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div key={i} className={`relative flex items-start gap-4 md:gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="hidden md:flex flex-1 justify-end">
                  {i % 2 === 0 && (
                    <div className="text-right">
                      <div className="text-rose-400 text-sm mb-1">{m.date}</div>
                      <h3 className="text-xl font-bold text-white">{m.title}</h3>
                      <p className="text-gray-400 text-sm">{m.description}</p>
                    </div>
                  )}
                </div>
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-rose-600/30 border-2 border-rose-500 flex items-center justify-center">
                    <Heart size={16} className="text-rose-400" fill="#e11d48" />
                  </div>
                </div>
                <div className="flex-1 md:hidden">
                  <div className="text-rose-400 text-sm mb-1">{m.date}</div>
                  <h3 className="text-lg font-bold text-white">{m.title}</h3>
                  <p className="text-gray-400 text-sm">{m.description}</p>
                </div>
                <div className="hidden md:flex flex-1">
                  {i % 2 !== 0 && (
                    <div className="text-left">
                      <div className="text-rose-400 text-sm mb-1">{m.date}</div>
                      <h3 className="text-xl font-bold text-white">{m.title}</h3>
                      <p className="text-gray-400 text-sm">{m.description}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
