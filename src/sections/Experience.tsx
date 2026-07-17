import ScrollLinkedGuide from '../guide/ScrollLinkedGuide'

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 px-6 md:px-12">
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col md:flex-row-reverse items-center md:items-start gap-10 md:gap-16">
        <div className="shrink-0">
          <ScrollLinkedGuide containerSelector="#experience" fromPose="sittingLaptop" toPose="showingCode" />
        </div>

        <div className="text-center md:text-left">
          <span className="text-xs tracking-[0.3em] uppercase text-rose-glow/70 mb-4 block">
            Currently
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-light mb-2">
            FlyRank AI
          </h2>
          <p className="text-sm text-white/50 mb-6">Remote Intern · 2026 — Ongoing</p>

          <div className="space-y-4 text-sm sm:text-base text-white/65 leading-relaxed">
            <p>
              Currently working as a remote intern at FlyRank AI, across two tracks at once:
              Frontend AI Engineering and their AI Fluency track.
            </p>
            <p>
              The AI Fluency track has been about actually understanding the models being worked
              with — not just calling an API and hoping. Frontend AI Engineering is where that
              understanding turns into shipped, working features. Both tracks are still active,
              and a set of AI certifications completed during the internship live in the detailed
              view below.
            </p>
          </div>

          <button
            className="mt-6 px-5 py-2 rounded-full text-xs border transition-colors"
            style={{ borderColor: 'rgba(214,64,126,0.3)', color: '#f2c9d8' }}
          >
            View certificates in detail
          </button>
        </div>
      </div>
    </section>
  )
}
