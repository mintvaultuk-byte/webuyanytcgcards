import Navigation from '../sections/Navigation'
import HeroSection from '../sections/HeroSection'
import ValuePropBar from '../sections/ValuePropBar'
import HotListSection from '../sections/HotListSection'
import ProcessSection from '../sections/ProcessSection'
import WhySellSection from '../sections/WhySellSection'
import TestimonialsSection from '../sections/TestimonialsSection'
import FinalCTASection from '../sections/FinalCTASection'
import TrustBar from '../sections/TrustBar'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030014]">
      <Navigation />
      <main>
        <HeroSection />
        <ValuePropBar />
        <HotListSection />
        <ProcessSection />
        <WhySellSection />
        <TestimonialsSection />
        <FinalCTASection />
        <TrustBar />
      </main>
      <Footer />
    </div>
  )
}
