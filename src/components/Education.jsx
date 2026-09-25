const education = [
  {
    degree: 'Master in Management Studies (MMS)',
    focus: 'Finance / Management',
    school: 'ADMIFMS',
    period: 'In Progress',
    current: true,
  },
  {
    degree: 'Bachelor of Financial Markets (BFM)',
    focus: 'Bachelor of Commerce',
    school: 'University of Mumbai',
    period: 'Graduated April 2024',
    current: false,
  },
]

export default function Education() {
  return (
    <section id="education" className="section hairline">
      <span className="eyebrow">05 — Education</span>
      <h2 className="mt-4 text-3xl md:text-4xl font-semibold">Academic foundation.</h2>

      <div className="mt-14 grid md:grid-cols-2 gap-5">
        {education.map((e) => (
          <div key={e.degree} className="border border-ink-800 p-6 md:p-7">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-ink-500">{e.period}</span>
              {e.current && (
                <span className="text-xs font-mono text-ink-50 border border-ink-700 px-2 py-0.5">
                  Current
                </span>
              )}
            </div>
            <h3 className="mt-4 text-lg font-display font-medium">{e.degree}</h3>
            <p className="mt-1 text-sm text-ink-400">{e.focus}</p>
            <p className="mt-3 text-sm text-ink-300">{e.school}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
