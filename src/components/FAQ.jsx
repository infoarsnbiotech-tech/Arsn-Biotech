import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal.jsx'

const faqs = [
  {
    q: 'Do you only build in React, or can you work with WordPress and Shopify too?',
    a: "All three. React for custom web apps, WordPress for content-heavy or CMS-driven sites, Shopify for stores. We recommend whichever your team can realistically maintain — and tell you why.",
  },
  {
    q: 'Can you take over an existing website instead of rebuilding it?',
    a: 'Yes. A lot of our work is fixing and extending sites someone else built — theme customisation, performance issues, broken integrations — without a full rebuild.',
  },
  {
    q: 'Do SEO and marketing only start after the website is done?',
    a: "They can run in parallel. If you already have a site, we can start on SEO and campaigns immediately while any development work happens separately.",
  },
  {
    q: 'How is pricing structured?',
    a: 'Project-based for website builds, and monthly retainers for ongoing SEO and marketing. You get a clear quote before anything starts — no hourly surprises.',
  },
]

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-white text-base md:text-lg font-medium">{item.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-green-accent text-2xl leading-none"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-white/60 text-sm md:text-base leading-relaxed pb-6 pr-10">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-navy-900 py-24 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
            Questions people usually ask first
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <div>
            {faqs.map((item, i) => (
              <FaqItem
                key={item.q}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
