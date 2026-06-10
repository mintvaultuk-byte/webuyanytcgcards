import { ArrowRight } from 'lucide-react'
import ScrambleText from '../components/effects/ScrambleText'

export default function FinalCTASection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#030014] to-[#0047ab]/20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-[#0047ab]/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline with scramble effect */}
        <ScrambleText
          text="Ready to Sell Your Cards?"
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
        />

        {/* Subtext */}
        <p className="text-lg text-white/60 mb-4">
          Join thousands of sellers who trust us with their collections.
        </p>
        <p className="text-lg text-white/60 mb-10">
          Free shipping, fast payment, zero hassle.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-[#ffcc00] text-[#030014] font-semibold rounded-full hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,204,0,0.4)] transition-all">
            Start Your Buylist
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 hover:border-white/30 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
