import { GraduationCap } from 'lucide-react'

export default function Education() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-3xl font-medium tracking-tight text-white flex items-center gap-3 mb-2">
        <GraduationCap className="w-7 h-7 text-neutral-400" strokeWidth={1.5} />
        Education
      </h2>

      <div className="flex flex-col gap-2 p-7 rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/10 shadow-lg hover:bg-white/[0.04] transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-2">
          <h3 className="text-xl font-normal text-white tracking-tight">
            Bachelor of Technology in Computer Science and Engineering
          </h3>
          <span className="inline-flex items-center px-3 py-1.5 text-base font-normal bg-white/[0.05] text-neutral-300 rounded-lg border border-white/10">
            CGPA: 7.86/10
          </span>
        </div>
        <p className="text-lg text-neutral-400 mt-2 font-normal">
          University of Petroleum and Energy Studies (UPES)
        </p>
        <p className="text-lg text-neutral-500 font-normal">
          Major in Cybersecurity and Forensics
        </p>
      </div>
    </section>
  )
}

