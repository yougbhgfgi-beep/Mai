import { useState, useEffect } from 'react'
import { Heart, Clock } from 'lucide-react'

function calcDiff(startDate) {
  const diff = Date.now() - new Date(startDate).getTime()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}

export default function Timer({ startDate }) {
  const [time, setTime] = useState(() => calcDiff(startDate))

  useEffect(() => {
    const id = setInterval(() => setTime(calcDiff(startDate)), 1000)
    return () => clearInterval(id)
  }, [startDate])

  const items = [
    { label: 'يوم', value: time.days },
    { label: 'ساعة', value: time.hours },
    { label: 'دقيقة', value: time.minutes },
    { label: 'ثانية', value: time.seconds },
  ]

  return (
    <section className="py-16 px-4" id="timer">
      <div className="max-w-3xl mx-auto text-center">
        <Clock size={28} className="inline-block text-rose-500 mb-2" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">من يوم ما بدأنا 🤍</h2>
        <p className="text-gray-400 mb-8">كل ثانية معاكي نعمة</p>
        <div className="grid grid-cols-4 gap-3">
          {items.map((item) => (
            <div key={item.label} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-3xl md:text-5xl font-bold text-rose-400 mb-1 tabular-nums">
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="text-sm text-gray-500">{item.label}</div>
            </div>
          ))}
        </div>
        <Heart size={20} className="inline-block text-rose-500 mt-6" fill="#e11d48" />
      </div>
    </section>
  )
}
