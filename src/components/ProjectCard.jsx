import { ArrowUpRight, Github } from 'lucide-react'

export default function ProjectCard({ project }) {
  const { title, category, year, description, technologies, github, liveDemo } = project

  return (
    <article className="group border border-ink-800 p-6 md:p-7 flex flex-col h-full hover:border-ink-500 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <span className="text-xs font-mono text-ink-500">{category}</span>
        <span className="text-xs font-mono text-ink-600">{year}</span>
      </div>

      <h3 className="mt-4 text-xl font-display font-medium leading-snug">{title}</h3>
      <p className="mt-3 text-sm text-ink-400 flex-1">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {technologies.map((t) => (
          <span key={t} className="text-xs font-mono text-ink-300 border border-ink-800 px-2 py-1">
            {t}
          </span>
        ))}
      </div>

      {(github || liveDemo) && (
        <div className="mt-6 pt-5 border-t border-ink-800 flex gap-5">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-ink-300 hover:text-ink-50"
            >
              <Github size={15} /> Code
            </a>
          )}
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-ink-300 hover:text-ink-50"
            >
              <ArrowUpRight size={15} /> Live
            </a>
          )}
        </div>
      )}
    </article>
  )
}
