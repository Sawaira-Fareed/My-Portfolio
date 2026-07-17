import { useEffect } from 'react'
import { X, ExternalLink, Layers } from 'lucide-react'
import GithubIcon from './GithubIcon'
import type { Project } from '../../content/projects'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const sections: { label: string; text: string }[] = [
    { label: 'The Problem', text: project.problem },
    { label: 'Why I Built It', text: project.motivation },
    { label: 'Architecture & Decisions', text: project.architecture },
    { label: 'Challenges', text: project.challenges },
    { label: 'What I Learned', text: project.lessons },
  ]

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto"
      style={{ background: 'rgba(10,6,9,0.92)', backdropFilter: 'blur(12px)' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="relative w-full max-w-3xl my-6 md:my-12 mx-3 md:mx-4"
        style={{ animation: 'modal-slide-in 0.4s cubic-bezier(0.4,0,0.2,1) both' }}
      >
        <div
          className="overflow-hidden rounded-sm"
          style={{
            background: '#1a1015',
            border: '1px solid rgba(214,64,126,0.2)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.8), 0 0 60px rgba(214,64,126,0.1)',
          }}
        >
          {/* Hero image */}
          <div className="relative h-56 sm:h-72 md:h-80 bg-midnight-black overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60" />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(180deg, rgba(10,6,9,0.2) 0%, rgba(26,16,21,0.95) 100%)' }}
            />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-sm"
              style={{
                background: 'rgba(10,6,9,0.8)',
                border: '1px solid rgba(214,64,126,0.25)',
                backdropFilter: 'blur(8px)',
                color: 'rgba(242,201,216,0.8)',
              }}
            >
              <X size={15} />
            </button>

            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[9px] tracking-[0.25em] uppercase px-2.5 py-1 rounded-full border border-rose-primary/30 text-rose-light">
                  {project.category}
                </span>
                <span className="text-[10px] text-white/50">{project.era}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-light">{project.title}</h2>
              <p className="text-sm text-white/60 mt-2 max-w-lg">{project.tagline}</p>
            </div>
          </div>

          {/* Body */}
          <div className="p-5 md:p-10">
            {/* Meta row */}
            <div
              className="flex flex-wrap items-center gap-4 md:gap-6 mb-8 pb-6"
              style={{ borderBottom: '1px solid rgba(214,64,126,0.12)' }}
            >
              <div className="flex items-center gap-2 text-white/50 text-xs">
                <Layers size={12} />
                <span>{project.techStack.join(' · ')}</span>
              </div>

              <div className="ml-auto flex items-center gap-3">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs transition-colors"
                    style={{ border: '1px solid rgba(214,64,126,0.3)', color: '#f2c9d8' }}
                  >
                    <GithubIcon size={12} />
                    View Code
                  </a>
                ) : (
                  <span className="text-[10px] tracking-wide uppercase text-white/30 px-3 py-1.5">
                    No public repo yet
                  </span>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs"
                    style={{ border: '1px solid rgba(214,64,126,0.15)', color: 'rgba(232,169,196,0.8)' }}
                  >
                    <ExternalLink size={12} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Story sections */}
            <div className="space-y-7">
              {sections.map((s) => (
                <div key={s.label}>
                  <h4 className="text-[11px] tracking-[0.2em] uppercase text-rose-primary/80 mb-2">{s.label}</h4>
                  <p className="text-base leading-[1.8] text-white/80">{s.text}</p>
                </div>
              ))}
            </div>

            {/* Theme tags */}
            <div
              className="mt-10 pt-6 flex flex-wrap gap-2"
              style={{ borderTop: '1px solid rgba(214,64,126,0.1)' }}
            >
              {project.themes.map((theme) => (
                <span
                  key={theme}
                  className="text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full"
                  style={{
                    background: 'rgba(214,64,126,0.08)',
                    border: '1px solid rgba(214,64,126,0.2)',
                    color: 'rgba(214,64,126,0.8)',
                  }}
                >
                  {theme}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
