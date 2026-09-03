import Reveal from './Reveal.jsx'

const items = [
  {
    title: 'One team, not three vendors',
    copy: 'Your developer, SEO person, and marketer are the same team — nothing gets lost translating between them.',
    accent: 'from-blue-accent to-blue-accent',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'You keep the keys',
    copy: 'Every site is handed over with full access — hosting, domain, code. Nothing is held hostage after launch.',
    accent: 'from-green-accent to-green-accent',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <circle cx="8" cy="15" r="4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M11.5 12L19 4.5M19 4.5H15M19 4.5V8.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Built on what your team can run',
    copy: "We choose React, WordPress, or Shopify based on who maintains the site after we're done — not what's trendiest.",
    accent: 'from-amber-accent to-amber-accent',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 20h6M12 16v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Reporting you can actually read',
    copy: 'Monthly numbers tied to leads and rankings — not a wall of impressions and reach that means nothing to your business.',
    accent: 'from-blue-accent to-green-accent',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M4 20V10M11 20V4M18 20V13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function WhyUs() {
  return (
    <section className="bg-paper py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink max-w-lg mb-14">
            What makes working with us different
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy-900/10 rounded-sm overflow-hidden">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08} className="bg-paper">
              <div className="group h-full p-7 relative">
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${it.accent} opacity-70`} />
                <div className="text-blue-accent mb-5 transition-transform group-hover:-translate-y-0.5">
                  {it.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-ink mb-2.5">{it.title}</h3>
                <p className="text-mute text-sm leading-relaxed">{it.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
