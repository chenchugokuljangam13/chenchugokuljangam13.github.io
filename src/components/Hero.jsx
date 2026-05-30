import { GithubIcon, LinkedinIcon } from './Icons.jsx'
import { LINKS } from '../data.js'
import composite from '../assets/hero/composite.png'
import nameArt from '../assets/hero/name.svg'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex items-center overflow-hidden px-5 pb-16 pt-28 md:px-10 md:pb-24 md:pt-32"
    >
      {/* Soft radial backdrop (Figma: radial-gradient behind the hero) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(57% 57% at 66% 43%, rgba(217,217,217,0.55) 0%, rgba(115,115,115,0) 100%)',
        }}
      />

      <div className="mx-auto flex w-full max-w-page flex-col items-center justify-center gap-10 md:flex-row md:justify-center md:gap-12 lg:gap-16">
        {/* Name + role — right-aligned, to the left of the portrait, nudged down */}
        <div className="order-2 flex flex-col items-center gap-8 md:order-1 md:mt-24 md:items-end">
          <div className="flex flex-col items-center gap-3 md:items-end">
            {/* Exact Figma name lettering (SVG → pixel-perfect, font-independent) */}
            <h1 className="sr-only">Jangam Gokul Chenchu</h1>
            <img
              src={nameArt}
              alt="Jangam Gokul Chenchu"
              aria-hidden="true"
              className="w-[220px] sm:w-[260px] lg:w-[340px] xl:w-[380px]"
            />

            <p className="font-space text-lg font-bold tracking-[-0.02em] text-ink md:text-xl">
              Software Development Engineer
            </p>
          </div>

          <div className="flex items-center gap-6 text-slate">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-purple"
            >
              <GithubIcon className="h-8 w-8" />
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-purple"
            >
              <LinkedinIcon className="h-8 w-8" />
            </a>
          </div>
        </div>

        {/* Exact Figma hero composite (B&W cutout + purple shape, transparent PNG) */}
        <div className="order-1 md:order-2">
          <img
            src={composite}
            alt="Chenchu Gokul Jangam"
            className="w-auto h-[380px] sm:h-[460px] md:h-[520px] lg:h-[580px] max-h-[78svh]"
          />
        </div>
      </div>
    </section>
  )
}
