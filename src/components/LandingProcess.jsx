function Step({ num, title, desc, icon }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 text-sm font-semibold text-neutral-800">{num}</div>
      <div>
        <h4 className="font-semibold text-neutral-900 flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 bg-white">{icon}</span>
          {title}
        </h4>
        <p className="mt-1 text-sm text-neutral-600">{desc}</p>
      </div>
    </div>
  )
}

function Card({ title, items, icon }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6">
      <h4 className="font-semibold text-neutral-900 flex items-center gap-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 bg-white">{icon}</span>
        {title}
      </h4>
      <ul className="mt-3 space-y-2 text-sm text-neutral-700">
        {items.map((t, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" /> {t}
          </li>
        ))}
      </ul>
    </div>
  )
}

function LandingProcess() {
  return (
    <section className="border-t border-neutral-200" data-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-8">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1 text-xs font-semibold text-neutral-700">
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" /> Process
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">How we work</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <Step num="1" title="Discuss your idea" desc="Quick call or chat to capture goals and scope." icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 text-neutral-800"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" strokeWidth="1.5"/></svg>} />
            <Step num="2" title="Plan & tech stack" desc="We propose modules, timelines, and tools." icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 text-neutral-800"><path d="M3 7h18M7 3v18" strokeWidth="1.5"/></svg>} />
            <Step num="3" title="Development sprints" desc="Frequent demos, feedback, and iterations." icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 text-neutral-800"><path d="M3 12h18M12 3v18" strokeWidth="1.5"/></svg>} />
            <Step num="4" title="Docs & testing" desc="Report, PPT, and QA to ensure quality." icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 text-neutral-800"><path d="M6 4h9l3 3v13H6z" strokeWidth="1.5"/></svg>} />
            <Step num="5" title="Deployment & handoff" desc="Final demo, hosting, and code handover." icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 text-neutral-800"><path d="M4 12h7l-3-3m3 3-3 3" strokeWidth="1.5"/></svg>} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card title="You get" items={["Full source code", "README + setup", "Report & PPT", "Screenshots & demo video"]} icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 text-neutral-800"><path d="M5 13l4 4L19 7" strokeWidth="1.5"/></svg>} />
            <Card title="Support" items={["Viva questions", "Bug fixes window", "Minor tweaks", "Next‑steps advice"]} icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 text-neutral-800"><path d="M12 6v6l4 2" strokeWidth="1.5"/></svg>} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingProcess


