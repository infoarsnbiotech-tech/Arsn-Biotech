import { useState } from 'react'
import Reveal from './Reveal.jsx'

const CONTACT_EMAIL = 'info.arsnbiotech@gmail.com'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`New project inquiry — ${form.name || 'Website visitor'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="bg-navy-900 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_1fr] gap-16">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white max-w-md">
            Tell us what you're trying to build.
          </h2>
          <p className="mt-5 text-white/60 max-w-sm leading-relaxed">
            Send a few lines about your business and what you need — a new
            site, better rankings, or a marketing push — and we'll reply with
            next steps, not a sales pitch.
          </p>
          <div className="mt-10 text-sm text-white/50 space-y-1">
            <p>{CONTACT_EMAIL}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm text-white/70 mb-2">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full bg-transparent border border-white/20 rounded-sm px-4 py-3 text-white placeholder-white/30 focus:border-green-accent outline-none"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-white/70 mb-2">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full bg-transparent border border-white/20 rounded-sm px-4 py-3 text-white placeholder-white/30 focus:border-green-accent outline-none"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-white/70 mb-2">What do you need?</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full bg-transparent border border-white/20 rounded-sm px-4 py-3 text-white placeholder-white/30 focus:border-green-accent outline-none resize-none"
              placeholder="A new website, SEO help, running campaigns..."
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3.5 rounded-sm bg-brand-gradient text-white font-semibold text-sm"
          >
            Send message
          </button>
        </form>
        </Reveal>
      </div>
    </section>
  )
}
