function Item({ title, desc, examples = [], icon }) {
  return (
    <div tabIndex={0} className="relative rounded-xl border border-neutral-200 bg-white p-6 focus:outline-none focus:ring-2 focus:ring-neutral-300">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          {icon}
          <h3 className="font-semibold text-neutral-900">{title}</h3>
        </div>

      </div>
      {desc && <p className="mt-3 text-sm text-neutral-600 leading-relaxed">{desc}</p>}
      {examples.length > 0 && (
        <ul className="mt-3 space-y-1.5 text-sm text-neutral-600">
          {examples.map((ex, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" /> {ex}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function WhatWeDevelop() {
  return (
    <section className="border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-8 sm:mb-12">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1 text-xs font-semibold text-neutral-700">
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" /> What we develop
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Final year projects we build for you</h2>
          <p className="mt-2 text-neutral-600 max-w-2xl">Choose your own idea or pick a topic — we develop it across the areas below.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Item
            title="Web Development"
            desc="Full‑stack websites, dashboards, and APIs."
            examples={["E‑commerce admin", "College portal", "Event microsite"]}
            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 text-neutral-800"><circle cx="12" cy="12" r="9" strokeWidth="1.5"/><path d="M3 12h18" strokeWidth="1.5"/><path d="M12 3c2.5 2.5 4 5.6 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.6-4-9s1.5-6.5 4-9Z" strokeWidth="1.5"/></svg>}
          />
          <Item
            title="App Development"
            desc="Android/iOS apps with modern UI/UX."
            examples={["Campus connect", "Fitness tracker", "Library finder"]}
            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 text-neutral-800"><rect x="7" y="2" width="10" height="20" rx="2" ry="2" strokeWidth="1.5"/><path d="M11 19h2" strokeWidth="1.5"/></svg>}
          />
          <Item
            title="AI / ML"
            desc="Models, automation, and data pipelines."
            examples={["Resume screener", "Price predictor", "Q&A chatbot"]}
            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 text-neutral-800"><path d="M9.5 6.5c1.2-1.2 3.8-1 4.8.5 1 1.5-.3 3 .8 4s2.7-.2 3.6 1.3c.9 1.5-.4 3-1.8 3.4-1.4.4-2.5-.8-3.9-.2-1.4.6-1.5 2.3-3.3 2.3s-3-1.6-2.8-3.1c.2-1.5 2-2.2 2-3.7 0-1.5-1.8-2.8-1.4-4.5.2-.7.6-1.2 1-1.5Z" strokeWidth="1.5"/></svg>}
          />
          <Item
            title="Ethical Hacking"
            desc="Security tools, audits, and reports."
            examples={["Vuln scanner", "Phishing awareness", "Config audit"]}
            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 text-neutral-800"><path d="M12 3 3 7v6c0 5 3.8 8.4 9 9 5.2-.6 9-4 9-9V7l-9-4Z" strokeWidth="1.5"/><path d="M9 12l2 2 4-4" strokeWidth="1.5"/></svg>}
          />
        </div>

        
      </div>
    </section>
  )
}

export default WhatWeDevelop


