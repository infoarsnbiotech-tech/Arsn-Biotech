import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Reveal from './Reveal.jsx'

const CONTACT_EMAIL = 'info.arsnbiotech@gmail.com'

const EMAILJS_SERVICE_ID = 'service_whn8yvp'
const EMAILJS_TEMPLATE_ID = 'template_28eg4kj'
const EMAILJS_PUBLIC_KEY = '-z7-3xBA3lpnv009_'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      })
      .catch((error) => {
        console.error('EmailJS error:', error)
        setStatus('error')
      })
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
            disabled={status === 'sending'}
            className="px-6 py-3.5 rounded-sm bg-brand-gradient text-white font-semibold text-sm disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>

          {status === 'success' && (
            <p className="text-green-accent text-sm">Message sent! We'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-sm">Something went wrong. Please try again or email us directly.</p>
          )}
        </form>
        </Reveal>
      </div>
    </section>
  )
}