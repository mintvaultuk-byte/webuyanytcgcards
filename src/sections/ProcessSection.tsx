import { useEffect, useRef } from 'react'
import { Search, Plus, Truck } from 'lucide-react'
import gsap from 'gsap'

const steps = [
  {
    number: '1',
    icon: Search,
    title: 'Search Your Cards',
    description:
      'Look up cards by name, set, or game. Our database covers Pokemon, MTG, Yu-Gi-Oh! and more.',
  },
  {
    number: '2',
    icon: Plus,
    title: 'Add to Buylist',
    description:
      'Select your cards, set quantities, and choose your condition. Watch your total add up in real time.',
  },
  {
    number: '3',
    icon: Truck,
    title: 'Ship for Free',
    description:
      'We email you a prepaid shipping label. Pack your cards, drop them off, and get paid within 48 hours.',
  },
]

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const cards = section.querySelectorAll('.step-card')
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
                stagger: 0.15,
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
            How It Works
          </h2>
          <p className="text-white/50 max-w-lg mx-auto">
            Three simple steps to turn your collection into cash
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="step-card glass-panel rounded-2xl p-8 text-center"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#ffcc00]/10 mb-6">
                <step.icon className="w-7 h-7 text-[#ffcc00]" />
              </div>

              {/* Step Number */}
              <div className="text-xs font-bold uppercase tracking-[0.15em] text-[#3b82f6] mb-3">
                Step {step.number}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-[#0047ab] text-white font-semibold rounded-full hover:bg-[#003d94] transition-all hover:scale-[1.02]">
            Get Started Now
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
