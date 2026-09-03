import Reveal from './Reveal.jsx'

const projects = [
  {
    name: 'ARSN Biotech',
    domain: 'arsnbiotech.com',
    url: 'https://arsnbiotech.com',
    category: 'Pharma manufacturing',
    copy: 'Site for a WHO-GMP certified third-party pharma manufacturer — product portfolios, PCD franchise inquiries, and a client portal for tracking orders.',
    accent: '#1E6FD9',
  },
  {
    name: 'Content Junction',
    domain: 'contentjunction.in',
    url: 'https://contentjunction.in',
    category: 'AI visibility agency',
    copy: 'Marketing site for a GEO/AEO agency, built around a lead-generating AI-visibility audit and case studies of brand citations in ChatGPT and Gemini.',
    accent: '#2FA84F',
  },
  {
    name: 'CFO Services',
    domain: 'cfoservices.in',
    url: 'https://cfoservices.in',
    category: 'Financial advisory',
    copy: 'Corporate site for a virtual-CFO firm — service pages for advisory, compliance and tax, plus a consultation booking flow.',
    accent: '#F2B84B',
  },
  {
    name: 'WaterEra',
    domain: 'waterera.com',
    url: 'https://waterera.com',
    category: 'Sustainability / industrial',
    copy: 'Site for an eco-friendly water solutions company, covering home water systems, rainwater harvesting, and industrial ETP/STP services.',
    accent: '#1E6FD9',
  },
  {
    name: 'Regalia at Bishop Arts',
    domain: 'regaliabishoparts.com',
    url: 'https://regaliabishoparts.com',
    category: 'Real estate leasing',
    copy: 'Leasing site for a boutique apartment community in Dallas — floor plans, gallery, and tour scheduling built to convert renters.',
    accent: '#2FA84F',
  },
]

export default function Portfolio() {
  return (
    <section id="work" className="bg-navy-900 py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="max-w-xl mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white">
              Sites we've shipped
            </h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              Across pharma, finance, real estate, and marketing — a look at recent work.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.domain} delay={i * 0.07} className={i === 0 ? 'md:col-span-2' : ''}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full rounded-sm border border-white/10 hover:border-white/25 bg-white/[0.03] transition-colors overflow-hidden"
              >
                {/* mock browser chrome bar */}
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                  <span className="ml-3 text-xs text-white/40 font-mono">{p.domain}</span>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h3 className="font-display text-xl font-semibold text-white">{p.name}</h3>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
                      style={{ color: p.accent, backgroundColor: `${p.accent}1A` }}
                    >
                      {p.category}
                    </span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed max-w-xl">{p.copy}</p>
                  <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-white/50 group-hover:text-white transition-colors">
                    Visit site
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
