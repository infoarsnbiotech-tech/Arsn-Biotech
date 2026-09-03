import Reveal from './Reveal.jsx'

const steps = [
  {
    n: '01',
    title: 'Discover',
    copy: 'We map what your business actually needs from the site — not a generic checklist, a conversation about your customers and how they find you today.',
  },
  {
    n: '02',
    title: 'Design & build',
    copy: 'Design moves in front of you early and often, so nothing you see for the first time is the finished product.',
  },
  {
    n: '03',
    title: 'Launch',
    copy: 'We handle the deployment, domain, and testing — you get a working site and access to everything, no black boxes.',
  },
  {
    n: '04',
    title: 'Grow',
    copy: 'SEO and marketing pick up once the site is live, with monthly reporting so you can see what is actually moving the needle.',
  },
]

export default function Process() {
  return (
    <section id="process" className="relative bg-navy-900 py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-[0.12]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="max-w-xl mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white">
              How a project moves from idea to live site
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-4 gap-10 md:gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="relative pt-6">
                <div className="absolute top-0 left-0 h-[2px] w-full bg-white/15 overflow-hidden">
                  <div className="h-full w-full bg-brand-gradient origin-left scale-x-0 group-hover:scale-x-100" />
                </div>
                <span className="font-display text-sm text-green-accent font-semibold">{s.n}</span>
                <h3 className="font-display text-xl text-white font-semibold mt-3">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mt-3">{s.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
