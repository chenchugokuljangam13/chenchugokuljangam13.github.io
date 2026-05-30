import { useRef, useEffect, useState } from 'react'

// Hidden-state transforms per direction; all animate to translate-0 / scale-100 / opacity-100.
// Distances kept small (16-24px) per tasteful-motion guidance — fade always accompanies movement.
const HIDDEN = {
  up: 'translate-y-6 opacity-0',
  down: '-translate-y-6 opacity-0',
  left: '-translate-x-6 opacity-0',
  right: 'translate-x-6 opacity-0',
  zoom: 'scale-[0.97] opacity-0',
  fade: 'opacity-0',
}

// Fade/slide/zoom into view when scrolled to (runs once).
export default function Reveal({ children, className = '', delay = 0, direction = 'up' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        shown ? 'translate-x-0 translate-y-0 scale-100 opacity-100' : HIDDEN[direction]
      } ${className}`}
    >
      {children}
    </div>
  )
}
