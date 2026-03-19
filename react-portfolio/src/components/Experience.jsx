import { Briefcase } from 'lucide-react'

const EXPERIENCE = [
  {
    role: 'Summer Intern (On-site)',
    org: 'Indian Space Research Organisation (ISRO)',
    bullets: [
      'Tuned and managed SIEM alerts using ELK Stack, reducing false positives by 30% and alerting fatigue by 40%.',
      'Automated log parsing of 1,000+ logs daily using Python, improving threat detection by 20%.',
      'Configured centralised logging with Elasticsearch over 50+ endpoints across on-prem infrastructure.',
    ],
  },
  {
    role: 'Summer Intern (On-site)',
    org: 'Remote Sensing Application Centre (RSAC)',
    bullets: [
      'Conducted full lifecycle penetration tests on enterprise infra using security automation tools.',
      'Simulated advanced threats and discovered 3 high-risk vulnerabilities, directly informing remediation.',
      'Delivered internal cybersecurity workshops, reducing phishing incidents among 50+ staff.',
    ],
  },
]

export default function Experience() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-medium tracking-tight text-neutral-900 dark:text-white flex items-center gap-2 mb-1">
        <Briefcase className="w-6 h-6 text-neutral-500 dark:text-neutral-400" strokeWidth={1.5} />
        Experience
      </h2>

      <div className="flex flex-col mt-1">
        {EXPERIENCE.map((item, idx) => {
          const isLast = idx === EXPERIENCE.length - 1
          return (
            <div key={`${item.org}-${idx}`} className="flex gap-5 group">
              <div className="relative flex flex-col items-center pt-2">
                <div className="w-3 h-3 bg-neutral-400 rounded-full z-10 ring-2 ring-[#050505] outline outline-1 outline-white/10" />
                {!isLast ? (
                  <div className="absolute top-6 bottom-[-12px] w-px bg-neutral-200 dark:bg-white/10" />
                ) : null}
              </div>

              <div className={`flex-1 ${isLast ? 'pb-0' : 'pb-6'}`}>
                <div className="flex flex-col gap-3 p-5 rounded-xl bg-white/[0.02] backdrop-blur-md border border-white/10 shadow-lg hover:bg-white/[0.04] transition-colors">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-normal text-neutral-900 dark:text-white tracking-tight">
                      {item.role}
                    </h3>
                    <p className="text-base font-normal text-neutral-600 dark:text-neutral-400">
                      @ {item.org}
                    </p>
                  </div>

                  <ul className="flex flex-col gap-2 text-base text-neutral-600 dark:text-neutral-400 mt-1 font-normal">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-neutral-500 dark:bg-neutral-600 flex-shrink-0" />
                        <span className="leading-normal">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

