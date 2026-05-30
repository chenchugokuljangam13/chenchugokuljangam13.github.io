import { CERTIFICATIONS } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Certifications() {
  return (
    <section id="certifications" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="mb-10 font-bebas text-5xl text-slate md:text-6xl">
            Certifications<span className="text-purple">.</span>
          </h2>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {CERTIFICATIONS.map((c, i) => (
            <Reveal key={c.title} direction={i % 2 === 0 ? 'left' : 'right'} delay={(i % 2) * 50}>
              <div className="group flex items-center justify-between gap-4 rounded-xl border border-slate/20 bg-white/50 p-5 transition-colors hover:border-purple">
                <span className="font-darker text-lg font-semibold text-slate">
                  {c.title}
                </span>
                <span className="shrink-0 font-mono text-sm text-graymid transition-colors group-hover:text-purple">
                  {c.date}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
