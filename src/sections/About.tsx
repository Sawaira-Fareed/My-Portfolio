import ScrollLinkedGuide from '../guide/ScrollLinkedGuide'

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-12">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 75% 30%, rgba(214,64,126,0.1), transparent 55%)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
        <div className="shrink-0 order-2 md:order-1">
          <ScrollLinkedGuide containerSelector="#about" fromPose="thinking" toPose="explaining" />
        </div>

        <div className="order-1 md:order-2 text-center md:text-left">
          <span className="text-xs tracking-[0.3em] uppercase text-rose-glow/70 mb-4 block">
            How I Think
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-light mb-6">
            I pick the harder, more interesting way to build things.
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-white/65 leading-relaxed">
            <p>
              I'm a Software Engineering student at FAST-NUCES, Islamabad — but a transcript
              doesn't say much about how someone actually works. What does: I've written a game in
              raw x86 Assembly when a game engine would've been faster, built custom graph
              traversal structures when a library existed, and structured a desktop app into four
              real architectural layers when three would've technically worked.
            </p>
            <p>
              None of that was about proving I could do things the hard way for its own sake. It's
              that the harder path is usually where the actual learning lives — and I'd rather
              understand *why* something works than just know that it does.
            </p>
            <p>
              That instinct shows up across everything here: an enterprise MIS coordinating five
              different user roles in real time, a concurrency simulator where naive locking would
              visibly fail, a folklore archive designed in Figma before a single line of CSS was
              written. Different domains, same underlying question every time — what's the
              structurally honest way to build this, not just the fastest way to ship it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
