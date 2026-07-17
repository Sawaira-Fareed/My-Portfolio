import { useState } from 'react'
import { Mail } from 'lucide-react'
import GithubIcon from '../components/projects/GithubIcon'
import { LinkedinIcon, InstagramIcon } from '../components/icons/SocialIcons'
import ScrollLinkedGuide from '../guide/ScrollLinkedGuide'

const EMAIL = 'abruptessence@gmail.com'
const LINKEDIN_URL = 'https://www.linkedin.com/in/sawaira-fareed'
const GITHUB_URL = 'https://github.com/Sawaira-Fareed'
const INSTAGRAM_URL = 'https://instagram.com/abrupt_essence'

// TODO: replace with your real Formspree endpoint once you create an account
// at formspree.io — submissions land directly in your inbox, never visible
// anywhere on the public site.
const FEEDBACK_FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    try {
      const res = await fetch(FEEDBACK_FORM_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-12">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(circle at 50% 20%, rgba(214,64,126,0.12), transparent 60%)' }}
      />

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center text-center">
        <ScrollLinkedGuide containerSelector="#contact" fromPose="walkingCoffee" toPose="presenting" />

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-light mt-2 mb-3">
          Let's connect
        </h2>
        <p className="text-sm text-white/60 mb-8 max-w-md">
          If something here made you want to talk, reach out directly — or find her on GitHub,
          LinkedIn, or Instagram.
        </p>

        <div className="flex items-center gap-4 mb-12">
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs border transition-colors"
            style={{ borderColor: 'rgba(214,64,126,0.35)', color: '#f2c9d8' }}
          >
            <Mail size={14} />
            {EMAIL}
          </a>
        </div>

        <div className="flex items-center gap-5 text-white/50 mb-16">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-rose-light transition-colors">
            <GithubIcon size={20} />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-rose-light transition-colors">
            <LinkedinIcon size={20} />
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-rose-light transition-colors">
            <InstagramIcon size={20} />
          </a>
        </div>

        {/* Private feedback — never displayed publicly, delivered straight to
            your inbox via Formspree. Not linked from navigation; only shown
            via the guide's exit-intent / end-of-portfolio prompts. */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm text-left border-t border-rose-primary/10 pt-8"
        >
          <p className="text-[11px] tracking-[0.15em] uppercase text-rose-primary/70 mb-3">
            Quick, private feedback
          </p>
          <textarea
            name="message"
            required
            placeholder="Anything you'd want her to know — good or bad."
            rows={3}
            className="w-full bg-midnight-charcoal/60 border border-rose-primary/15 rounded-sm px-3 py-2 text-sm text-white/80 placeholder:text-white/30 focus:outline-none focus:border-rose-primary/40 resize-none"
          />
          {/* Honeypot field against basic spam bots — real users never fill this */}
          <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-3 px-4 py-2 rounded-full text-xs border transition-colors disabled:opacity-50"
            style={{ borderColor: 'rgba(214,64,126,0.35)', color: '#f2c9d8' }}
          >
            {status === 'sending' ? 'Sending…' : 'Send privately'}
          </button>

          {status === 'sent' && (
            <p className="text-xs text-rose-glow/80 mt-2">Thank you — this went straight to her inbox.</p>
          )}
          {status === 'error' && (
            <p className="text-xs text-red-400/80 mt-2">Something went wrong — try again in a moment.</p>
          )}
        </form>
      </div>
    </section>
  )
}
