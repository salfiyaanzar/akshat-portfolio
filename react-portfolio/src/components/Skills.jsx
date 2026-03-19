import {
  Activity,
  Box,
  Cloud,
  Cpu,
  Database,
  FileCode,
  Globe,
  Layers,
  LayoutTemplate,
  Lightbulb,
  Monitor,
  Network,
  Package,
  RefreshCw,
  Server,
  Shield,
  ShieldAlert,
  ShieldCheck,
  TerminalSquare,
  Users,
} from 'lucide-react'

function SkillPill({ icon: Icon, label }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-sm font-normal border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/[0.04] rounded-lg text-neutral-700 dark:text-neutral-300">
      <Icon className="w-3.5 h-3.5 text-neutral-500" strokeWidth={1.5} />
      {label}
    </span>
  )
}

function SkillCard({ title, children }) {
  return (
    <div className="flex flex-row flex-wrap items-center gap-x-3 gap-y-2 p-3.5 rounded-xl bg-white/[0.02] backdrop-blur-md border border-white/10 shadow-lg min-w-0">
      <h3 className="text-sm font-normal text-neutral-500 uppercase tracking-wider whitespace-nowrap shrink-0">
        {title}
      </h3>
      <div className="flex flex-wrap items-center gap-2">{children}</div>
    </div>
  )
}

export default function Skills() {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-2xl font-medium tracking-tight text-neutral-900 dark:text-white flex items-center gap-2 mb-1">
        <Cpu className="w-6 h-6 text-neutral-500 dark:text-neutral-400" strokeWidth={1.5} />
        Skills
      </h2>

      <div className="flex flex-wrap gap-3">
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

        <SkillCard title="DevOps">
          <SkillPill icon={Box} label="Terraform" />
          <SkillPill icon={Package} label="Docker" />
          <SkillPill icon={Server} label="Kubernetes" />
          <SkillPill icon={Cloud} label="GCP" />
        </SkillCard>

        <SkillCard title="Soft Skills">
          <SkillPill icon={RefreshCw} label="Adaptability" />
          <SkillPill icon={Lightbulb} label="Creativity" />
          <SkillPill icon={Users} label="Team Collaboration" />
        </SkillCard>
      </div>
    </section>
  )
}

