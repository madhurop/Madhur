import projects from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  return (
    <section id="projects" className="section hairline">
      <span className="eyebrow">04 — Projects</span>
      <h2 className="mt-4 text-3xl md:text-4xl font-semibold">Applied practice, outside the day job.</h2>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}
