import { Leaderboard } from "@api/db/schema/schema"

interface PodiumProps {
  data: Leaderboard[]
  rd: 'rd1' | 'rd2' | 'rd3' | 'total'
}

export function Podium({ data, rd }: PodiumProps) {
  if (data.length === 0) return null

  const first = data[0]
  const second = data[1]
  const third = data[2]

  return (
    <div className="max-w-6xl mx-auto mb-8">
      <div className="flex items-end justify-center gap-4">
        {second && (
          <div className="flex flex-col items-center bg-white rounded border border-slate-300 px-5 py-4 w-32">
            <span className="text-2xl">🥈</span>
            <span className="text-xs font-semibold text-slate-800 mt-1 text-center leading-tight">
              {second.fullname}
            </span>
            <span className="text-xs text-slate-500 mt-1">{second[rd]}</span>
          </div>
        )}
        {first && (
          <div className="flex flex-col items-center bg-white rounded border border-amber-400 px-5 py-6 w-36">
            <span className="text-3xl">🥇</span>
            <span className="text-sm font-bold text-slate-800 mt-1 text-center leading-tight">
              {first.fullname}
            </span>
            <span className="text-sm font-semibold text-orange-500 mt-1">{first[rd]}</span>
          </div>
        )}
        {third && (
          <div className="flex flex-col items-center bg-white rounded border border-amber-700 px-5 py-4 w-32">
            <span className="text-2xl">🥉</span>
            <span className="text-xs font-semibold text-slate-800 mt-1 text-center leading-tight">
              {third.fullname}
            </span>
            <span className="text-xs text-slate-500 mt-1">{third[rd]}</span>
          </div>
        )}
      </div>
    </div>
  )
}
