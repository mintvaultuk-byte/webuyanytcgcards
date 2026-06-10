import { ArrowRight } from 'lucide-react'
import TradingCardSpotlight from '../components/effects/TradingCardSpotlight'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#030014]">
      {/* Three.js Background */}
      <TradingCardSpotlight />

      {/* Gradient Overlay for blending */}
      <div
        className="absolute inset-0 pointer-events-none hidden md:block"
        style={{
          background: 'linear-gradient(to right, #030014 30%, transparent 70%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffcc00] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffcc00]" />
            </span>
            <span className="text-sm text-white/70">
              Over £2.4M paid to sellers
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-[-0.02em] mb-6">
            Turn Your Cards{' '}
            <span className="text-[#ffcc00]">Into Cash</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/60 leading-relaxed mb-8 max-w-lg">
            We buy Pokemon, Magic: The Gathering, Yu-Gi-Oh! and more. Get paid in 48 hours with free shipping.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button className="group inline-flex items-center gap-2 px-6 py-3.5 bg-[#ffcc00] text-[#030014] font-semibold rounded-full hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,204,0,0.3)] transition-all">
              Start Your Buylist
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 hover:border-white/30 transition-all">
              Check Prices
            </button>
          </div>
        </div>

        {/* Floating Card Previews - Desktop only */}
        <div className="hidden lg:block absolute right-[8%] top-1/2 -translate-y-1/2 z-20">
          <div className="relative w-[320px] h-[400px]">
            {/* Card 1 - Charizard */}
            <div
              className="absolute top-0 right-0 w-[180px] rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/10"
              style={{ animation: 'float 4s ease-in-out infinite' }}
            >
              <div className="relative">
                <span className="absolute top-2 right-2 px-2 py-0.5 text-[10px] font-bold bg-black/60 text-white rounded">
                  BRS
                </span>
                <img
                  src="/assets/card-charizard-vmax.jpg"
                  alt="Charizard VMAX"
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="p-2.5 bg-[#0a0a1a]">
                  <p className="text-xs text-white/60">Brilliant Stars</p>
                  <p className="text-sm font-bold text-white">Charizard VMAX</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[#ffcc00] font-bold text-sm">£45.00</span>
                    <span className="text-white/30 text-xs line-through">£72.50</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Umbreon */}
            <div
              className="absolute top-[60px] right-[140px] w-[160px] rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/10"
              style={{ animation: 'float 4s ease-in-out infinite 0.5s' }}
            >
              <div className="relative">
                <span className="absolute top-2 right-2 px-2 py-0.5 text-[10px] font-bold bg-black/60 text-white rounded">
                  EVS
                </span>
                <img
                  src="/assets/card-umbreon-vmax.jpg"
                  alt="Umbreon VMAX"
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="p-2.5 bg-[#0a0a1a]">
                  <p className="text-xs text-white/60">Evolving Skies</p>
                  <p className="text-sm font-bold text-white">Umbreon VMAX</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[#ffcc00] font-bold text-sm">£125.00</span>
                    <span className="text-white/30 text-xs line-through">£189.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Black Lotus */}
            <div
              className="absolute top-[180px] right-[40px] w-[150px] rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/10"
              style={{ animation: 'float 4s ease-in-out infinite 1s' }}
            >
              <div className="relative">
                <span className="absolute top-2 right-2 px-2 py-0.5 text-[10px] font-bold bg-black/60 text-white rounded">
                  LEA
                </span>
                <img
                  src="/assets/card-black-lotus.jpg"
                  alt="Black Lotus"
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="p-2.5 bg-[#0a0a1a]">
                  <p className="text-xs text-white/60">Alpha</p>
                  <p className="text-sm font-bold text-white">Black Lotus</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[#ffcc00] font-bold text-sm">£8200</span>
                    <span className="text-white/30 text-xs line-through">£12500</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
