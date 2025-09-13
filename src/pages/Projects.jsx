function Section({ title, children }) {
  return (
    <section className="py-10 sm:py-12">
      <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-4">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {children}
      </div>
    </section>
  )
}

function Card({ name, summary }) {
  return (
    <div className="rounded-lg border border-neutral-200 p-5 hover:border-neutral-300 transition-colors">
      <h4 className="font-semibold text-neutral-900">{name}</h4>
      <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{summary}</p>
    </div>
  )
}

function Projects() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Projects</h1>
        <p className="mt-3 text-neutral-600 max-w-2xl">We build Final Year Projects end‑to‑end and deliver with documentation, based on your own idea or our curated topics.</p>

        <Section title="Web Development">
          <Card name="E-Commerce Dashboard" summary="Admin analytics with product, order, and customer insights." />
          <Card name="College Portal" summary="Student profiles, attendance, and assignment management." />
          <Card name="Event Microsite" summary="Landing with registration, schedule, and sponsor sections." />
        </Section>

        <Section title="App Development">
          <Card name="Campus Connect" summary="Campus social app with clubs, events, and chat." />
          <Card name="Fitness Tracker" summary="Workouts, goals, and progress tracking with charts." />
          <Card name="Library Finder" summary="Locate nearby libraries and reserve books." />
        </Section>

        <Section title="AI / ML">
          <Card name="Resume Screener" summary="Classifies resumes and extracts key skills." />
          <Card name="Price Predictor" summary="Predicts housing prices using regression models." />
          <Card name="Chatbot Assistant" summary="Knowledge-base QA with retrieval and ranking." />
        </Section>

        <Section title="Ethical Hacking">
          <Card name="Vuln Scanner" summary="Automated scanning and reporting for common CVEs." />
          <Card name="Phishing Awareness" summary="Simulated campaigns to assess user risk." />
          <Card name="Secure Config Audit" summary="Hardening checks for servers and containers." />
        </Section>
      </div>
    </main>
  )
}

export default Projects


