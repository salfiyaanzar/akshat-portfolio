import { Code, Home, Mail, Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext.jsx'

export default function TopNav() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="fixed top-6 z-50 flex items-center gap-8 px-7 py-3 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border border-neutral-200 dark:border-white/10 shadow-2xl rounded-full">
      <a
        href="#"
        aria-label="Home"
        className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors flex items-center"
      >
        <Home className="w-5 h-5" strokeWidth={1.5} />
      </a>
      <a
        href="#projects"
        aria-label="Projects"
        className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors flex items-center"
      >
        <Code className="w-5 h-5" strokeWidth={1.5} />
      </a>
      <a
        href="#contact"
        aria-label="Contact"
        className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors flex items-center"
      >
        <Mail className="w-5 h-5" strokeWidth={1.5} />
      </a>
      <button
        type="button"
        aria-label="Toggle Theme"
        onClick={toggleTheme}
        className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors flex items-center"
      >
        {theme === 'light' ? (
          <Moon className="w-5 h-5" strokeWidth={1.5} />
        ) : (
          <Sun className="w-5 h-5" strokeWidth={1.5} />
        )}
      </button>
    </nav>
  )
}

