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
    href: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-6">
      <h2 className="text-3xl font-medium tracking-tight text-white flex items-center gap-3 mb-2">
        <Folder className="w-7 h-7 text-neutral-400" strokeWidth={1.5} />
        Projects
      </h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {PROJECTS.map((p) => (
          <a
            key={p.title}
            href={p.href}
            className={[
              'group flex flex-col gap-4 p-7 rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/10 shadow-lg hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300',
              p.wide ? 'sm:col-span-2' : '',
            ].join(' ')}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-normal text-white group-hover:text-neutral-200 transition-colors">
                {p.title}
              </h3>
              <ArrowUpRight className="w-6 h-6 text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
            </div>
            <p className="text-lg text-neutral-400 leading-relaxed font-normal">
              {p.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  )
}

