export default function Footer() {
  return (
    <footer className="hairline px-6 md:px-12 lg:px-20 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-500 font-mono">
      <span>© {new Date().getFullYear()} Madhur Borade</span>
      <span>Finance × Analytics × Technology</span>
    </footer>
  )
}
