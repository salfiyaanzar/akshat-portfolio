import {
  Activity,
  Cpu,
  Database,
  FileCode,
  Globe,
  Layers,
  LayoutTemplate,
  Lightbulb,
  Monitor,
  Network,
  RefreshCw,
  Shield,
  ShieldAlert,
  ShieldCheck,
  TerminalSquare,
  Users,
} from 'lucide-react'

function SkillPill({ icon: Icon, label }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 text-base font-normal border border-white/10 bg-white/[0.04] rounded-lg text-neutral-300">
      <Icon className="w-4 h-4 text-neutral-500" strokeWidth={1.5} />
      {label}
    </span>
  )
}

function SkillCard({ title, children, colSpan2 }) {
  return (
    <div
      className={[
        'flex flex-col gap-5 p-7 rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/10 shadow-lg',
        colSpan2 ? 'sm:col-span-2' : '',
      ].join(' ')}
    >
      <h3 className="text-base font-normal text-neutral-500 flex items-center gap-2 uppercase tracking-wider">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2.5">{children}</div>
    </div>
  )
}

export default function Skills() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-3xl font-medium tracking-tight text-white flex items-center gap-3 mb-2">
        <Cpu className="w-7 h-7 text-neutral-400" strokeWidth={1.5} />
        Skills
      </h2>

      <div className="grid sm:grid-cols-2 gap-4">
        <SkillCard title="Security Operations">
          <SkillPill icon={Activity} label="Splunk" />
          <SkillPill icon={Layers} label="ELK Stack" />
          <SkillPill icon={ShieldAlert} label="Wazuh XDR" />
        </SkillCard>

        <SkillCard title="OS & Admin">
          <SkillPill icon={TerminalSquare} label="Linux" />
          <SkillPill icon={LayoutTemplate} label="Windows" />
          <SkillPill icon={Network} label="Networking" />
        </SkillCard>

        <SkillCard title="Network Monitoring">
          <SkillPill icon={ShieldCheck} label="Suricata IDS/IPS" />
          <SkillPill icon={Globe} label="DNS Config" />
          <SkillPill icon={Shield} label="Firewall" />
        </SkillCard>

        <SkillCard title="Programming">
          <SkillPill icon={FileCode} label="Python" />
          <SkillPill icon={Monitor} label="Bash" />
          <SkillPill icon={Database} label="SQL" />
          <SkillPill icon={TerminalSquare} label="PowerShell" />
        </SkillCard>

        <SkillCard title="Soft Skills" colSpan2>
          <SkillPill icon={RefreshCw} label="Adaptability" />
          <SkillPill icon={Lightbulb} label="Creativity" />
          <SkillPill icon={Users} label="Team Collaboration" />
        </SkillCard>
      </div>
    </section>
  )
}

