const responsibilities = [
  'Processed high-volume cash application transactions across a multi-region client portfolio',
  'Handled payment-to-invoice matching for lockbox, ACH, wire, email and check remittances',
  'Managed unapplied and unidentified cash, short payments, overpayments and deductions',
  'Performed AR reconciliation and supported month-end close activities',
  'Resolved exceptions within SLA requirements and prepared daily SOD / EOD MIS reports',
  'Worked across NA, APAC and EMEA clients using HighRadius and ERP systems',
  'Supported UAT and new client onboarding; maintained and updated SOPs',
]

export default function Experience() {
  return (
    <section id="experience" className="section hairline">
      <span className="eyebrow">02 — Experience</span>
      <h2 className="mt-4 text-3xl md:text-4xl font-semibold">Where the work happened.</h2>

      <div className="mt-16 relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-ink-800" aria-hidden="true" />

        <div className="relative pl-10">
          <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-ink-950 border-2 border-ink-50" />

          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-4">
            <div>
              <h3 className="text-xl font-display font-medium">Tata Consultancy Services (TCS)</h3>
              <p className="text-ink-400 text-sm mt-0.5">Process Associate — O2C / Cash Application</p>
            </div>
            <span className="num text-sm text-ink-500 whitespace-nowrap">Jul 2024 — Dec 2025</span>
          </div>

          <p className="text-ink-100 mb-6 max-w-prose">
            <span className="font-mono text-ink-50">138,000+</span> cash application transactions
            processed across <span className="font-mono text-ink-50">120+</span> clients.
          </p>

          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {responsibilities.map((r) => (
              <li key={r} className="flex gap-3 text-sm text-ink-300">
                <span className="text-ink-600 mt-1.5 w-1 h-1 rounded-full bg-ink-600 shrink-0" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
