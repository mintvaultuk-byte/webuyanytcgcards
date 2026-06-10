import { useState } from 'react'
import { Search, ShoppingCart, User, ChevronDown } from 'lucide-react'

const gameCategories = [
  { name: 'Pokemon', hasDropdown: true },
  { name: 'Yu-Gi-Oh!', hasDropdown: true },
  { name: 'Magic: The Gathering', hasDropdown: true },
  { name: 'One Piece', hasDropdown: true },
  { name: 'Digimon', hasDropdown: true },
  { name: 'Flesh and Blood', hasDropdown: true },
  { name: 'Lorcana', hasDropdown: true },
]

export default function Navigation() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main Nav */}
      <div className="glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <img
                src="/assets/logo.png"
                alt="We Buy Any TCG Cards"
                className="h-10 w-auto"
              />
            </a>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search cards, sets, games..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-[#ffcc00]/50 focus:ring-1 focus:ring-[#ffcc00]/30 text-sm transition-all"
                />
                <button className="absolute right-1.5 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-[#0047ab] text-white text-sm font-medium rounded-full hover:bg-[#003d94] transition-colors">
                  Search
                </button>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button className="hidden sm:flex items-center gap-2 px-3 py-2 text-white/70 hover:text-white transition-colors">
                <ShoppingCart className="w-5 h-5" />
                <span className="text-sm">Cart</span>
              </button>
              <button className="hidden sm:flex items-center gap-2 px-3 py-2 text-white/70 hover:text-white transition-colors">
                <User className="w-5 h-5" />
                <span className="text-sm">Sign In</span>
              </button>
              <button className="px-5 py-2 bg-[#ffcc00] text-[#030014] font-semibold text-sm rounded-full hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,204,0,0.3)] transition-all">
                BUYLIST
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Nav */}
      <div className="bg-[#0a0a1a]/95 backdrop-blur-xl border-b border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-hide">
            {gameCategories.map((cat) => (
              <button
                key={cat.name}
                className="flex items-center gap-1 px-3 py-1.5 text-sm text-white/60 hover:text-white transition-colors whitespace-nowrap"
              >
                {cat.name}
                {cat.hasDropdown && <ChevronDown className="w-3 h-3" />}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
