import Reveal from './Reveal.jsx'

export default function CTABanner() {
  return (
    <section className="relative bg-brand-gradient py-20 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-[0.15]" />
      <Reveal className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-white max-w-2xl mx-auto">
          Have a launch date in mind? Let's work backward from it.
        </h2>
        <a
          href="#contact"
          className="inline-block mt-8 px-7 py-4 rounded-sm bg-navy-900 text-white font-semibold text-sm hover:bg-navy-950 transition-colors"
        >
          Start the conversation
        </a>
      </Reveal>
    </section>
  )
}
