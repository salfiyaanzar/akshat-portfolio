import { Code, Home, Mail, Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext.jsx'

export default function TopNav() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="fixed z-50 flex items-center justify-center gap-5 sm:gap-8 px-4 sm:px-7 py-2.5 sm:py-3 left-1/2 -translate-x-1/2 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border border-neutral-200 dark:border-white/10 shadow-2xl rounded-full min-w-0 max-w-[calc(100vw-2rem)] top-[max(1rem,env(safe-area-inset-top))] sm:top-6">
      <a
        href="#hero"
        aria-label="Home"
        className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors flex items-center p-2 -m-2 sm:p-0 sm:m-0"
      >
        <Home className="w-5 h-5 shrink-0" strokeWidth={1.5} />
      </a>
      <a
        href="#projects"
        aria-label="Projects"
        className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors flex items-center p-2 -m-2 sm:p-0 sm:m-0"
      >
        <Code className="w-5 h-5 shrink-0" strokeWidth={1.5} />
      </a>
      <a
        href="#contact"
        aria-label="Contact"
        className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors flex items-center p-2 -m-2 sm:p-0 sm:m-0"
      >
        <Mail className="w-5 h-5 shrink-0" strokeWidth={1.5} />
      </a>
      <button
        type="button"
        aria-label="Toggle Theme"
        onClick={toggleTheme}
        className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors flex items-center p-2 -m-2 sm:p-0 sm:m-0"
      >
        {theme === 'light' ? (
          <Moon className="w-5 h-5 shrink-0" strokeWidth={1.5} />
        ) : (
          <Sun className="w-5 h-5 shrink-0" strokeWidth={1.5} />
        )}
      </button>
    </nav>
  )
}

