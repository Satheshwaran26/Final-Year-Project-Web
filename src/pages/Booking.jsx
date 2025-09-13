import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'

function Field({ label, children, required, icon }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-neutral-800 inline-flex items-center gap-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 bg-white">{icon}</span>
        {label}{required && <span className="text-neutral-500"> *</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  )
}

function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'Web Development',
    idea: '',
    preferredDate: '',
    expectedCost: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'Q4tYFrqMtFSvZOUpv'
    try {
      emailjs.init(publicKey)
    } catch {}
  }, [])
  function update(key) {
    return (e) => setForm((f) => ({ ...f, [key]: e.target.value }))
  }
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setSending(true)
      setErrorMsg('')
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_0pyglo3'
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_a9nxh81'
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'Q4tYFrqMtFSvZOUpv'

      const templateParams = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        category: form.category,
        expectedCost: form.expectedCost,
        idea: form.idea,
        preferredDate: form.preferredDate,
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      setSubmitted(true)
      setForm({ name: '', email: '', phone: '', category: 'Web Development', idea: '', preferredDate: '', expectedCost: '' })
    } catch (err) {
      console.error('EmailJS error', err)
      setErrorMsg('Failed to send. Please try again or contact us directly.')
    }
    finally {
      setSending(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Full name" required icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-neutral-800"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 0c-5 0-8 3-8 6v2h16v-2c0-3-3-6-8-6Z" strokeWidth="1.5"/></svg>}>
          <input required value={form.name} onChange={update('name')} type="text" className="w-full rounded-md border border-neutral-300 px-3 py-2 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300" placeholder="Your name" />
        </Field>
        <Field label="Email" required icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-neutral-800"><path d="M3 7l9 6 9-6v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" strokeWidth="1.5"/><path d="M3 7l9 6 9-6" strokeWidth="1.5"/></svg>}>
          <input required value={form.email} onChange={update('email')} type="email" className="w-full rounded-md border border-neutral-300 px-3 py-2 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300" placeholder="you@example.com" />
        </Field>
        <Field label="Phone" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-neutral-800"><path d="M15 2H9a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" strokeWidth="1.5"/><path d="M11 19h2" strokeWidth="1.5"/></svg>}>
          <input value={form.phone} onChange={update('phone')} type="tel" className="w-full rounded-md border border-neutral-300 px-3 py-2 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300" placeholder="Optional" />
        </Field>
        <Field label="Project category" required icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-neutral-800"><path d="M3 6h18v12H3z" strokeWidth="1.5"/><path d="M3 10h18" strokeWidth="1.5"/></svg>}>
          <select required value={form.category} onChange={update('category')} className="w-full rounded-md border border-neutral-300 px-3 py-2 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-300">
            <option>Web Development</option>
            <option>App Development</option>
            <option>AI / ML</option>
            <option>Ethical Hacking</option>
          </select>
        </Field>
        <Field label="Expected cost (₹)" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-neutral-800"><path d="M7 7h10M7 12h10M7 17h6" strokeWidth="1.5"/></svg>}>
          <input value={form.expectedCost} onChange={update('expectedCost')} type="number" min="0" step="500" className="w-full rounded-md border border-neutral-300 px-3 py-2 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300" placeholder="e.g. 15000" />
        </Field>
      </div>

      <Field label="Your idea (short)" required icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-neutral-800"><path d="M4 6h16M4 12h12M4 18h8" strokeWidth="1.5"/></svg>}>
        <textarea required value={form.idea} onChange={update('idea')} rows={5} className="w-full rounded-md border border-neutral-300 px-3 py-2 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300" placeholder="Describe your idea in 3–5 lines" />
      </Field>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Preferred discussion date" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-neutral-800"><path d="M7 3v4M17 3v4M3 9h18M5 12h14M5 16h10" strokeWidth="1.5"/></svg>}>
          <input value={form.preferredDate} onChange={update('preferredDate')} type="date" className="w-full rounded-md border border-neutral-300 px-3 py-2 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-300" />
        </Field>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-xs text-neutral-500">We'll reply within 24 hours with a mini‑proposal.</p>
        <button type="submit" disabled={sending} className={`inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold ${sending ? 'bg-neutral-400 text-white' : 'bg-neutral-900 text-white'}`}>
          {sending ? 'Sending…' : submitted ? 'Sent' : 'Request booking'}
        </button>
      </div>
      {submitted && !errorMsg && (
        <p className="text-sm text-green-700">Thanks! Your request was sent.</p>
      )}
      {errorMsg && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}
    </form>
  )
}

function Booking() {
  return (
    <main>
      <section className="relative border-b border-neutral-200">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_500px_at_50%_0%,rgba(0,0,0,0.04),transparent)]" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 text-neutral-900">
                <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" strokeWidth="1.5"/>
                <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" strokeWidth="1.5"/>
              </svg>
            </span>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Book Your Project</h1>
              <p className="mt-2 text-neutral-600 max-w-2xl">Share your details and idea. We'll confirm your slot and send a mini‑proposal within 24 hours.</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-700">
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-neutral-800"><circle cx="12" cy="12" r="9" strokeWidth="1.5"/><path d="M3 12h18" strokeWidth="1.5"/><path d="M12 3c2.5 2.5 4 5.6 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.6-4-9s1.5-6.5 4-9Z" strokeWidth="1.5"/></svg>
              Web
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-neutral-800"><rect x="7" y="2" width="10" height="20" rx="2" ry="2" strokeWidth="1.5"/><path d="M11 19h2" strokeWidth="1.5"/></svg>
              App
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-neutral-800"><path d="M9.5 6.5c1.2-1.2 3.8-1 4.8.5 1 1.5-.3 3 .8 4s2.7-.2 3.6 1.3c.9 1.5-.4 3-1.8 3.4-1.4.4-2.5-.8-3.9-.2-1.4.6-1.5 2.3-3.3 2.3s-3-1.6-2.8-3.1c.2-1.5 2-2.2 2-3.7 0-1.5-1.8-2.8-1.4-4.5.2-.7.6-1.2 1-1.5Z" strokeWidth="1.5"/></svg>
              AI/ML
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-neutral-800"><path d="M12 3 3 7v6c0 5 3.8 8.4 9 9 5.2-.6 9-4 9-9V7l-9-4Z" strokeWidth="1.5"/><path d="M9 12l2 2 4-4" strokeWidth="1.5"/></svg>
              Security
            </span>
          </div>
        </div>
      </section>

      <section className="relative" style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '18px 40px',
        backgroundColor: '#fafafa'
      }}>
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_500px_at_50%_0%,rgba(0,0,0,0.04),transparent)]" aria-hidden="true" />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="rounded-2xl border border-neutral-200 p-6 sm:p-8 bg-white shadow-lg">
            <BookingForm />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Booking


