import { useMemo } from 'react'

const MONTHS = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar']

const COLORS = [
  'bg-white/[0.02] border border-white/5',
  'bg-white/[0.02] border border-white/5',
  'bg-white/[0.02] border border-white/5',
  'bg-neutral-800',
  'bg-neutral-600',
  'bg-neutral-400',
  'bg-neutral-200',
]

function randomColorIdx() {
  const rand = Math.random()
  let colorIdx = 0
  if (rand > 0.6) colorIdx = 3
  if (rand > 0.8) colorIdx = 4
  if (rand > 0.9) colorIdx = 5
  if (rand > 0.95) colorIdx = 6
  return colorIdx
}

export default function ContributionGraph() {
  const grid = useMemo(() => {
    const cols = 52
    const rows = 7
    return Array.from({ length: cols }, () =>
      Array.from({ length: rows }, () => randomColorIdx()),
    )
  }, [])

  return (
    <section className="flex flex-col gap-3 w-full overflow-hidden">
      <div className="flex justify-between text-base text-neutral-500 px-1 font-normal">
        {MONTHS.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>

      <div className="flex gap-[3px] overflow-x-auto pb-2 scrollbar-hide">
        <div className="flex gap-[3px]">
          {grid.map((col, colIdx) => (
            <div key={colIdx} className="grid grid-rows-7 gap-[3px]">
              {col.map((colorIdx, rowIdx) => (
                <div
                  key={rowIdx}
                  className={`w-[11px] h-[11px] ${COLORS[colorIdx]} rounded-[2px]`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between text-base text-neutral-500 mt-1 font-normal">
        <span>514 contributions in the last year</span>
        <div className="flex items-center gap-2">
          <span>Less</span>
          <div className="w-3.5 h-3.5 bg-white/[0.03] border border-white/5 rounded-[3px]" />
          <div className="w-3.5 h-3.5 bg-neutral-800 rounded-[3px]" />
          <div className="w-3.5 h-3.5 bg-neutral-600 rounded-[3px]" />
          <div className="w-3.5 h-3.5 bg-neutral-400 rounded-[3px]" />
          <div className="w-3.5 h-3.5 bg-neutral-200 rounded-[3px]" />
          <span>More</span>
        </div>
      </div>
    </section>
  )
}

