import { BadgeCheck } from 'lucide-react'

export default function HeaderBio() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-5 relative">
        <div className="flex items-center gap-4 sm:gap-5">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-neutral-800 dark:border-black bg-neutral-100 dark:bg-white/[0.03] backdrop-blur-md flex-shrink-0 shadow-[0_0_12px_rgba(0,0,0,0.08)] dark:shadow-[0_0_12px_rgba(255,253,248,0.2)] transition-transform duration-200 ease-out hover:rotate-6">
            <img
              src="/avatar.png"
              alt="Akshat Nigam"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-900 dark:text-white flex items-center gap-2">
              Akshat Nigam
              <BadgeCheck className="w-6 h-6 text-blue-500" strokeWidth={1.5} />
            </h1>

            <p className="text-base text-neutral-600 dark:text-neutral-400 mt-1 font-normal">
              <span className="inline-flex flex-col h-6 overflow-hidden align-top">
                <span
                  className="flex flex-col"
                  style={{
                    animation:
                      'text-slide-up 6s cubic-bezier(0.4, 0, 0.2, 1) infinite',
                  }}
                >
                  <span className="h-6 flex items-center">SOC Analyst</span>
                  <span className="h-6 flex items-center">Cyber Security</span>
                  <span className="h-6 flex items-center">DevSecOps</span>
                  <span className="h-6 flex items-center">SOC Analyst</span>
                </span>
              </span>
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 flex items-center gap-3 sm:gap-5 text-neutral-600 dark:text-neutral-400">
            <a
              href="https://github.com/AkshatNigam12"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center"
              aria-label="GitHub"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://x.com/akshat8412"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center"
              aria-label="X"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/akshatnigam84/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center"
              aria-label="LinkedIn"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
        </div>
      </div>

      <div className="flex flex-col gap-4 text-neutral-600 dark:text-neutral-400 text-[0.95rem] sm:text-[1.05rem] leading-normal font-normal">
        <p>
        Hey, I'm Akshat, a cybersecurity analyst who enjoys securing systems, analyzing threats, and building resilient infrastructures where reliability, protection, and detail matter strongly. I focus on vulnerabilities and building solutions that are practical and secure.
        </p>
        <p>
        I'm flexible with tools and comfortable adapting to different environments, though I enjoy working with modern security platforms and automation tools new. I'm always open to learning, improving, and taking on new challenges.
        </p>
      </div>
    </section>
  )
}

