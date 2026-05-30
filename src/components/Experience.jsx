import { EXPERIENCE_INTRO, FEATURED_ROLE, ROLES } from '../data.js'

function Tag({ children, light }) {
  return (
    <span
      className={`rounded-full px-3 py-1 font-darker text-sm font-semibold ${
        light ? 'bg-white text-slate' : 'bg-purple text-white'
      }`}
    >
      {children}
    </span>
  )
}

function Bullets({ points, className = '' }) {
  return (
    <ul className={`flex flex-col gap-2.5 ${className}`}>
      {points.map((p, i) => (
        <li key={i} className="flex gap-2 font-mono text-graylight">
          <span className="mt-1 text-purple">▹</span>
          <span className="leading-relaxed">{p}</span>
        </li>
      ))}
    </ul>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="border-t-[5px] border-purple bg-ink px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1080px]">
        <div className="mx-auto flex max-w-[726px] flex-col items-center gap-4 text-center">
          <h2 className="font-bebas text-5xl text-white md:text-6xl">
            Experience<span className="text-purple">.</span>
          </h2>
          <p className="font-mono text-base text-white">Where I've worked &amp; what I've built</p>
          <p className="font-mono text-base leading-relaxed text-graymid">{EXPERIENCE_INTRO}</p>
        </div>

        <div className="mx-auto mt-12 max-w-[726px] rounded-2xl border-t-[5px] border-purple bg-carddark p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h3 className="font-darker text-2xl font-bold text-white">{FEATURED_ROLE.title}</h3>
            <span className="font-darker text-lg font-semibold text-white">{FEATURED_ROLE.company}</span>
            <span className="h-2 w-2 rounded-full bg-white/50" />
            <span className="font-mono text-sm text-white/50">{FEATURED_ROLE.date}</span>
            <Tag>{FEATURED_ROLE.type}</Tag>
          </div>
          <div className="my-5 h-px w-full bg-white/30" />
          <Bullets points={FEATURED_ROLE.points} />
        </div>

        <div className="mx-auto mt-8 grid max-w-[1080px] gap-6 md:grid-cols-2">
          {ROLES.map((role) => (
            <div
              key={role.title}
              className="flex flex-col gap-3 rounded-2xl border border-white/40 p-5 transition-colors hover:border-purple"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="font-darker text-xl font-bold text-white">{role.title}</h4>
                <Tag light>{role.type}</Tag>
              </div>
              <p className="font-darker text-base font-semibold text-white">{role.company}</p>
              <div className="h-px w-full bg-white/30" />
              <Bullets points={role.points} className="text-sm" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
