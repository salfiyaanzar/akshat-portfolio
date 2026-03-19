import { ArrowUpRight, Folder } from 'lucide-react'

const PROJECTS = [
  {
    title: 'Cloud-based system-health & Misconfiguration Analyzer',
    description:
      'Automated detection and remediation of misconfigurations across AWS, Azure, and GCP, enhancing compliance. Designed a scalable microservices architecture with real-time scanning and actionable reporting.',
    href: '#',
    wide: true,
  },
  {
    title: 'Reconnaissance framework',
    description:
      'OSINT metadata extraction platform using Python and REST APIs for major social networks to visualize digital footprints and support ethical investigations.',
    href: '#',
  },
  {
    title: 'Lightweight image encryptor',
    description:
      'Secure image encryption tool supporting naïve encryption over SMTP/POP3, optimized for low-end systems achieving sub-2s processing time per image.',
    href: 'https://github.com/AkshatNigam12/Lightweight-functional-based-image-encryptor',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-4">
      <h2 className="text-2xl font-medium tracking-tight text-neutral-900 dark:text-white flex items-center gap-2 mb-1">
        <Folder className="w-6 h-6 text-neutral-500 dark:text-neutral-400" strokeWidth={1.5} />
        Projects
      </h2>

      <div className="grid sm:grid-cols-2 gap-3">
        {PROJECTS.map((p) => (
          <a
            key={p.title}
            href={p.href}
            target={p.href.startsWith('http') ? '_blank' : undefined}
            rel={p.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={[
              'group flex flex-col gap-2 p-5 rounded-xl bg-neutral-50 dark:bg-white/[0.02] backdrop-blur-md border-[1.5px] dark:border border-neutral-200 dark:border-white/10 shadow-lg hover:bg-neutral-100 dark:hover:bg-white/[0.04] hover:border-neutral-300 dark:hover:border-white/20 transition-all duration-300',
              p.wide ? 'sm:col-span-2' : '',
            ].join(' ')}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-normal text-neutral-900 dark:text-white group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors">
                {p.title}
              </h3>
              <ArrowUpRight className="w-5 h-5 text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
            </div>
            <p className="text-base text-neutral-600 dark:text-neutral-400 leading-normal font-normal">
              {p.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  )
}

