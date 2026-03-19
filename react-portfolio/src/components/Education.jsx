import { GraduationCap } from 'lucide-react'

export default function Education() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-medium tracking-tight text-neutral-900 dark:text-white flex items-center gap-2 mb-1">
        <GraduationCap className="w-6 h-6 text-neutral-500 dark:text-neutral-400" strokeWidth={1.5} />
        Education
      </h2>

      <div className="flex flex-col gap-2 p-6 rounded-xl bg-neutral-50 dark:bg-white/[0.02] backdrop-blur-md border border-neutral-200 dark:border-white/10 shadow-lg hover:bg-neutral-100 dark:hover:bg-white/[0.04] transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-3">
          <h3 className="text-lg font-normal text-neutral-900 dark:text-white tracking-tight">
            Bachelor of Technology in Computer Science and Engineering
          </h3>
          <span className="inline-flex items-center px-3 py-1.5 text-base font-normal bg-neutral-100 dark:bg-white/[0.05] text-neutral-600 dark:text-neutral-300 rounded-lg border border-neutral-200 dark:border-white/10">
            CGPA: 7.86/10
          </span>
        </div>
        <p className="text-base text-neutral-600 dark:text-neutral-400 mt-1 font-normal">
          University of Petroleum and Energy Studies (UPES)
        </p>
        <p className="text-base text-neutral-500 dark:text-neutral-500 font-normal">
          Major in Cybersecurity and Forensics
        </p>
      </div>
    </section>
  )
}

