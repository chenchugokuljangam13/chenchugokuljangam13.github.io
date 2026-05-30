import { GithubIcon, LinkedinIcon } from './Icons.jsx'
import { LINKS } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Contact() {
  return (
    <footer id="contact" className="border-t-[20px] border-purple bg-ink pt-20">
      <div className="mx-auto max-w-[1000px] px-5 md:px-10">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <Reveal direction="left" className="flex flex-col gap-5">
            <h2 className="font-bebas text-5xl text-white md:text-6xl">
              Say Hello<span className="text-purple">.</span>
            </h2>
            <p className="max-w-md font-mono text-2xl leading-snug text-white">
              I'm excited to collaborate and drive innovation.
            </p>
            <div className="mt-2 flex flex-col gap-1 font-mono text-sm text-white/70">
              <a href={`mailto:${LINKS.email}`} className="hover:text-purple">{LINKS.email}</a>
              <a href={`tel:${LINKS.phone}`} className="hover:text-purple">{LINKS.phone}</a>
            </div>
          </Reveal>

          <Reveal direction="right" delay={80} className="flex flex-col items-start gap-5 md:items-end">
            <div className="flex items-center gap-6 text-white">
              <a href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-purple">
                <GithubIcon className="h-8 w-8" />
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-purple">
                <LinkedinIcon className="h-8 w-8" />
              </a>
            </div>
            <a
              href={`mailto:${LINKS.email}`}
              className="rounded-full bg-white px-12 py-2 font-darker text-lg font-bold text-slate transition-transform duration-200 ease-out hover:scale-[1.03] active:scale-[0.98]"
            >
              Connect
            </a>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-page px-5 py-6 md:px-10">
        <p className="flex flex-col gap-1 font-mono text-xs text-white/40 md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} Chenchu Gokul Jangam</span>
          <span>Designed &amp; built by Gokul</span>
        </p>
      </div>
    </footer>
  )
}
