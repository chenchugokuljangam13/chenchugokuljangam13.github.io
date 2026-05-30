import { PROJECTS } from '../data.js'

function ProjectCard({ project }) {
  const Wrapper = project.href ? 'a' : 'div'
  const wrapperProps = project.href
    ? { href: project.href, target: '_blank', rel: 'noreferrer' }
    : {}

  return (
    <Wrapper
      {...wrapperProps}
      className="group relative block aspect-[525/449] overflow-hidden rounded-2xl shadow-lg"
    >
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 bg-gradient-to-t from-black via-black/70 to-transparent p-5 pt-16">
        <h3 className="font-darker text-2xl font-bold leading-tight text-white">{project.title}</h3>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-chip/90 px-3 py-1 font-space text-xs font-medium text-slate">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden px-5 py-24 md:px-10 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(217,217,217,0.6) 0%, rgba(217,217,217,0) 47%, rgba(115,115,115,0.15) 100%)',
        }}
      />

      <div className="mx-auto max-w-[1100px]">
        <div className="mb-12 flex flex-col gap-4">
          <h2 className="font-bebas text-5xl text-slate md:text-6xl">
            Projects<span className="text-purple">.</span>
          </h2>
          <p className="max-w-2xl font-mono text-base leading-relaxed text-ink">
            From architecting high-traffic serverless systems at AntStack to developing AI-driven
            solutions, I specialize in building robust backend environments that scale with business
            needs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
