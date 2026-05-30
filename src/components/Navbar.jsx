import { useState, useEffect } from 'react'
import { NAV_LINKS, LINKS } from '../data.js'
import logoMark from '../assets/svg/logo-mark.svg'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-page/85 shadow-sm backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-page items-center justify-between px-5 py-5 md:px-[69px]">
        <a href="#top" className="flex items-center gap-2.5 text-slate">
          <img src={logoMark} alt="" className="h-9 w-9" />
          <span className="font-darker text-[28px] font-bold leading-none text-slate md:text-[32px]">
            GoCool
          </span>
        </a>

        <div className="hidden items-center gap-[30px] md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-darker text-lg font-semibold text-ink transition-colors hover:text-purple"
            >
              {l.label}
            </a>
          ))}
          <a
            href={LINKS.resume}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-ink px-6 py-2.5 font-darker text-lg font-bold text-page transition-colors hover:bg-purple"
          >
            Download Resume
          </a>
        </div>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate/10 bg-page/95 px-5 py-4 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-darker text-xl font-semibold text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href={LINKS.resume}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-md bg-ink px-6 py-2.5 text-center font-darker text-lg font-bold text-page"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
