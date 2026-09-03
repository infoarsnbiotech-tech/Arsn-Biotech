import Reveal from './Reveal.jsx'

const segments = ['Pharma & nutraceutical manufacturers', 'D2C & niche e-commerce stores', 'Dealerships & showrooms', 'Local service businesses']

export default function About() {
  return (
    <section id="about" className="bg-paper py-24 md:py-32 border-t border-navy-900/10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_1.2fr] gap-14 items-start">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            Small enough to know your project, big enough to run all three services under one roof.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-6 text-mute text-base md:text-lg leading-relaxed">
            <p>
              ARSN Tech is an IT services team built around a simple idea: a
              website, its search visibility, and its marketing should not be
              handled by three different vendors who never talk to each other.
            </p>
            <p>
              We work directly with founders and small teams who need a site
              that works, and someone accountable for keeping it that way
              after launch.
            </p>
            <div className="pt-4 flex flex-wrap gap-3">
              {segments.map((s) => (
                <span
                  key={s}
                  className="text-sm font-medium text-ink/75 px-4 py-2 rounded-full border border-navy-900/15"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
