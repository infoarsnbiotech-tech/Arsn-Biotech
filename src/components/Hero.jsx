import { motion } from 'framer-motion'

const badges = [
  { label: 'Websites', pos: 'top-[8%] left-[4%]', delay: 0.9 },
  { label: 'SEO', pos: 'top-[42%] right-[-2%]', delay: 1.1 },
  { label: 'Marketing', pos: 'bottom-[10%] left-[14%]', delay: 1.3 },
]

export default function Hero() {
  return (
    <section id="top" className="relative bg-navy-900 pt-40 pb-28 md:pt-48 md:pb-40 overflow-hidden">
      <div className="absolute inset-0 bg-mesh" />
      <div className="blob absolute -top-24 left-[10%] w-72 h-72 rounded-full bg-blue-accent/30" />
      <div className="blob blob--b absolute top-1/3 right-[5%] w-80 h-80 rounded-full bg-green-accent/25" />
      <div className="absolute inset-0 dot-grid opacity-40" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold tracking-wide text-green-accent mb-5"
          >
            Web development · SEO · Digital marketing
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-white text-4xl sm:text-5xl md:text-[3.5rem] leading-[1.08] font-semibold max-w-xl"
          >
            We build the web presence your business hasn't caught up to yet.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-white/70 text-lg max-w-md leading-relaxed"
          >
            ARSN Tech designs and ships websites, then makes sure people actually
            find them — through search rankings and marketing that's tied to
            real numbers, not vanity metrics.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-sm bg-brand-gradient text-white font-semibold text-sm shadow-[0_8px_30px_-8px_rgba(30,111,217,0.6)] hover:brightness-110 transition"
            >
              Talk to us about your project
            </a>
            <a
              href="#services"
              className="px-6 py-3.5 rounded-sm border border-white/25 text-white font-semibold text-sm hover:bg-white/5 hover:border-white/40 transition-colors"
            >
              See what we do
            </a>
          </motion.div>
        </div>

        <div className="relative h-[420px] hidden md:block">
          <svg viewBox="0 0 420 420" className="w-full h-full max-w-sm mx-auto">
            <path
              className="circuit-path"
              d="M40 340 C 140 260, 200 210, 260 190 S 360 150, 390 90"
              fill="none"
              stroke="url(#heroGrad)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <circle className="circuit-node circuit-node--1" cx="290" cy="180" r="7" fill="#0A1628" stroke="#2FA84F" strokeWidth="3" />
            <circle className="circuit-node circuit-node--2" cx="335" cy="140" r="7" fill="#0A1628" stroke="#2FA84F" strokeWidth="3" />
            <circle className="circuit-node circuit-node--3" cx="390" cy="90" r="7" fill="#0A1628" stroke="#2FA84F" strokeWidth="3" />
            <defs>
              <linearGradient id="heroGrad" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#1E6FD9" />
                <stop offset="100%" stopColor="#2FA84F" />
              </linearGradient>
            </defs>
          </svg>

          {badges.map((b) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: b.delay },
                scale: { duration: 0.5, delay: b.delay },
                y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: b.delay + 0.5 },
              }}
              className={`absolute ${b.pos} px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm text-white text-xs font-semibold tracking-wide`}
            >
              {b.label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
