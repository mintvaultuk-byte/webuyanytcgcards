import { useEffect, useRef } from 'react'
import { Truck, Clock, Eye, Shield } from 'lucide-react'
import gsap from 'gsap'

const benefits = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Prepaid label on $25+',
  },
  {
    icon: Clock,
    title: 'Paid in 48hrs',
    description: 'Fast payment guarantee',
  },
  {
    icon: Eye,
    title: 'No Hidden Fees',
    description: 'What you see is what you get',
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'Every shipment covered',
  },
]

export default function WhySellSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const cards = section.querySelectorAll('.shimmer-border')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              cards,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out',
              }
            )
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 bg-[#030014]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Sell To Us
          </h2>
          <p className="text-white/50 max-w-lg mx-auto">
            The safest, fastest way to sell your trading cards
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="shimmer-border p-8 text-center group hover:scale-[1.02] transition-transform"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#ffcc00]/10 mb-5 group-hover:bg-[#ffcc00]/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-[#ffcc00]" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-2">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
