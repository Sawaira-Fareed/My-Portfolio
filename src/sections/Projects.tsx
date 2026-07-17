import { useEffect, useRef, useState } from 'react'
import { animate, stagger } from 'animejs'
import ProjectCard from '../components/projects/ProjectCard'
import ProjectModal from '../components/projects/ProjectModal'
import { projects } from '../content/projects'
import type { Project } from '../content/projects'

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const revealed = useRef<Set<Element>>(new Set())

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const cards = Array.from(grid.querySelectorAll<HTMLElement>('[data-project-card]'))

    // Starting state: high above the viewport, tilted, drifted sideways like a
    // die mid-throw, invisible. This is what falls into place.
    cards.forEach((card) => {
      const tilt = (Math.random() * 30 - 15).toFixed(1)
      const drift = (Math.random() * 60 - 30).toFixed(0)
      card.style.opacity = '0'
      card.style.transform = `translateY(-220px) translateX(${drift}px) rotate(${tilt}deg)`
      card.dataset.tilt = tilt
      card.dataset.drift = drift
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || revealed.current.has(entry.target)) return
          revealed.current.add(entry.target)

          const el = entry.target as HTMLElement
          const startTilt = parseFloat(el.dataset.tilt || '0')
          const startDrift = parseFloat(el.dataset.drift || '0')

          animate(el, {
            opacity: { to: 1, duration: 200, ease: 'outQuad' },
            // outBounce is a physical "dropped ball" curve — it overshoots the
            // resting point and bounces 2-3 times with decreasing height before
            // settling, which is exactly a dice-drop, not a spring wobble.
            translateY: { from: -220, to: 0, duration: 1200, ease: 'outBounce' },
            translateX: { from: startDrift, to: 0, duration: 900, ease: 'outQuad' },
            // Rotation settles faster than the bounce so the card isn't still
            // spinning while it's bouncing vertically — reads as "landed and stable"
            // sooner than the vertical motion finishes.
            rotate: { from: startTilt, to: 0, duration: 550, ease: 'outQuad' },
            delay: stagger(110),
          })
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [projects.length])

  return (
    <section className="relative py-20 md:py-28 px-4 sm:px-6 md:px-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-light mb-10 md:mb-14 text-center">
        Projects
      </h2>

      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto auto-rows-fr"
      >
        {projects.map((project) => (
          <div key={project.id} data-project-card style={{ willChange: 'transform, opacity' }}>
            <ProjectCard project={project} onOpen={setSelected} />
          </div>
        ))}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
