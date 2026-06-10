import { useEffect, useRef } from 'react'
import { Star } from 'lucide-react'
import gsap from 'gsap'

const testimonials = [
  {
    quote:
      'I had 500 cards sitting in a box for years. Got $1,247 in 3 days. The process was incredibly smooth.',
    name: 'Jake M.',
    game: 'Pokemon',
    amount: '£1,247',
    rating: 5,
  },
  {
    quote:
      'Finally a company that does not scam you on condition. Fair prices and honest grading. Highly recommend!',
    name: 'Sarah K.',
    game: 'Magic: The Gathering',
    amount: '£843',
    rating: 5,
  },
  {
    quote:
      'The buylist tool made it so easy. Search, add, ship. Done. Already sent my second batch.',
    name: 'Mike T.',
    game: 'Yu-Gi-Oh!',
    amount: '£2,156',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const cards = section.querySelectorAll('.testimonial-card')
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
            What Sellers Say
          </h2>
          <p className="text-white/50">
            Trusted by thousands of collectors nationwide
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card glass-panel rounded-2xl p-8"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#ffcc00] text-[#ffcc00]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-white/40 text-xs">{testimonial.game}</p>
                </div>
                <span className="text-[#22c55e] font-bold text-sm bg-[#22c55e]/10 px-3 py-1 rounded-full">
                  {testimonial.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
