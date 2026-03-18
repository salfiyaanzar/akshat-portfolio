import { Code, Home, Mail, Sun } from 'lucide-react'

export default function TopNav() {
  return (
    <nav className="fixed top-8 z-50 flex items-center gap-10 px-8 py-4 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 shadow-2xl rounded-full">
      <a
        href="#"
        aria-label="Home"
        className="text-neutral-400 hover:text-white transition-colors flex items-center"
      >
        <Home className="w-5 h-5" strokeWidth={1.5} />
      </a>
      <a
        href="#projects"
        aria-label="Projects"
        className="text-neutral-400 hover:text-white transition-colors flex items-center"
      >
        <Code className="w-5 h-5" strokeWidth={1.5} />
      </a>
      <a
        href="#contact"
        aria-label="Contact"
        className="text-neutral-400 hover:text-white transition-colors flex items-center"
      >
        <Mail className="w-5 h-5" strokeWidth={1.5} />
      </a>
      <button
        type="button"
        aria-label="Toggle Theme"
        className="text-neutral-400 hover:text-white transition-colors flex items-center"
      >
        <Sun className="w-5 h-5" strokeWidth={1.5} />
      </button>
    </nav>
  )
}

