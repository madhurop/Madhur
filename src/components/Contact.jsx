import { ArrowUpRight, Linkedin, Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="section hairline">
      <div className="grid md:grid-cols-[1.3fr_1fr] gap-12">
        <div>
          <span className="eyebrow">06 — Contact</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
            Open to roles in finance, analytics and fintech.
          </h2>
          <p className="mt-5 text-ink-400 max-w-prose">
            Currently exploring opportunities in Financial Analytics, Business Analytics,
            Investment Banking and Data Analytics — happy to talk through fit.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <a
            href="mailto:madhurborade654@gmail.com"
            className="flex items-center justify-between border border-ink-800 px-5 py-4 hover:border-ink-50 transition-colors"
          >
            <span className="flex items-center gap-3 text-sm">
              <Mail size={16} className="text-ink-500" /> Email
            </span>
            <ArrowUpRight size={16} className="text-ink-500" />
          </a>
          <a
            href="https://linkedin.com/in/madhurborade"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between border border-ink-800 px-5 py-4 hover:border-ink-50 transition-colors"
          >
            <span className="flex items-center gap-3 text-sm">
              <Linkedin size={16} className="text-ink-500" /> LinkedIn
            </span>
            <ArrowUpRight size={16} className="text-ink-500" />
          </a>
          <div className="flex items-center justify-between border border-ink-800 px-5 py-4">
            <span className="flex items-center gap-3 text-sm">
              <Phone size={16} className="text-ink-500" /> Mumbai, Maharashtra
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
