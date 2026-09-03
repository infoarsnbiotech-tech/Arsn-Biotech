import Reveal from './Reveal.jsx'

const services = [
  {
    name: 'Web development',
    copy:
      "Custom-built sites and web apps — not a page builder with your logo dropped in. React, WordPress, or Shopify, depending on what your team can actually maintain after we hand it over.",
    points: ['Custom design, not a template', 'Built for the platform your team already knows', 'Fast pages, clean handoff'],
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <path d="M8 9L4.5 12L8 15M16 9L19.5 12L16 15M13.5 6.5L10.5 17.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'SEO',
    copy:
      'Technical fixes, content structure, and local search groundwork so the site is easy for Google to understand — and easy for the people searching for you to find.',
    points: ['Technical & on-page audit', 'Keyword and content strategy', 'Local search & directory presence'],
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <circle cx="10.5" cy="10.5" r="6" stroke="currentColor" strokeWidth="1.6" />
        <path d="M15 15L20 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Digital marketing',
    copy:
      'Campaigns across search, social, and WhatsApp that are set up to be measured — so budget moves toward what is converting, not what looks good in a screenshot.',
    points: ['Paid search & social campaigns', 'WhatsApp & email outreach', 'Reporting tied to leads, not just clicks'],
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <path d="M4 19L9 12L13 15L20 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 6H20V12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-paper py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="max-w-xl mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
              Three services. One team that stays after launch.
            </h2>
          </div>
        </Reveal>

        <div className="divide-y divide-navy-900/10">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.1}>
              <div
                className={`group py-14 flex flex-col md:flex-row gap-8 md:gap-16 ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="md:w-64 shrink-0">
                  <div className="text-blue-accent mb-4 transition-transform group-hover:-translate-y-1">
                    {s.icon}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">
                    {s.name}
                  </h3>
                </div>
                <div className="flex-1">
                  <p className="text-mute text-base md:text-lg leading-relaxed max-w-2xl">
                    {s.copy}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-ink/80 font-medium">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-gradient" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
