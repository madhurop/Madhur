const stats = [
  { value: '1.5+', label: 'Years Experience' },
  { value: '138K+', label: 'Transactions Processed' },
  { value: '120+', label: 'Clients Supported' },
  { value: '3', label: 'Regions Supported', note: 'NA / APAC / EMEA' },
]

export default function About() {
  return (
    <section id="about" className="section hairline">
      <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20">
        <div>
          <span className="eyebrow">01 — About</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight">
            Building at the intersection of Finance, Data &amp; Technology.
          </h2>
        </div>

        <div className="space-y-5 text-ink-300 max-w-prose">
          <p>
            Madhur has spent the last 1.5+ years in finance operations at TCS, working within
            Order-to-Cash — cash application, payment reconciliation, remittance processing,
            unapplied cash, deductions, exceptions and daily MIS reporting across NA, APAC and
            EMEA client portfolios.
          </p>
          <p>
            He is currently pursuing a Master in Management Studies (MMS) in Finance, and using it
            to deliberately expand into analytics and technology — SQL, Power BI, Excel automation,
            and front-end tooling — building the bridge between operational finance and the
            analytical roles he's moving toward.
          </p>
        </div>
      </div>

      <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 hairline border-l border-ink-800">
        {stats.map((s) => (
          <div key={s.label} className="border-r border-b md:border-b-0 border-ink-800 px-6 py-8">
            <div className="num text-3xl md:text-4xl font-display font-semibold">{s.value}</div>
            <div className="mt-2 text-sm text-ink-400">{s.label}</div>
            {s.note && <div className="mt-1 text-xs text-ink-500 font-mono">{s.note}</div>}
          </div>
        ))}
      </div>
    </section>
  )
}
