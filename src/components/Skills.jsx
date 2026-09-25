const groups = [
  {
    title: 'Finance',
    items: [
      'O2C',
      'Accounts Receivable',
      'Cash Application',
      'Invoice Processing',
      'Reconciliation',
      'Payment Matching',
      'Deductions',
      'Unapplied Cash',
      'Month-End Close',
      'MIS Reporting',
    ],
  },
  {
    title: 'Analytics',
    items: [
      'Advanced Excel',
      'PivotTables',
      'VLOOKUP / XLOOKUP',
      'INDEX-MATCH',
      'SUMIFS',
      'Power Query',
      'Power Pivot',
      'Power BI',
      'SQL',
    ],
  },
  {
    title: 'Technology',
    items: ['React', 'JavaScript', 'Tailwind CSS', 'Python', 'PostgreSQL', 'Git', 'APIs'],
  },
  {
    title: 'Professional',
    items: [
      'Analytical Thinking',
      'Problem Solving',
      'Attention to Detail',
      'Time Management',
      'Adaptability',
      'Leadership',
      'Decision Making',
      'Quick Learning',
      'Teamwork',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section hairline">
      <span className="eyebrow">03 — Skills</span>
      <h2 className="mt-4 text-3xl md:text-4xl font-semibold">A working set, honestly labeled.</h2>
      <p className="mt-3 text-ink-400 max-w-prose text-sm">
        Grouped by domain — finance and professional skills built through experience, analytics
        and technology skills built through self-study and applied practice.
      </p>

      <div className="mt-14 grid md:grid-cols-2 gap-x-16 gap-y-12">
        {groups.map((g) => (
          <div key={g.title}>
            <h3 className="font-display text-lg border-b border-ink-800 pb-3 mb-4">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="text-sm text-ink-300 border border-ink-800 px-3 py-1.5 hover:border-ink-500 hover:text-ink-50 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
