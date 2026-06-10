import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'

const hotCards = [
  {
    id: 'brs',
    code: 'BRS',
    name: 'Charizard VMAX',
    set: 'Brilliant Stars',
    price: 45.00,
    marketPrice: 72.50,
    image: '/assets/card-charizard-vmax.jpg',
    color1: '#ff6b35',
    color2: '#ffcc00',
  },
  {
    id: 'evs',
    code: 'EVS',
    name: 'Umbreon VMAX',
    set: 'Evolving Skies',
    price: 125.00,
    marketPrice: 189.00,
    image: '/assets/card-umbreon-vmax.jpg',
    color1: '#4a3f8c',
    color2: '#2d1b69',
  },
  {
    id: 'cpa',
    code: 'CPA',
    name: 'Charizard V',
    set: "Champion's Path",
    price: 32.00,
    marketPrice: 48.00,
    image: '/assets/card-charizard-v.jpg',
    color1: '#ff6b35',
    color2: '#ff4500',
  },
  {
    id: 'lea',
    code: 'LEA',
    name: 'Black Lotus',
    set: 'Alpha',
    price: 8200.00,
    marketPrice: 12500.00,
    image: '/assets/card-black-lotus.jpg',
    color1: '#1a1a2e',
    color2: '#16213e',
  },
  {
    id: 'lob-be',
    code: 'LOB',
    name: 'Blue-Eyes White Dragon',
    set: 'Legend of Blue-Eyes',
    price: 78.00,
    marketPrice: 120.00,
    image: '/assets/card-blue-eyes.jpg',
    color1: '#4a90d9',
    color2: '#a8d0f0',
  },
  {
    id: 'lob-ex',
    code: 'LOB',
    name: 'Exodia the Forbidden One',
    set: 'Legend of Blue-Eyes',
    price: 120.00,
    marketPrice: 195.00,
    image: '/assets/card-exodia.jpg',
    color1: '#4a1a6b',
    color2: '#8b0000',
  },
  {
    id: 'op01',
    code: 'OP01',
    name: 'Monkey D. Luffy (AA)',
    set: 'Romance Dawn',
    price: 225.00,
    marketPrice: 350.00,
    image: '/assets/card-luffy.jpg',
    color1: '#ff6b35',
    color2: '#ff4500',
  },
  {
    id: 'bt04',
    code: 'BT04',
    name: 'Omnimon (Alt Art)',
    set: 'Great Legend',
    price: 92.00,
    marketPrice: 145.00,
    image: '/assets/card-omnimon.jpg',
    color1: '#c0c0c0',
    color2: '#4a90d9',
  },
]

function HolographicCard({ card }: { card: typeof hotCards[0] }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1
    setTilt({ x: y * -15, y: x * 15 })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <div
      ref={cardRef}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1, 1, 1)`,
        transition: 'transform 0.15s ease-out',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={card.image}
          alt={card.name}
          className="w-full h-full object-cover"
        />
        {/* Code Badge */}
        <span className="absolute top-3 right-3 px-2 py-1 text-[10px] font-bold bg-black/70 text-white rounded backdrop-blur-sm">
          {card.code}
        </span>
        {/* Holographic overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${card.color1}40, ${card.color2}40, transparent)`,
            mixBlendMode: 'color-dodge',
          }}
        />
      </div>

      {/* Card Info */}
      <div className="p-4 bg-[#0a0a1a] border-t border-white/[0.05]">
        <p className="text-xs text-white/50 mb-1">{card.set}</p>
        <h3 className="text-sm font-bold text-white mb-3 truncate">{card.name}</h3>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[#ffcc00] font-bold">£{card.price.toFixed(2)}</span>
          <span className="text-white/30 text-xs line-through">£{card.marketPrice.toFixed(2)}</span>
        </div>
        <button className="w-full py-2.5 bg-[#0047ab] text-white text-sm font-medium rounded-lg hover:bg-[#003d94] transition-colors">
          Add to Buylist
        </button>
      </div>
    </div>
  )
}

export default function HotListSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll('.group')
    if (!cards) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              cards,
              { opacity: 0, y: 40 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power2.out',
              }
            )
            observer.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 bg-[#030014]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Hot List — Cards We Need Now
            </h2>
            <p className="text-white/50">
              Top payouts for the most wanted cards across all games
            </p>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-2 text-[#3b82f6] hover:text-[#ffcc00] transition-colors"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {hotCards.map((card) => (
            <HolographicCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}
