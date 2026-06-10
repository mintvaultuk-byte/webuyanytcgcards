import { Layers, DollarSign, Clock, Star } from 'lucide-react'

const stats = [
  { icon: Layers, value: '12,000+', label: 'cards bought' },
  { icon: DollarSign, value: '£2.4M+', label: 'paid out' },
  { icon: Clock, value: '48hr', label: 'payment' },
  { icon: Star, value: '4.9/5', label: 'seller rating' },
]

export default function ValuePropBar() {
  return (
    <section className="relative z-10 bg-[#030014] border-y border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.05]">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 py-6 px-4"
            >
              <stat.icon className="w-5 h-5 text-[#ffcc00]" />
              <div className="text-center">
                <span className="text-white font-bold">{stat.value}</span>
                <span className="text-white/50 text-sm ml-1.5">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
