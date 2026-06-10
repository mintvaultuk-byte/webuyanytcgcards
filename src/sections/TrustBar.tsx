import { Truck, Clock, Shield, Headphones } from 'lucide-react'

const trustItems = [
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
    icon: Shield,
    title: 'Fully Insured',
    description: 'Every shipment covered',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: 'Real people, fast replies',
  },
]

export default function TrustBar() {
  return (
    <section className="relative py-8 bg-[#0a0a1a] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#ffcc00]/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-[#ffcc00]" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{item.title}</p>
                <p className="text-white/40 text-xs">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
