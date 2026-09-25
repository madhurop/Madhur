import { ArrowDown, ArrowUpRight, Circle } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden ">
      {/* subtle animated backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 ">
        <div
          className="absolute inset-0 opacity-[0.05] "
          style={{
            backgroundImage:
              'linear-gradient(to right, #F5F5F4 1px, transparent 1px), linear-gradient(to bottom, #F5F5F4 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div className="absolute -top-32 right-[-10%] w-[520px] h-[520px] rounded-full border border-ink-800 animate-drift" />
        <div className="absolute top-40 right-[5%] w-[320px] h-[320px] rounded-full border border-ink-800 animate-drift [animation-delay:2s]" />
      </div>

      <div className="section !py-0 w-full">
        <div className="flex items-center gap-2 mb-8 animate-rise">
          <Circle size={8} className="fill-ink-50 text-ink-50 animate-pulse" />
          <span className="eyebrow">Currently pursuing MMS</span>
        </div>

        <h1
          className="font-display font-semibold leading-[0.95] tracking-tight text-[13vw] md:text-[7.5vw] lg:text-[6.5vw] animate-rise [animation-delay:0.05s] opacity-0"
        >
          Madhur Borade
        </h1>

        <p className="mt-4 md:mt-6 font-display text-2xl md:text-4xl text-ink-300 animate-rise [animation-delay:0.15s] opacity-0">
          Finance <span className="text-ink-500">×</span> Analytics <span className="text-ink-500">×</span> Technology
        </p>

        <div className="mt-8 md:mt-10 max-w-prose space-y-3 animate-rise [animation-delay:0.25s] opacity-0">
          <p className="text-ink-100 text-lg">
            Finance professional transitioning toward the intersection of finance, analytics and technology.
          </p>
          <p className="text-ink-400">
            1.5+ years of experience in Finance Operations, O2C, Accounts Receivable and Cash
            Application — currently pursuing an MMS in Finance.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3 animate-rise [animation-delay:0.35s] opacity-0">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-ink-50 text-ink-950 px-5 py-3 text-sm font-medium hover:bg-ink-100 transition-colors"
          >
            View Projects <ArrowUpRight size={16} />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 border border-ink-700 px-5 py-3 text-sm hover:border-ink-50 transition-colors"
          >
            About Me
          </a>
          <a
            href="https://drive.google.com/file/d/1o-FSigriLXWK1tv2Pqns7tlpdkFFWmN0/view?usp=sharing"
            download
            target="blank"
            className="inline-flex items-center gap-2 border border-ink-700 px-5 py-3 text-sm hover:border-ink-50 transition-colors"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-ink-700 px-5 py-3 text-sm hover:border-ink-50 transition-colors"
          >
            Connect With Me
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="hidden md:flex absolute bottom-10 left-20 items-center gap-2 text-ink-500 hover:text-ink-100 transition-colors"
      >
        <ArrowDown size={16} />
        <span className="text-xs font-mono">scroll</span>
      </a>
    </section>
  )
}
