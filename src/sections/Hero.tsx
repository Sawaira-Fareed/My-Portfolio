import ScrollLinkedGuide from '../guide/ScrollLinkedGuide'

export default function Hero() {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 25% 20%, rgba(214,64,126,0.16), transparent 55%), radial-gradient(circle at 80% 75%, rgba(124,58,111,0.14), transparent 50%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">
        <span className="text-xs tracking-[0.3em] uppercase text-rose-glow/70 mb-4">
          Software Engineering Undergraduate
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-rose-light mb-5 leading-tight">
          Sawaira Fareed
        </h1>

        <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-lg mb-10">
          This isn't a list of projects — it's a walk through how I think, build, and grow as an
          engineer. My guide is here to show you around.
        </p>

        <button
          onClick={scrollToNext}
          className="px-6 py-2.5 rounded-full text-sm border transition-all duration-300"
          style={{ borderColor: 'rgba(214,64,126,0.4)', color: '#f2c9d8' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(214,64,126,0.8)'
            e.currentTarget.style.boxShadow = '0 0 24px rgba(214,64,126,0.2)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(214,64,126,0.4)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          Begin the story ↓
        </button>
      </div>

      {/* Scroll-linked: idle -> confident as you scroll through Hero, with a
          gentle parallax drift instead of sitting perfectly static */}
      <div className="relative z-10 mt-4">
        <ScrollLinkedGuide containerSelector="#hero" fromPose="idle" toPose="confident" />
      </div>
    </section>
  )
}
