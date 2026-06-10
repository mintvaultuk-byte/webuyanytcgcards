import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'

const footerLinks = {
  buylist: {
    title: 'Buylist',
    links: [
      { label: 'Hot List', href: '#' },
      { label: 'Bulk Submission', href: '#' },
      { label: 'Price Checker', href: '#' },
      { label: 'Condition Guide', href: '#' },
    ],
  },
  support: {
    title: 'Support',
    links: [
      { label: 'How It Works', href: '#' },
      { label: 'FAQ', action: 'faq' },
      { label: 'Shipping Guide', href: '#' },
      { label: 'Contact Us', action: 'contact' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', action: 'about' },
      { label: 'Privacy Policy', action: 'privacy' },
      { label: 'Terms of Service', action: 'terms' },
      { label: 'Blog', href: '#' },
    ],
  },
  games: {
    title: 'Games',
    links: [
      { label: 'Pokemon', href: '#' },
      { label: 'Magic: The Gathering', href: '#' },
      { label: 'Yu-Gi-Oh!', href: '#' },
      { label: 'One Piece', href: '#' },
    ],
  },
}

const dialogContent: Record<string, { title: string; description: string }> = {
  faq: {
    title: 'Frequently Asked Questions',
    description:
      'How do I sell my cards? Simply search for your cards, add them to your buylist, and ship them to us using our free prepaid label. We pay within 48 hours of receiving your cards. What condition do my cards need to be in? We accept cards in Near Mint, Light Play, Moderate Play, and Heavy Play conditions. Prices are adjusted based on condition.',
  },
  contact: {
    title: 'Contact Us',
    description:
      'Email: support@webuyanytcgcards.com\nPhone: 1-800-TCG-BUYL\nHours: Monday-Friday 9AM-6PM EST\nWe typically respond within 24 hours.',
  },
  about: {
    title: 'About Us',
    description:
      'We Buy Any TCG Cards is the premier buylist platform for trading card game enthusiasts. Since 2020, we have paid out over $2.4M to sellers nationwide. Our mission is to make selling your collection as easy, fast, and fair as possible.',
  },
  privacy: {
    title: 'Privacy Policy',
    description:
      'We collect only the information necessary to process your buylist submissions and payments. Your personal data is never sold to third parties. We use industry-standard encryption to protect your information.',
  },
  terms: {
    title: 'Terms of Service',
    description:
      'By using our service, you agree to our buylist terms. All cards must be authentic and accurately described. We reserve the right to reject counterfeit or misrepresented cards. Payments are processed within 48 hours of card verification.',
  },
}

export default function Footer() {
  const [activeDialog, setActiveDialog] = useState<string | null>(null)

  return (
    <>
      <footer className="relative bg-[#0a0a1a] border-t border-white/[0.05] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h3 className="text-white font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      {'action' in link ? (
                        <button
                          onClick={() => setActiveDialog(link.action!)}
                          className="text-white/40 text-sm hover:text-white transition-colors"
                        >
                          {link.label}
                        </button>
                      ) : (
                        <a
                          href={link.href}
                          className="text-white/40 text-sm hover:text-white transition-colors"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-white/[0.05] pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/logo.png"
                  alt="We Buy Any TCG Cards"
                  className="h-8 w-auto"
                />
                <p className="text-white/30 text-xs">
                  TCG Marketplace is not affiliated with Pokemon, Wizards of the
                  Coast, Konami, Bandai, or Disney. All trademarks are property of
                  their respective owners.
                </p>
              </div>
              <p className="text-white/30 text-xs">
                © 2026 TCG Marketplace. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Dialogs */}
      <Dialog open={!!activeDialog} onOpenChange={() => setActiveDialog(null)}>
        <DialogContent className="bg-[#0a0a1a] border-white/10 text-white max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              {activeDialog ? dialogContent[activeDialog]?.title : ''}
            </DialogTitle>
            <DialogDescription className="text-white/60 whitespace-pre-line pt-4 leading-relaxed">
              {activeDialog ? dialogContent[activeDialog]?.description : ''}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}
