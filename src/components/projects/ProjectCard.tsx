import { ExternalLink } from 'lucide-react'
import GithubIcon from './GithubIcon'
import type { Project } from '../../content/projects'

interface ProjectCardProps {
  project: Project
  onOpen: (project: Project) => void
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <article
      onClick={() => onOpen(project)}
      className="group relative overflow-hidden cursor-pointer flex flex-col h-full rounded-sm border border-rose-primary/15 bg-midnight-charcoal/70 transition-all duration-300 hover:border-rose-primary/40 hover:-translate-y-1"
      style={{ boxShadow: '0 0 0 rgba(214,64,126,0)' }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 12px 40px rgba(214,64,126,0.15)')}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 0 0 rgba(214,64,126,0)')}
    >
      {/* Image — fixed aspect ratio, identical for every card regardless of source image size */}
      <div className="relative w-full aspect-video shrink-0 overflow-hidden bg-midnight-black">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(10,6,9,0) 45%, rgba(10,6,9,0.85) 100%)' }}
        />
        <span className="absolute top-3 left-3 text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-full border border-rose-primary/30 bg-midnight-black/60 text-rose-light backdrop-blur-sm">
          {project.category}
        </span>
        {project.status === 'in-progress' && (
          <span className="absolute top-3 right-3 text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full border border-yellow-500/40 bg-midnight-black/70 text-yellow-300/90 backdrop-blur-sm">
            Under Construction
          </span>
        )}
      </div>

      {/* Content — fixed slots so every card ends up the same height */}
      <div className="p-4 flex flex-col flex-1 gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm md:text-base font-semibold text-rose-light line-clamp-1">{project.title}</h3>
          <span className="text-[10px] text-white/40 whitespace-nowrap pt-0.5">{project.era}</span>
        </div>

        <p className="text-xs leading-relaxed text-white/60 line-clamp-2 min-h-[2.2em]">{project.tagline}</p>

        <div className="flex flex-wrap gap-1.5 min-h-[22px]">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[9px] px-2 py-0.5 rounded-full border border-rose-primary/20 text-rose-glow/80"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="text-[9px] px-2 py-0.5 text-white/40">+{project.techStack.length - 3}</span>
          )}
        </div>

        <div className="flex items-center justify-end gap-3 mt-auto pt-3 border-t border-rose-primary/10 text-white/40">
          {project.githubUrl ? (
            <GithubIcon size={13} />
          ) : (
            <span className="text-[9px] tracking-wide uppercase text-white/30">No public repo</span>
          )}
          {project.liveUrl && <ExternalLink size={13} />}
        </div>
      </div>
    </article>
  )
}
