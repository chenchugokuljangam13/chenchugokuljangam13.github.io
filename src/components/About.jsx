import { ABOUT_INTRO, ABOUT_CARDS, SKILL_PILLS } from '../data.js'
import Reveal from './Reveal.jsx'

function Card({ title, body }) {
  return (
    <div className="group flex h-full flex-col gap-3 rounded-2xl border border-slate/30 bg-transparent p-6 text-slate transition-all duration-200 ease-out hover:-translate-y-1 hover:border-purple hover:bg-purple hover:text-white hover:shadow-lg hover:shadow-purple/20">
      <h3 className="font-darker text-2xl font-bold leading-tight">{title}</h3>
      <p className="font-space text-base leading-relaxed text-ink group-hover:text-white/80">
        {body}
      </p>
    </div>
  )
}

export default function About() {
  const pills = [...SKILL_PILLS, ...SKILL_PILLS]

  return (
    <section id="about" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1008px]">
        <div className="flex flex-col items-center gap-7 text-center">
          <Reveal>
            <h2 className="font-bebas text-5xl text-slate md:text-6xl">
              About Me<span className="text-purple">.</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-3xl font-space text-lg leading-relaxed text-ink">{ABOUT_INTRO}</p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {ABOUT_CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 50} className="h-full">
              <Card {...c} />
            </Reveal>
          ))}
        </div>

        <div className="fade-mask mt-12 overflow-hidden">
          <div className="marquee-track flex w-max animate-marquee gap-3">
            {pills.map((pill, i) => (
              <span
                key={i}
                className="whitespace-nowrap rounded-full bg-[#bcbcbc]/50 px-6 py-3 font-space text-base font-medium text-slate"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
